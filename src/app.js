class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}))
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });

    this.setState(() => ({options: []}));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((obj) => ({
      options: obj.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Option is invalid.'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option has already added.'
    }

    // this.setState((obj) => {
    //   return {
    //     options: obj.options.concat(option)
    //   }
    // });

    this.setState((obj) => ({ options: obj.options.concat(option)}));
  }
  render() {
    const subtitle = 'Put your life in hands of a computer.';
    return (  
      <div>
        <Header subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h4>{props.subtitle}</h4>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h4>{this.props.subtitle}</h4>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
    </div>
  );
}

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
}

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option}/>)
//         }
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      <p key={props.option}> {props.optionText} 
        <button onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
        >
          Remove
        </button>
      </p>
    </div>
  );
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p key={this.props.option}>Option: {this.props.optionText} </p>
//       </div>
//     );
//   }
// }

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

    this.setState(() => ({ error }) );
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

ReactDOM.render(<IndecisionApp options={['District Attorney', 'Supreme Court']} />, document.getElementById('app'));