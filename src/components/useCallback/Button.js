import React from 'react';

const Button = ({clickHandle, children}) => {
    console.log('Button component');
    return (
        <div>
            <button type='button' onClick={clickHandle}>{children}</button>
        </div>
    );
}

export default React.memo(Button);