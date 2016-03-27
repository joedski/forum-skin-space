import element from '../templater/element';

export default {
	render({ props, children }) {
		return (
			<div class="content-section">{ children }</div>
		)
	}
}
