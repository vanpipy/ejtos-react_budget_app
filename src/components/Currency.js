
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        })
    }
    return (
        <div>
            <select
                value={currency}
                onChange={handleBudgetChange}
                style={{
                    backgroundColor: '#d1e7dd',
                    width: '100%',
                    height: '56px',
                    color: 'white',
                }}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
