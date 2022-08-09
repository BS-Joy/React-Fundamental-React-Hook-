import React from "react";

export default class ClickClass extends React.Component {
    state = {
        count: 0,
        date: new Date()
    };

    componentDidMount(){
        const { count } = this.state;
        document.title = 'Clicked ' + count + ' times';
        setInterval(this.tick, 1000)
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = 'Clicked ' + count + ' times';

    }

    tick = () => {
        this.setState({
            date: new Date(),
        })
    }

    clickHandle = () => {
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    };


    render() {
        const { date, count } = this.state;
        return (
            <div>
                <p>Time: { date.toLocaleTimeString() }</p>
                <button type="button" onClick={this.clickHandle}>Clicke {count} time</button>

            </div>
        );
    }
}