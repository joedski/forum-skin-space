import element from '../templater/element';

export default {
	render({ props, children }) {
		let activeCrumb = props.crumbs[ props.crumbs.length - 1 ];
		let crumbs = props.crumbs.map( c => (
			c == activeCrumb
				? <li class="active">{ c.title }</li>
				: <li><a href={ c.link }>{ c.title }</a></li>
		));

		return (
			<ol class="breadcrumb">
				{ crumbs }
			</ol>
		);
	}
}
