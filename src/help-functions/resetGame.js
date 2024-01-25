import { setWinSign, setIsAllMovesMade, setCellsValues } from "../actions";

import { INITIAL_CELLS_VALUES } from "../constants/initialCellsValues";

export 	const resetGame = (dispatch) => {
	dispatch(setWinSign(''));
	dispatch(setIsAllMovesMade(false));
	dispatch(setCellsValues(INITIAL_CELLS_VALUES));
};
