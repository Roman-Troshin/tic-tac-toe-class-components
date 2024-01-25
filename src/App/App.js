import { Component } from 'react';
import { connect } from 'react-redux';

import { AppLayout } from './app-layout';
import { GameHeaderInformation } from '../game-header-information/GameHeaderInformation';
import { Cells } from '../cells-field/Cells';

import { WIN_CASES } from '../constants/winCases';
import { checkIsGameOver } from '../help-functions/checkIsGameOver';
import { checkIsSomeoneWin } from '../help-functions/checkIsSomeoneWin';

class AppContainer extends Component {
	constructor(props) {
		super();
	}

	componentDidMount() {
		checkIsSomeoneWin(
			WIN_CASES,
			this.props.winSign,
			this.props.dispatch,
			this.props.cellsValues,
		);
		checkIsGameOver(
			this.props.cellsValues,
			this.props.isAllMovesMade,
			this.props.dispatch,
		);
	}

	componentDidUpdate(prevProps) {
		if (
			prevProps.winSign !== this.props.winSign ||
			prevProps.cellsValues !== this.props.cellsValues ||
			prevProps.isAllMovesMade !== this.props.isAllMovesMade ||
			prevProps.dispatch !== this.props.dispatch
		) {
			checkIsSomeoneWin(
				WIN_CASES,
				this.props.winSign,
				this.props.dispatch,
				this.props.cellsValues,
			);
			checkIsGameOver(
				this.props.cellsValues,
				this.props.isAllMovesMade,
				this.props.dispatch,
			);
		}
	}

	render() {
		return (
			<div className="w-32 ml-auto mr-auto">
				<GameHeaderInformation />

				<Cells />

				<AppLayout />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	winSign: state.winSign,
	isAllMovesMade: state.isAllMovesMade,
	cellsValues: state.cellsValues,
});

export const App = connect(mapStateToProps)(AppContainer);

