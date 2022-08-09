import React from 'react';

const ShowCount = ({title, count}) => {
    console.log('ShowCount component');
    React.useEffect(() => {}, [title]);
    return (
        <div>
            <p>{title} is {count}</p>
        </div>
    );
}

export default React.memo(ShowCount);
