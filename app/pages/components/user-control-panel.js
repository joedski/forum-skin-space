import element from '../templater/element';
import ContentBlock from './content-block';

export default {
	render({ props, children }) {
		let avatar = null;
		let controlPanelNav;

		if( props.user ) {
			if( props.user.avatar ) {
				// ...?
			}
			else {
				avatar = null;
			}

			controlPanelNav = (
				<div class="collapse navbar-collapse" id="user-control-panel-nav">
					<p class="navbar-text">Welcome <a href="#member-link">{ props.user.name }</a></p>
					<ul class="nav navbar-nav">
						<li><a href="#message-center">
							{ props.user.messageCount } Message{ props.user.messageCount == 1 ? '' : 's' }
						</a></li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Controls&nbsp;<span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li>
									<a href="#user-control-panel">Control Panel</a>
								</li>
								<li>
									<a href="#chat">Chat</a>
								</li>
								<li>
									<a href="#member-list">Members</a>
								</li>
								<li>
									<a href="#tos">Rules</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#logout">Logout</a>
						</li>
					</ul>
				</div>
			);
		}
		else {
			avatar = null;

			controlPanelNav = (
				<div class="collapse navbar-collapse" id="user-control-panel-nav">
					<p class="navbar-text">Welcome Guest</p>
					<ul class="nav navbar-nav">
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Controls&nbsp;<span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li>
									<a href="#chat">Chat</a>
								</li>
								<li>
									<a href="#member-list">Members</a>
								</li>
								<li>
									<a href="#tos">Rules</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#logout">Login</a>
						</li>
					</ul>
				</div>
			);
		}

		if( props.user ) {
			return (
				<div id="user-control-panel">
					<ContentBlock flush>
						<div class="navbar user-control-panel-navbar">
							<div class="navbar-header">
								<button
									type="button"
									class="navbar-toggle collapsed"
									data-toggle="collapse"
									data-target="#user-control-panel-nav"
									aria-expanded="false"
									>
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
								{ avatar }
							</div>
							{ controlPanelNav }
						</div>
					</ContentBlock>
				</div>
			);
		}
	}
}
