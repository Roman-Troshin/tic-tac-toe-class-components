//import styles from './GameHeaderInformation.module.css';

import { connect } from 'react-redux';
import { Component } from 'react';

class GameHeaderInformationLayout extends Component {
	constructor(props) {
		super();
	}

	render() {
		return <div className="text-center bg-azure">{this.props.currentGameInformation}</div>;
	}
}

class GameHeaderInformationContainer extends Component {
	constructor(props) {
		super();
	}

	checkCurrentStepOrResult = () => {
		if (this.props.winSign) {
			return `Игра окончена, победил: ${this.props.winSign}`;
		} else if (this.props.isAllMovesMade) {
			return 'Игра окончена, НИЧЬЯ!';
		} else {
			return `Сейчас ходит: ${this.props.currentSignMove}`;
		}
	};

	render() {
		return (
			<GameHeaderInformationLayout
				currentGameInformation={this.checkCurrentStepOrResult()}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	winSign: state.winSign,
	isAllMovesMade: state.isAllMovesMade,
	currentSignMove: state.currentSignMove,
});

export const GameHeaderInformation = connect(mapStateToProps)(
	GameHeaderInformationContainer,
);
