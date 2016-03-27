import { string, element } from 'deku';
import templater from './templater';
import classNames from 'classnames';

import PageHeader from './components/page-header';
import ContentSection from './components/content-section';
import UserControlPanel from './components/user-control-panel';
import Breadcrumb from './components/breadcrumb';
import MessageBar from './components/message-bar';
import ContentBlock from './components/content-block';
import ContentHeader from './components/content-header';
import ContentTable from './components/content-table';

let page = ( state ) => {
	return (
		<div id="container">
			<PageHeader title={ state.forumTitle }/>
			<ContentSection>
				<UserControlPanel user={{
					name: "Commander",
					messageCount: 0,
				}}/>
				<ContentBlock style="info">
					<MessageBar>An important message is being displayed.</MessageBar>
				</ContentBlock>
			</ContentSection>
			<ContentSection>
				<ContentBlock style="clear">
					<Breadcrumb crumbs={[
						{ title: "Forum Index", link: "#index" },
					]}/>
				</ContentBlock>
			</ContentSection>

			<ContentSection>
				<ContentHeader>A Top-Level Forum Index or Subforum Index</ContentHeader>

				<ContentBlock>
					<ContentTable
						itemRow={( row, columns ) => {
							let rowClass = row.class;

							return (
								<tr class={ classNames( rowClass ) }>
									<td class={ classNames( columns[ 0 ].class, row[ 0 ].class, 'with-status' ) }>
										{/*<ForumItemStatus/>*/}
										<div className="status"></div>
										<div class="title-content">
											<a href="#forum">{ row[ 0 ].title }</a>
											{ row[ 0 ].description
												? <div class="description">{row[ 0 ].description}</div>
												: null }
											{ row[ 0 ].subboards
												? <div class="subboards">Subboards: {row[ 0 ].subboards.map( sb => (<a href="#subboard">{sb}</a>) )}</div>
												: null }
										</div>
									</td>
									<td class={ classNames( columns[ 1 ].class ) }>
										{ row[ 1 ] }
									</td>
									<td class={ classNames( columns[ 2 ].class ) }>
										{ row[ 2 ] }
									</td>
									<td class={ classNames( columns[ 3 ].class ) }>
										{ row[ 3 ] }
									</td>
								</tr>
							);
						}}
						data={{
							columns: [
								{ class: "title", title: "Board Name" },
								{ class: "last-post", title: "Last Post" },
								{ class: "thread-count", title: "Threads" },
								{ class: "post-count", title: "Posts" },
							],
							rows: [
								[
									{
										class: [],
										title: "Title with Description and Subboards",
										description: "This demonstrates a title with many things under it.",
										subboards: [ "Subboard 1", "Subboard 2", "Subboard 3" ]
									},
									(<span>Last Post by <a href="#member">Member</a> Jan 23, 2016<br/>In <a href="#thread-post">Thread Title</a></span>),
									("12"),
									("34"),
								]
							]
						}}/>
				</ContentBlock>
			</ContentSection>
		</div>
	);
};

templater.write( page({
	forumTitle: "Space Theme"
}, {}, {
	pageTitle: "Space Theme"
}) );
