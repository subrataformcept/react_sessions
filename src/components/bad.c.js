import React from 'react'

class BadC extends React.Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }

        this.counterAdd = this.counterAdd.bind(this)
    }

    counterAdd() {
        this.setState({
            counter: this.state.counter + 2
        })
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    render() {
        const { counter } = this.state
        return (
            <div>
                Counter: {counter}
                <br />
                <br />
                <button onClick={this.counterAdd}>Increment</button>
            </div>
        )
    }
}

export default BadC