import React from "react";

export default function TodoFunction(){

    const[todo, setTodo] = React.useState('');
    const[message, setMessage] = React.useState(null);


    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? "You need to learn Javascript."
            : null;
        
        setTodo(inputValue);
        setMessage(warning);
    }

    return(
        <div>
            <p>{todo}</p>
            <textarea value={todo} onChange={handleInput}></textarea>
            <h1>{message || 'No problem'}</h1>
        </div>
    );
}