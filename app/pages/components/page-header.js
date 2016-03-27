
import { element } from 'deku';

export default {
	render({ props, children, context }) {
		return (
			<h1><span class="logo-image"></span>{ props.title }</h1>
		)
	}
}
