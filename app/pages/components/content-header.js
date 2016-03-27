import element from '../templater/element';

export default {
	render({ props, children }) {
		return (
			<div class="container">
				<h2><a href="#forum">{ children }</a></h2>
			</div>
		)
	}
}
