
import CanvasScreen from './CanvasScreen/CanvasMain';

const appStyle ={
  background: 'Black',

}
const myComponentStyle = {
  color: 'White',
  padding : '30px',
  background: 'Black',
  textAlign: 'center'
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <header className="App-header">
        <h2 style={myComponentStyle}>Welcome to WYSIWYG Web Page Builder</h2>
        <div>
        <CanvasScreen />
        </div>
      </header>
    </div>
  );
}

export default App;
