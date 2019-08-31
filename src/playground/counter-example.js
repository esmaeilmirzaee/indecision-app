let count = 0;
const addOne = () => {
  console.log('addOne');
  count++;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
  console.log('reset');
};

const minusOne = () => {
  count--;
  renderCounterApp();
  console.log('minOne');
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={reset}>0</button>
      <button onClick={minusOne}>-1</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();