console.log('App started!');

// JSX = JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: "Plan things to do",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  // console.log('onFormSubmit');

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>app.subtitle</p>}
      <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options!'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>Option: {option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();