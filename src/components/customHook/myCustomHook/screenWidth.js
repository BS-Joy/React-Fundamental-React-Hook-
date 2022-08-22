import React from 'react';

const ScreenWidth = (width) => {
    const [smallScreen, setSmallScreen] = React.useState(false);

    const checkScreenSize = React.useCallback(() => {
        setSmallScreen(window.innerWidth < width);
    }, [width]);

    React.useEffect(() => {
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [checkScreenSize]);

    return smallScreen;
}

export default ScreenWidth;
