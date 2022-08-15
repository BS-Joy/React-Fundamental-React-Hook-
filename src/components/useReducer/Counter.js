import React from 'react';

const initialState = 0;

const reducer = (cState, action) => {
    switch(action){
        case 'increment':
            return cState + 1;
        case 'decrement':
            return cState - 1;
        default:
            return cState;
    }
}

const Counter = () => {
    const [count, condition] = React.useReducer(reducer, initialState)
    return (
        <div className='container
        '>
            <h3>Count = {count}</h3>
            <button type='button' onClick={() => condition('increment')}>Increment</button>
            <button type='button' onClick={() => condition('decrement')}>Decrement</button>
        </div>
    );
}

export default Counter;
