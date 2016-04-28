import { string } from 'deku';
import element from './templater/element';
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
import ForumItemStatus from './components/forum-item-status';

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
						class="forum-index"
						itemRow={( row, columns ) => {
							let rowClass = row[ 0 ].class;

							// let rowClasses = classNames( rowClass ).split( ' ' );
							// let has = ( className ) => rowClasses.indexOf( className ) !== -1;

							return (
								<tr class={ classNames( rowClass ) }>
									<td class={ classNames( columns[ 0 ].class, row[ 0 ].class, 'with-status' ) }>
										<ForumItemStatus
											itemClass={ rowClass }
											/>
										<div class="item-title">
											<span className="title-content">
												<a href="#forum">{ row[ 0 ].title }</a>
											</span>
											{ row[ 0 ].description
												? <div class="item-detail description">{row[ 0 ].description}</div>
												: null }
											{ row[ 0 ].subboards
												? <div class="item-detail subboards">Subboards: {
													row[ 0 ].subboards.map( ( sb, i ) => ([ (i ? ', ' : null), <a href="#subboard">{sb}</a>]) )
												}</div>
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
						data={ (() => {
							let lastPost = ({ member, date, thread }) => (
									<span>Last Post by <a href="#member">{ member }</a> { date }<span innerHTML="<br>"/>In <a href="#thread-post">{ thread }</a></span>
								);

							return {
								columns: [
									{ class: "title", title: "Board Name" },
									{ class: ["last-post", "text-right"], title: "Last Post" },
									{ class: ["thread-count", "text-right"], title: "Threads" },
									{ class: ["post-count", "text-right"], title: "Posts" },
								],
								rows: [
									// Note: Since deku generates both an open and close tag,
									// to use a <br> you have to set innerHTML on something,
									// or some browsers will interpret the close tag </br> as another br.
									[
										{
											class: [],
											title: "Title with Description and Subboards",
											description: "This demonstrates a title with many things under it.",
											subboards: [ "Subboard 1", "Subboard 2", "Subboard 3" ]
										},
										(lastPost( "Member", "Jan 23, 2016", "Thread Title" )),
										("12"),
										("34"),
									],
									[
										{
											class: [ 'new-content' ],
											title: "Title with Description and Subboards",
											description: "This demonstrates a title with many things under it.",
											subboards: [ "Subboard 1", "Subboard 2", "Subboard 3" ]
										},
										(lastPost( "Member", "Jan 23, 2016", "Thread Title" )),
										("12"),
										("34"),
									],
									[
										{
											class: [ 'new-content', 'hot' ],
											title: "Title with Description and Subboards",
											description: "This demonstrates a title with many things under it.",
											subboards: [ "Subboard 1", "Subboard 2", "Subboard 3" ]
										},
										(lastPost( "Member", "Jan 23, 2016", "Thread Title" )),
										("12"),
										("34"),
									],
									[
										{
											class: [],
											title: "Title with Description and Subboards",
											description: "This demonstrates a title with many things under it.",
											subboards: [ "Subboard 1", "Subboard 2", "Subboard 3" ]
										},
										(lastPost( "Member", "Jan 23, 2016", "Thread Title" )),
										("12"),
										("34"),
									],
									[
										{
											class: [],
											title: "Title with Description and Subboards",
											description: "This demonstrates a title with many things under it.",
											subboards: [ "Subboard 1", "Subboard 2", "Subboard 3" ]
										},
										(lastPost( "Member", "Jan 23, 2016", "Thread Title" )),
										("12"),
										("34"),
									],
								]
							};
						})() }/>
				</ContentBlock>
			</ContentSection>

			<ContentSection>
				<ContentBlock>
					<ContentTable>
						<tr>
							<th>Beep</th>
							<td rowspan="2" class="cell-top divider-none">
								<ContentTable class="">
									<tr>
										<th>Boop</th>
										<th>Ping</th>
									</tr>
									<tr>
										<td>Borp</td>
										<td>Bap</td>
									</tr>
									<tr>
										<td>Borp</td>
										<td>Bap</td>
									</tr>
									<tr>
										<td>Borp</td>
										<td>Bap</td>
									</tr>
									<tr>
										<td>Borp</td>
										<td>Bap</td>
									</tr>
									<tr>
										<td>Borp</td>
										<td>Bap</td>
									</tr>
									<tr>
										<td>Borp</td>
										<td>Bap</td>
									</tr>
									<tr class="utilities">
										<td colspan="2">Tool tool tool tool tool</td>
									</tr>
								</ContentTable>
							</td>
						</tr>
						<tr>
							<td class="cell-top divider-strong">
								<div>Boop</div>
								<div>Boop</div>
								<div>Boop</div>
								<div>Boop</div>
								<div>Boop</div>
							</td>
						</tr>
						<tr>
							<td colspan="2">Beep boop ping boop</td>
						</tr>
					</ContentTable>
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
