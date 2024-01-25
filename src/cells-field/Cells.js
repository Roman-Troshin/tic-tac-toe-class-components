import { Component } from 'react';
import { connect } from 'react-redux';

import { CellsLayout } from './cells-layout';
import { setCellsValues, setCurrentSignMove } from '../actions';

class CellsContainer extends Component {
	constructor(props) {
		super();
	}

	activateButton = (index) => {
		const updatedValue = [...this.props.cellsValues];
		updatedValue[index] = this.props.currentSignMove;
		const nextCurrentSignMove = this.props.currentSignMove === 'x' ? 'o' : 'x';

		this.props.dispatch(setCellsValues(updatedValue));
		this.props.dispatch(setCurrentSignMove(nextCurrentSignMove));
	};

	render() {
		return <CellsLayout activateButton={this.activateButton} />;
	}
}

const mapStateToCellsContainerProps = (state) => ({
	currentSignMove: state.currentSignMove,
	cellsValues: state.cellsValues,
});

export const Cells = connect(mapStateToCellsContainerProps)(CellsContainer);
