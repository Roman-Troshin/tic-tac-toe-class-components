import { Component } from 'react';
import { connect } from 'react-redux';

class CellsForCellsLayout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isButtonsBlocked: props.winSign || props.isAllMovesMade,
		};
	}

	componentDidUpdate(prevProps) {
		if (
			prevProps.winSign !== this.props.winSign ||
			prevProps.isAllMovesMade !== this.props.isAllMovesMade
		) {
			this.setState({
				isButtonsBlocked: Boolean(this.props.winSign) || this.props.isAllMovesMade,
			});
		}
	}

	render() {
		return (
			<div className="flex flex-wrap w-24 h-auto ml-auto mr-auto p-0">
				{this.props.cellsValues.map((value, index) => (
					<button
						key={index}
						className="w-8 h-8"
						disabled={this.state.isButtonsBlocked}
						onClick={() => {
							this.props.activateButton(index);
						}}
					>
						{value}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToCellsLayoutProps = (state) => ({
	winSign: state.winSign,
	isAllMovesMade: state.isAllMovesMade,
	cellsValues: state.cellsValues,
});

export const CellsLayout = connect(mapStateToCellsLayoutProps)(CellsForCellsLayout);
