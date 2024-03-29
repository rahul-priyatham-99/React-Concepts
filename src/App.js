import { Provider } from 'react-redux';
import './App.css';
import ControlledComp from './components/Controlled&Uncontrolled/ControlledComp';
import UncontrolledComp from './components/Controlled&Uncontrolled/UncontrolledComp'
import Count from './components/Redux/Count';
import store from './components/Redux/utils/store';
import Users from './components/DataFiltering/Users';

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="App">
        {/* <Count /> */}
        <Users/>
      </div>
    </Provider>
  );
}

export default App;