import React from 'react';

const initialState = {
    counter: 0,
    counter2: 0
};

const reducer = (cState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...cState, counter: cState.counter + action.value };
        case 'decrement':
            return { ...cState, counter: cState.counter - action.value };
        case 'increment2':
            return { ...cState, counter2: cState.counter2 + action.value };
        case 'decrement2':
            return { ...cState, counter2: cState.counter2 - action.value };
        default:
            return cState;
    }
}

const Counter = () => {
    const [count, dispatch] = React.useReducer(reducer, initialState)
    return (
        <>
            <div className='counter1'>
                <h3>Count = {count.counter}</h3>

                {/* increment */}
                <button type='button' onClick={() => dispatch({
                    type: 'increment',
                    value: 1
                })}>Increment by 1</button>

                {/* decrement */}
                <button type='button' onClick={() => dispatch({
                    type: 'decrement',
                    value: 5
                })}>Decrement by 5</button>
            </div>

            {/* counter 2 */}
            <div className='counter2'>
                <h3>Count-2 = {count.counter2}</h3>

                {/* increment */}
                <button type='button' onClick={() => dispatch({
                    type: 'increment2',
                    value: 1
                })}>Increment by 1</button>

                {/* decrement */}
                <button type='button' onClick={() => dispatch({
                    type: 'decrement2',
                    value: 5
                })}>Decrement by 5</button>
            </div>
        </>

    );
}

export default Counter;
