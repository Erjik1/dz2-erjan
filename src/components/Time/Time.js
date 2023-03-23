import React from "react";

class Time extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date()
        }
    }

    update = () => {
        this.setState({
            time: new Date()
        })
    }


    intervalid = setInterval(this.update, 1000)

    render() {
        return <h2>{this.state.time.toLocaleTimeString()}</h2>
    }
}

export default Time