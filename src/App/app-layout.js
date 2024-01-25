import { Component } from 'react';
import { connect } from 'react-redux';

import { resetGame } from '../help-functions/resetGame';

class AppForLayout extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<button
				className="block w-24 h-auto bg-green-600  border-none ml-auto mr-auto hover:bg-green-400"
				onClick={() => resetGame(this.props.dispatch)}
			>
				Начать сначала
			</button>
		);
	}
}

export const AppLayout = connect()(AppForLayout);
