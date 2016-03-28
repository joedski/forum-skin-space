import element from '../templater/element';
import classNames from 'classnames';

export default {
	render({ props, children }) {
		let status = statusFromProps( props.itemClass );

		return (
			<div className="forum-item-status">
				<abbr title={ status.title }>
					{ status.icon }
				</abbr>
			</div>
		)
	}
}

function statusFromProps( itemClass ) {
	let itemClasses = classNames( itemClass ).split( ' ' );

	let has = ( className ) => itemClasses.indexOf( className ) !== -1;

	let { newContent, locked, poll, sticky, hot } = {
		newContent: has( 'new-content' ),
		locked: has( 'locked' ),
		poll: has( 'poll' ),
		sticky: has( 'sticky' ),
		hot: has( 'hot' ),
	};

	if( locked ) {
		newContent = hot = false;
	}

	let title = statusTitleFromProps({ newContent, locked, poll, sticky, hot });
	let children = statusIconChildrenFromProps({ newContent, locked, poll, sticky, hot });

	return {
		title,
		icon: (
			<div className={
				classNames( 'status-icon', {
					'comp-3': children.length == 3,
					'comp-2': children.length == 2,
				})
			}>{ children }</div>
		)
	}
}

function statusTitleFromProps({ newContent, locked, poll, sticky, hot }) {
	let titleParts = [];
	let add = ( cond, part ) => cond && titleParts.push( part );

	add( locked, "Locked" );
	add( sticky, "Sticky" );
	add( hot, "Hot" );
	add( poll, "Poll" );
	add( ! poll, "Thread" );
	add( newContent, "with New Posts" );

	return titleParts.join( ' ' );
}

function statusIconChildrenFromProps({ newContent, locked, poll, sticky, hot }) {
	let children = [];

	// A couple of status colors are used:
	// icon-attention: new-content mostly.
	// icon-hot: hot
	// icon-error: for lock only.

	if( poll ) {
		children.push( <i className={ classNames( 'fa', 'fa-bar-chart', {
			'icon-hot': hot && ! newContent,
			'icon-attention': newContent,
		})}></i> );
	}

	if( sticky ) {
		children.push( <i className="fa fa-thumb-tack icon-attention"></i> );
	}

	if( locked ) {
		children.push( <i className="fa fa-lock icon-error"></i> );
	}

	if( ! children.length && hot ) {
		if( newContent ) {
			children.push( <i className="fa fa-star icon-hot"></i> );
		}
		else {
			children.push( <i className="fa fa-star-o icon-hot"></i> );
		}
	}

	if( ! children.length && newContent ) {
		children.push( <i className="fa fa-circle icon-attention"></i> );
	}

	if( ! children.length ) {
		children.push( <i className="fa fa-circle-thin"></i> );
	}

	return children;
}
