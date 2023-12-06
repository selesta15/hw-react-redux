import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCashActionCreator, getCashActionCreator } from "../../redux/cash/action";
import { clearCashActionCreator } from "../../redux/cash/action";

const Balance = () => {
    const cashstate = useSelector(state => state.cash.cash)
    const dispatch = useDispatch()


    const handleAddCash = () => {
        dispatch(addCashActionCreator(Number(prompt())));
      };
    
    const handleGetCash = () => {
        dispatch(getCashActionCreator(Number(prompt())));
      };

    const handleClearCash = () => {
        dispatch(clearCashActionCreator)
    }

    return (
        <div>
            balance - {cashstate}
            <button onClick={handleAddCash}>
                пополнить
            </button>
            <button onClick={handleGetCash}>
                снять
            </button>
            <button onClick={handleClearCash}>
                очистить данные
            </button>
        </div>
    )
}

export default Balance