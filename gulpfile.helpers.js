'use strict';

const uglify = require( 'gulp-uglify' );
const browserify = require( 'browserify' );
const babelify = require( 'babelify' );
const es3ify = require( 'es3ify' );

const source = require( 'vinyl-source-stream' );
const buffer = require( 'vinyl-buffer' );

const production = (process.env.NODE_ENV == 'production');

exports.getBowerPackageIds = getBowerPackageIds;
exports.getNPMPackageIds = getNPMPackageIds;
exports.getConfiguredUglify = getConfiguredUglify;
exports.getBundler = getBundler;

function getBowerPackageIds() {
	let bowerManifest = {};

	try {
		bowerManifest = require( './bower.json' );
	}
	catch( error ) {
		// No bower manifest.
	}

	return Object.keys( bowerManifest.dependencies || {} ) || [];
}

function getNPMPackageIds() {
	let packageManifest = {};

	try {
		packageManifest = require( './package.json' );
	}
	catch( error ) {
		// No package.json...?
	}

	return Object.keys( packageManifest.dependencies || {} ) || [];
}

function getConfiguredUglify( options ) {
	return uglify( Object.assign({
		preserveComments: ! production,
		compress: production ? {} : false,
		output: production ? null : {
			beautify: true,
		},
		// Note: If you have issues with Uglify stomping on names it shouldn't, then set this to just false.
		mangle: false
	}, options||{} ));
}

function getBundler( options ) {
	options = Object.assign( {
		browserifyOptions: {
			// Since we separate source maps, it doesn't matter if we always include them.
			debug: true
		},
		// TODO: Load from .babelrc?
		babelifyOptions: {
			presets: [ 'es2015', 'stage-0' ],
			plugins: [
				// [ "transform-react-jsx", {
				// 	pragma: 'element',
				// }],
				// [ "transform-flow-strip-types" ],
			]
		},
		// es3ifyOptions: { global: true },
	}, options || {} );

	let browserifyOptions = options.browserifyOptions,
		babelifyOptions = options.babelifyOptions,
		// es3ifyOptions = options.es3ifyOptions;

	return browserify( browserifyOptions )
		.transform( babelify, babelifyOptions )
		// .transform( es3ify, es3ifyOptions )
		;
}

function bundle( bundler, sourceName ) {
	let bufferedStream = bundler.bundle()
		// Browserify Errors.
		.on( 'error', err => {
			gutil.log( err.message );
			this.emit( 'end' );
		})
		.pipe( source( sourceName ) )
		.pipe( buffer() )
		;

	return bufferedStream;
}
