import { element } from 'deku';

export default {
	render({ props, children }) {
		let activeCrumb = props.crumbs[ props.crumbs.length - 1 ];
		let crumbs = props.crumbs.map( c => (
			c == activeCrumb
				? <li><a href={ c.link }>{ c.title }</a></li>
				: <li class="active">{ c.title }</li>
		));

		return (
			<ol class="breadcrumb">
				{ crumbs }
			</ol>
		);
	}
}
