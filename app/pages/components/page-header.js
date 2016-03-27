import element from '../templater/element';

export default {
	render({ props, children, context }) {
		return (
			<h1><span class="logo-image"></span>{ props.title }</h1>
		)
	}
}
