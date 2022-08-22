import React from 'react';

const initialState = 0;
const initialState2 = 2;

const reduce = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

const CounterThree = () => {
    const [count, dispatch] = React.useReducer(reduce, initialState);
    const [count2, dispatch2] = React.useReducer(reduce, initialState2);
    return (
        <>
            <div className="container">
                <h3>Counter-1 = {count}</h3>
                <button type='button' onClick={() => dispatch('increment')}>Increment</button>
                <button type='button' onClick={() => dispatch('decrement')}>Decrement</button>
            </div>

            {/* container - 2 */}
            <div className="container2">
                <h3>Counter-2 = {count2}</h3>
                <button type='button' onClick={() => dispatch2('increment')}>Increment</button>
                <button type='button' onClick={() => dispatch2('decrement')}>Decrement</button>
            </div>
        </>
    );
}

export default CounterThree;
