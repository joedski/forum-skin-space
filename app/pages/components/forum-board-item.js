import ForumItemStatus from './forum-item-status';
import element from '../templater/element';
import classNames from 'classnames';

// Currently assuming columns in data/forum-board-columns.json

export default {
	render({ props }) {
		let { row } = props;
		let rowClass = row.class;

		let lastPost = ({ member, date }) => (
				<span>Last Post by <a href="#member">{ member }</a> at { date }</span>
			);

		return (
			<tr class={ classNames( rowClass ) }>
				<td class={ classNames( rowClass, 'title', 'with-status' ) }>
					<ForumItemStatus
						itemClass={ rowClass }
						/>
					<div class="item-title">
						<span className="title-content">
							<a href="#forum">{ row.title }</a>
						</span>
						{ row.threadStarter
							? <div class="item-detail thread-starter">Started by: <a href="#member">{ row.threadStarter }</a></div>
							: null }
					</div>
				</td>
				<td class={ classNames( 'thread-replies', 'text-right' ) }>
					{ row.threadReplies }
				</td>
				<td class={ classNames( 'thread-views', 'text-right' ) }>
					{ row.threadViews }
				</td>
				<td class={ classNames( 'last-post', 'text-right' ) }>
					{ lastPost( row.lastPost ) }
				</td>
			</tr>
		);
	}
}
