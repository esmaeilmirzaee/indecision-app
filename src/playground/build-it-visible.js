console.log('App started!');

let visibility = false;

const onVisibility = () => {
  visibility = !visibility;
  renderApp();
};

const renderApp = () => {
  const ui = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onVisibility}>{visibility ? 'Hide detail' : 'Show detail'}</button>
      {
        (visibility && <p>Hi. These are more detail.</p>)
      }
    </div>
  );
  ReactDOM.render(ui, document.getElementById('app'));
}

renderApp();