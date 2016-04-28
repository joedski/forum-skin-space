import ForumItemStatus from './forum-item-status';
import element from '../templater/element';
import classNames from 'classnames';

// Currently assuming columns in data/forum-index-columns.json

export default {
	render({ props }) {
		let { row } = props;
		let rowClass = row.class;

		let lastPost = ({ member, date, thread }) => (
				<span>Last Post by <a href="#member">{ member }</a> { date }<span innerHTML="<br>"/>In <a href="#thread-post">{ thread }</a></span>
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
						{ row.description
							? <div class="item-detail description">{ row.description }</div>
							: null }
						{ row.subboards && row.subboards.length
							? <div class="item-detail subboards">Subboards: {
								row.subboards.map( ( sb, i ) => ([ (i ? ', ' : null), <a href="#subboard">{sb}</a>]) )
							}</div>
							: null }
					</div>
				</td>
				<td class={ classNames( 'last-post', 'text-right' ) }>
					{ lastPost( row.lastPost ) }
				</td>
				<td class={ classNames( 'thread-count', 'text-right' ) }>
					{ row.threadCount }
				</td>
				<td class={ classNames( 'post-count', 'text-right' ) }>
					{ row.postCount }
				</td>
			</tr>
		);
	}
}
