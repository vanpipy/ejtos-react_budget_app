import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span style={{ marginRight: '5px' }}>Budget: {currency}</span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
