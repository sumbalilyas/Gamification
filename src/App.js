
import React from 'react';
import Login from './component/auth/Login';
import Gamify from "./component/Gamify";
import {selectUser} from "./features/userSlice";

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">
    {
        user ? (<Gamify/>): (<Login/>)
     }
    </div>
  );
}

export default App;
