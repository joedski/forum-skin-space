import { element as dekuElement } from 'deku';

export default function element( elem, attrs, ...children ) {
	if( attrs && ('className' in attrs) ) {
		attrs.class = attrs.className;
		delete attrs.className;
	}

	return dekuElement( elem, attrs, ...children );
}
