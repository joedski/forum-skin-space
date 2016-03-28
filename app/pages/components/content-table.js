import element from '../templater/element';
import classNames from 'classnames';

function renderHeaders( columns ) {
	return (
		<tr>
			{ columns.map( c => <th class={ classNames( c.class ) }>{ c.title }</th> ) }
		</tr>
	);
}

function defaultRenderRow( row, columns ) {
	return (
		<tr>
			{ row.map( ( r, i ) => (
				<td class={ columns[ i ].class }>{ r }</td>
			))}
		</tr>
	);
}

export default {
	render({ props, children }) {
		let renderRow = props.itemRow || defaultRenderRow;

		return (
			<div class="content-table-container">
				<table class={ classNames( 'content-table', props.class, props.classNames )}>
					<tbody>
						{ props.data && props.data.columns ? renderHeaders( props.data.columns ) : null }
						{ props.data && props.data.rows ? props.data.rows.map( r => renderRow( r, props.data.columns ) ) : null }
						{ children || null }
					</tbody>
				</table>
			</div>
		);
	}
};
