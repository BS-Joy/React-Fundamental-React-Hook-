import React from 'react';
import ScreenWidth from './myCustomHook/screenWidth';

const ComponentLayout2 = () => {
    
    const screen = ScreenWidth(768);

    return (
        <div className={screen ? 'small' : 'large'}>
            <h1>This is another component</h1>
        </div>
    );
}

export default ComponentLayout2;
