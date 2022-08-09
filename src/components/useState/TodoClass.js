import React from "react";

export default class TodoClass extends React.Component{

    state = {
        todo: '',
        message: null
    }

    handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? "You need to learn Javascript."
            : null;
        
        this.setState({
            todo: inputValue,
            message: warning
        })
    }

    render(){
        const { todo, message } = this.state;
        return(
            <div>
                <p>{todo}</p>
                <textarea value={todo} onChange={this.handleInput}></textarea>
                <h1>{message || 'No problem'}</h1>
            </div>
        );
    }
}