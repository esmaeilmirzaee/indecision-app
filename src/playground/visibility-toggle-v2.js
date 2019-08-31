class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      visibility: false
    }
  }
  handleShow() {
    this.setState((obj) => {
      return {
        visible: !obj.visible
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleShow}>{this.state.visibility ? 'Hide detail' : 'Show detail'}</button>
        {this.state.visibility && (<p>Hi. The detail is as follows.</p>)}
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));