import React from 'react'

class ChildC extends React.PureComponent {
    
    render() {
        const { counter, increment } = this.props
        return (
            <div>
                Child Counter: {counter}
                <br />
                <br />
                <button onClick={() => increment()}>Increment from child</button>
            </div>
        )
    }
}

export default ChildC