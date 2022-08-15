import React from 'react';

const initialState = 0;
const initialState2 = 10;

const reducer = (cState, action) => {
    switch (action) {
        case 'increment':
            return cState + 1;
        case 'decrement':
            return cState - 1;
        default:
            return cState;
    }
}

const Counter = () => {
    const [count, condition] = React.useReducer(reducer, initialState);
    const [count2, condition2] = React.useReducer(reducer, initialState2);
    return (
        <>
            <div className='container'>
                <h3>Count = {count}</h3>
                <button type='button' onClick={() => condition('increment')}>Increment</button>
                <button type='button' onClick={() => condition('decrement')}>Decrement</button>
            </div>

            <div className='container2'>
                <h3>Count2 = {count2}</h3>
                <button type='button' onClick={() => condition2('increment')}>Increment</button>
                <button type='button' onClick={() => condition2('decrement')}>Decrement</button>
            </div>
        </>

    );
}

export default Counter;
