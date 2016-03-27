'use strict';

const gulpif = require( 'gulp-if' );
const gulp = require( 'gulp' );
const gutil = require( 'gulp-util' );
const sourcemaps = require( 'gulp-sourcemaps' );
const sass = require( 'gulp-sass' );
const concat = require( 'gulp-concat' );

const source = require( 'vinyl-source-stream' );
const buffer = require( 'vinyl-buffer' );

const helpers = require( './gulpfile.helpers' );

const gBabel = require( 'gulp-babel' );
const fs = require( 'fs' );
// const babel = require( 'babel-core' );
const async = require( 'async' );
// const glob = require( 'glob' );
const childProcess = require( 'child_process' );
const through = require( 'through2' );
const rimraf = require( 'rimraf' );

const nodeResolve = require( 'resolve' );

gulp.task( 'default', [
	'build-page-scripts',
	'build-page-scripts-deps',
	'build-page-styles',
	'build-vendor-styles',
	'build-demo-pages',
	'copy-assets',
]);

gulp.task( 'watch', () => {
	gulp.watch( 'app/pages/**/*', [ 'build-demo-pages' ]);
	gulp.watch( 'app/scripts/**/*', [ 'build-page-scripts' ]);
	gulp.watch( 'app/styles/**/*', [ 'build-page-styles' ]);
	gulp.watch( 'app/assets/**/*', [ 'copy-assets' ]);
})

gulp.task( 'clean', ( done ) => {
	async.map([
		'public',
		'app/pages.node',
	], rimraf, done );
});

gulp.task( 'build-page-styles', () => {
	let stream = gulp.src([ 'app/styles/theme/*.{scss,css}', '!_*' ])
		.pipe( sourcemaps.init() )
		.pipe( gulpif( /\.scss$/, sass({
			includePaths: [
				'node_modules/bootstrap-sass/assets/stylesheets',
			],
		}) ) )
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( 'public' ) )
		;

	return stream;
});

gulp.task( 'build-vendor-styles', [ 'build-font-awesome-styles' ]);

gulp.task( 'build-font-awesome-styles', () => {
	let stream = gulp.src([ 'app/styles/font-awesome/*.scss', '!_*' ])
		.pipe( sass() )
		.pipe( gulp.dest( 'public' ) )
		;

	return stream;
});

gulp.task( 'build-page-scripts', () => {
	let bundler = helpers.getBundler();

	bundler.add( './app/scripts/index.js' );

	let stream = helpers.bundle( bundler, 'theme.js' );

	stream
		.pipe( sourcemaps.init({
			loadMaps: true
		}))
		.pipe( sourcemaps.write( './' ) )
		.pipe( gulp.dest( 'public' ) )
		;

	return stream;
});

gulp.task( 'build-page-scripts-deps', () => {
	let srcIds = [ 'jquery', 'bootstrap-sass' ];
	let srcs = srcIds.map( s => nodeResolve.sync( s ) );

	gulp.src( srcs )
		.pipe( concat( 'vendor.js' ) )
		.pipe( gulp.dest( 'public' ) )
		;
})

gulp.task( 'build-demo-pages', [ 'babel-demo-pages' ], () => {
	let stream = gulp.src( 'app/pages.node/*.js', {
			base: 'app/pages.node',
			// We only need the names here...
			read: false
		})
		.pipe( through.obj( function ( file, encoding, next ) {
			childProcess.execFile( 'node', [ file.path ], ( error, stdout, stderr ) => {
				if( error ) return next( error );

				// file.extname doesn't exist...?
				file.path = file.path.replace( /\.js$/, '.html' );
				file.contents = new Buffer( stdout );
				next( null, file );
			});
		}))
		.pipe( gulp.dest( 'public' ) )
		;

	return stream;
});

gulp.task( 'babel-demo-pages', () => {
	let stream = gulp.src( 'app/pages/**/*.js', { base: 'app/pages' })
		.pipe( gBabel() )
		.pipe( gulp.dest( 'app/pages.node' ) )
		;

	return stream;
});

gulp.task( 'copy-assets', () => {
	let stream = gulp.src([ 'app/assets/**/*', '!*.html' ])
		.pipe( gulp.dest( 'public' ) )
		;

	return stream;
})
