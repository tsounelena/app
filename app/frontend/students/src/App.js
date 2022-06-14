import './App.css';
import StudentApp from "./component/StudentApp";
import {Component} from "react";

class App extends Component {
  render() {
    return(
        <div className='container'>
          <StudentApp/>
        </div>
    );
  }
}

export default App;
