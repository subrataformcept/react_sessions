import React from 'react'

class ChildBadC extends React.Component {
    
    render() {
        console.log('BAD CHILD RENDERING')
        const { counter, increment } = this.props
        return (
            <div>
                Bad Child Counter: {counter}
                <br />
                <br />
                <button onClick={() => increment()}>Increment from bad child</button>
            </div>
        )
    }
}

export default ChildBadC