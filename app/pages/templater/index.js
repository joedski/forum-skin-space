'use strict';

import { string, element } from 'deku';

import page from './page';

export default function templater( node, context, pageData ) {
	let output = string.render( node, context );
	return page.wrap( output, pageData );
};

templater.write = ( node, data, pageData ) => {
	process.stdout.write( templater( node, data, pageData ) );
};
