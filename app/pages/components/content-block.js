import { element } from 'deku';
import classNames from 'classnames';

export default {
	render({ children, props }) {
		let importance = props.importance || null;

		return (
			<div class={ classNames( 'content-block', importance, {
				'content-block-flush': props.flush
			})}>
				<div class="container">
					{ children }
				</div>
			</div>
		);
	}
};
