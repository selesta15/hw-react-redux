import { DECREMENT_COUNTER, INCREMENT_COUNTER, CLEAR_COUNTER} from './type'
const incrementCounterActionCreator = () => ({
    type: INCREMENT_COUNTER
})

const decrementCounterActionCreator = () => ({
    type: DECREMENT_COUNTER
})

const clearCounterActionCreator = () => ({
    type: CLEAR_COUNTER
})



export {
    incrementCounterActionCreator,
    decrementCounterActionCreator,
    clearCounterActionCreator
}