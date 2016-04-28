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

		if( typeof renderRow !== 'function' ) {
			let ItemRow = renderRow;

			renderRow = ( row ) => (
				<ItemRow row={ row } columns={ props.columns } />
			);
		}

		return (
			<div class="content-table-container">
				<table class={ classNames( 'content-table', props.class, props.classNames )}>
					<tbody>
						{ props.columns ? renderHeaders( props.columns ) : null }
						{ props.rows ? props.rows.map( renderRow ) : null }
						{ children || null }
					</tbody>
				</table>
			</div>
		);
	}
};
