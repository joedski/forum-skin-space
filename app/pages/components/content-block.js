import { element } from 'deku';
import classNames from 'classnames';

export default {
	render({ children, props }) {
		let style = props.style || null;

		return (
			<div class={ classNames( 'content-block', style, {
				'content-block-flush': props.flush
			})}>
				<div class="container">
					{ children }
				</div>
			</div>
		);
	}
};
