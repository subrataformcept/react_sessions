
import React, { Component, PureComponent } from "react"

export default class Message extends Component {
  constructor() {
    super()
    this.state = { messages: [] }
  }

  _getLastMessage = () => {
    const lastMessage = this.state.messages[this.state.messages.length - 1]
    return lastMessage === undefined ? "" : lastMessage
  }

  _onMessageChange = (event) => {
    event.preventDefault()
    const messages = [...this.state.messages]
    messages.push(event.target.value)
    this.setState({ messages })
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this._getLastMessage()}
          onChange={(e) => this._onMessageChange(e)}
          style={{ margin: "10px" }}
        />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

class MessageList extends Component {
  render() {
    return (
      <ul>
        {this.props.messages.map((m, i) => <MessageC key={i} message={m} />)}
      </ul>
    )
  }
}
class MessageC extends PureComponent {
  render() {
    return <li style={{ margin: "10px" }}> {this.props.message} </li>
  }
}