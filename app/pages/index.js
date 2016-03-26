import { string, element } from 'deku';
import templater from './templater';

// console.log( 'Yay!' );
// process.stdout.write( `Yay!` );

// let node = <div className="test">Hello!</div>;

let page = ( state ) => {
	return (
		<div className="test">Hello { state.name }!</div>
	);
};

templater.write( page({ name: "World" }, {}, { pageTitle: "Hello World!" }) );
