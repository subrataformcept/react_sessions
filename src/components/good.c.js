import React from 'react'
import ChildC from './child.c'
import ChildBadC from './childBad.c'

class GoodC extends React.PureComponent {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    counterAdd = () => {
        this.setState((prevState, props) => {
            return {
                counter: prevState.counter + 2
            }
        })
        this.setState((prevState, props) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    counterDummy = () => {
        this.setState((prevState, props) => {
            return {
                counter: prevState.counter
            }
        })
    }
    
    render() {
        const { counter } = this.state
        return (
            <div>
                Counter: {counter}
                <br />
                <br />
                <button onClick={() => this.counterAdd()}>Increment</button>
                <br />
                <br />
                {/* <button onClick={() => this.counterDummy()}>Increment Dummy</button> */}
                <br />
                <br />
                <p>****------------------------------------*</p>
                Child Component
                <ChildC counter={counter} increment={this.counterAdd}/>
                <br />
                <br />
                <p>****------------------------------------*</p>
                Bad Child Component
                <ChildBadC counter={counter} increment={this.counterAdd}/>
            </div>
        )
    }
}

export default GoodC