import { element } from 'deku';
import classNames from 'classnames';

export default {
	render({ props, children }) {
		return (
			<div class="message-bar">
				{ children }
			</div>
		)
	}
}