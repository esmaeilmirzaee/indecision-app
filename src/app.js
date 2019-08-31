class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in hands of a computer.';
    const options = ['One', 'Two', 'Three', 4];

    return (  
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption options={options} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h4>{this.props.subtitle}</h4>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.onRemoveAll = this.onRemoveAll.bind(this);
  }
  onRemoveAll() {
    // this.props.options = [];
    alert('All options removed.');
  }
  render() {
    return (
      <div>
        <button onClick={this.onRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p key={this.props.option}>Option: {this.props.optionText} </p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  onAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      // this.props.options.push(option);
      alert(option);
    }
  }
  render() {
    return(
      <div>
        <form onSubmit={this.onAddOption}>
          <input type='text' name='option'></input>
          <button>Add Option</button>
        </form>
        <button onClick={this.onAddOption}>Add Option</button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));