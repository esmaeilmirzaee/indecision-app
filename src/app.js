class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber];
    alert(option)
  }
  handleAddOption(option) {
    if (!option) {
      return 'Option is invalid.'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option has already added.'
    }

    this.setState((obj) => {
      return {
        options: obj.options.concat(option)
      }
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in hands of a computer.';
    return (  
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption handleAddOption={this.handleAddOption} />
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
        <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
  constructor(props) {
    super(props);
    this.onAddOption = this.onAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  onAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => { return { error } });
  }
  render() {
    return(
      <div>
        {this.state.error && <p>{ this.state.error }</p>}
        <form onSubmit={this.onAddOption}>
          <input type='text' name='option'></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));