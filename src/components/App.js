import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';

import Navigation from './Navigation.js';
import MiddlePane from './MiddlePane.js';
import LeftPane from './LeftPane.js';

import '../styles/index.css';

let lib = require("../utils/library.js");

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			targetTable: lib.getFromConfig("noTableMsg"),
			targetTableColumns: [],
			selectTableColumns: []
		};
	}

	changeTargetTable(newTable) {
		this.setState({ targetTable: newTable });
	}

	changeTargetTableColumns(newTableColumns) {
		this.setState({ targetTableColumns: newTableColumns });
	}

	changeSelectTableColumns(newSelectColumns) {
		this.setState({ selectTableColumns: newSelectColumns });
	}

	// Depending on current state of selectTableColumns, it will add or remove a column
	// This is used to pick out which columns user wants to see
	addRemoveSelectTableColumns(column) {
		console.log("Adding or removing column " + column);

		let currentColumns = this.state.selectTableColumns;
		let index = currentColumns.indexOf(column);
		console.log("index = " + index);

		if (index >= 0) {
			// remove it
			currentColumns.splice(index, 1);
			this.setState({ selectTableColumns: currentColumns });
			return false;
		} else {
			// add it
			currentColumns.push(column);
			this.setState({ selectTableColumns: currentColumns });
			return true;
		}
	}

	render() {
		return (
			<div>
				<Navigation />
				<div className="bodyDiv">
					<LeftPane />
					<MiddlePane />
				</div>
			</div>
		);
	}
}

const app = document.getElementById('root');
ReactDOM.render(<Layout/>, app);
