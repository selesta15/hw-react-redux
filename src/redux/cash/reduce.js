import { ADD_CASH, GET_CASH, CLEAR_CASH } from "./type"

const initialState = {
    cash: 0
}
export const cashReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {
                ...state,
                cash: state.cash + action.payload
            }
            case GET_CASH:
                return {
                    ...state,
                    cash: state.cash - action.payload
                }

            case CLEAR_CASH:
                return {
                      ...state,
                      cash: 0,
                    }

                default:
                    return state
    }
    
}

