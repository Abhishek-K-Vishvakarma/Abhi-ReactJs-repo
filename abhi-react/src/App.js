import './App.css';
import { Mount, Should, Update, Snapshot} from './Mount';
// import HandleForm from './HandleForm';
// import Color from './Color';
function App() {
  return (
    <div className="App">
     {/* <Color/> */}
      {/* <HandleForm/> */}
      <Mount/>
      <Should/>
      <Update/>
      <Snapshot/>
    </div>
  );
}
export default App;
