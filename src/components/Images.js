import React, { Component } from "react"

class Images extends Component {
  constructor(props) {
    super(props)
    this.state = { interval: null }
  }
  // component Mount

  componentDidMount() {
    console.log("Images Comp Mount")
    this.setState({
      interval: setInterval(() => {
        console.log("hello")
      }, 1000),
    })
  }
  // component UnMount
  componentWillUnmount() {
    console.log("Images UnMounted")
    clearInterval(this.state.interval)
  }
  render() {
    return (
      <div>
        <img
          className="my-2"
          src="https://images.unsplash.com/photo-1621084556062-c2d810daff25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="cycle"
        />
      </div>
    )
  }
}

export default Images
