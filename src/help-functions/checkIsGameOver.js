import { setIsAllMovesMade } from "../actions";

export const checkIsGameOver = (cellsValues, isAllMovesMade, dispatchIsAllMovesMade) => {
	const isCellsFulled = cellsValues.every((value) => value !== '');

	if (isCellsFulled && isAllMovesMade === false) {
		dispatchIsAllMovesMade(setIsAllMovesMade(true));
	}
};
