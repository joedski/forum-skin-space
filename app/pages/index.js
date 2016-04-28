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
import ForumIndexItem from './components/forum-index-item';

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
						itemRow={ ForumIndexItem }
						columns={ require( './data/forum-index-columns.json' ) }
						rows={ require( './data/forum-index.json' ) }
						/>
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
