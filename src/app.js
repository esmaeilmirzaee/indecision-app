class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['One', 'Two', 'Three', 4]
    };
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in hands of a computer.';

    return (  
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} />
        <Options options={this.state.options}/>
        <AddOption options={this.state.options} />
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
        <button disabled={!this.props.hasOptions}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.onRemoveAll = this.onRemoveAll.bind(this);
    this.state = {
      options: this.props.options
    }
  }
  onRemoveAll() {
    this.setState((obj) => {
      return {
        options: []
      }
    })
    alert('All options removed.');
  }
  render() {
    return (
      <div>
        <button onClick={this.onRemoveAll}>Remove All</button>
        {
          this.state.options.map((option) => <Option key={option} optionText={option}/>)
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
  constructor(props) {
    super(props);
    this.onAddOption = this.onAddOption.bind(this);
    this.state = {
      options: this.props.options
    };
  }
  onAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      this.setState(() => {
        return (
          this.props.options.push(option)
        );
      });
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