import React from 'react';
import Input from './Input';

const Form = () => {
    const inputRef = React.useRef(null);

    React.useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <Input ref={inputRef} type="text" placeholder='Write Something'/>
        </div>
    );
}

export default Form;
