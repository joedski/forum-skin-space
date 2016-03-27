import { element } from 'deku';

function renderHeaders( columns ) {
	return (
		<tr>
			{ columns.map( c => <th class={ c.class }>{ c.title }</th> ) }
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
				<table class="content-table">
					<tbody>
						{ renderHeaders( props.data.columns ) }
						{ props.data.rows.map( r => renderRow( r, props.data.columns ) ) }
					</tbody>
				</table>
			</div>
		);
	}
};
