import element from '../templater/element';
import classNames from 'classnames';

const ForumControls = {
	render({ props, children }) {
		return (
			<div class="container">
				<div class="forum-controls">
					<div class="pull-right">
						{ props.buttons && props.buttons.length
							? (
								props.buttons.map( b => (
									<button class="btn btn-default">
										<i class={ classNames( "fa", b.icon, "icon-btn" ) }></i>
										<span class="btn-label">{b.label}</span>
									</button>
								))
							)
							: null }
					</div>
				</div>
			</div>
		);
	},
}

ForumControls.ForumBoard = {
	render({ props, children }) {
		return (
			<ForumControls buttons={[
				{ "label": "New Thread", "icon": "fa-plus" },
				{ "label": "New Poll", "icon": "fa-bar-chart" },
			]}/>
		)
	}
}

export default ForumControls;
