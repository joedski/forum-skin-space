import { element } from 'deku';
import classNames from 'classnames';

let duid = 0;
let getDuid = () => duid++;

export default {
	Dropdown: {
		render({ props, children, context }) {
			let duid = props.dropdownId != null
				? props.dropdownId
				: getDuid()
				;

			duid = String( duid );

			let toggle;

			switch( props.toggleType ) {
				case 'button': {
					toggle = (
						<button id={ duid }
							type="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							>
							{ props.label }
							<span class="caret"></span>
						</button>
					);

					break;
				}

				default:
				case 'link': {
					toggle = (
						<a id={ duid }
							href="#"
							class="dropdown-toggle"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							>
							{ props.label }
							<span class="caret"></span>
						</a>
					);
				}
			}

			return (
				<div class="dropdown">
					{ toggle }
					<ul class={classNames(
							'dropdown-menu',
							{
								'dropdown-menu-right': !! props.right
							}
						)}
						aria-labelledby={ duid }
						>
						{ children }
					</ul>
				</div>
			);
		}
	},

	Item: {
		render({ props, children, context }) {
			return (
				<li>{ children }</li>
			)
		}
	},

	LinkItem: {
		render({ props, children, context }) {
			return (
				<li><a href={ props.href }>{ children }</a></li>
			);
		}
	},

	DividerItem: {
		render() {
			return (<li class="divider" roll="separator"></li>);
		}
	},

	HeaderItem: {
		render({ children }) {
			return (
				<li class="dropdown-header">{ children }</li>
			)
		}
	}
}
