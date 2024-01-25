import { INITIAL_STATE } from './constants/initialState';


export const appReducer = (state = INITIAL_STATE , action) => {
	const { type, payload = null } = action;

	switch (type) {
		case 'SET_WIN_SIGN': {
			return {
			...state,
			winSign: payload,
			};
		}
		case 'FINISH_THE_GAME': {
			return {
				...state,
				isAllMovesMade: payload,
			};
		}
		case 'SET_CELLS_VALUES': {
				return {
				...state,
				cellsValues: payload,
			};
		}
		case 'SET_CURRENT_SIGN_MOVE': {
			return {
				...state,
				currentSignMove: payload,
			};
		}
		default:
			return state;

	}
}
