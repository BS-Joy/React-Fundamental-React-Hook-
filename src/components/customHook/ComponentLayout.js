import React from 'react';
import ScreenWidth from './myCustomHook/screenWidth';

const ComponentLayout = () => {
    
    const screen = ScreenWidth(768);

    return (
        <div>
            <h1>This is a {screen ? 'small': 'large'} screen window</h1>
        </div>
    );
}

export default ComponentLayout;
