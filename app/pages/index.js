import { string, element } from 'deku';
import templater from './templater';

import PageHeader from './components/page-header';
import ContentSection from './components/content-section';
import UserControlPanel from './components/user-control-panel';
import Breadcrumb from './components/breadcrumb';
import MessageBar from './components/message-bar';
import ContentBlock from './components/content-block';
import ContentHeader from './components/content-header';

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
