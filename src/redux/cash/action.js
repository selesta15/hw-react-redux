import { ADD_CASH, GET_CASH, CLEAR_CASH} from './type'

const addCashActionCreator = (cash) => ({
        type: ADD_CASH,
        payload: cash
    })

    const getCashActionCreator = (cash) => ({
            type: GET_CASH,
            payload: cash
    })


    const clearCashActionCreator = () => ({
        type: CLEAR_CASH,
      });


    export {
        addCashActionCreator,
        getCashActionCreator,
        clearCashActionCreator
    }