import React, { Component,useState,useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App =()=> {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData  = async ()=> {
      var data = await fetch(url).then(res => res.json());
      setUsers(data);
    }
    fetchData();
  }, []);
  const searchUser = event => {};

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input list="datalist" placeholder="Search User"/>
      <datalist id="datalist">
 {users.map(item => (
        <option value={item.name}/>
      ))}

      </datalist>
     {/*<ul>
      {users.map(item => (
        <li class="card">{item.name}
        </li>
      ))}
    </ul> */}

    </div>
  );
};

export default App;

render(<App />, document.getElementById('root'));
