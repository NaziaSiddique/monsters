import {Component} from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(){
  super();
   
  this.state = {
    monsters: [
      {
        name: 'Linda',
        id: '12e1231e',
      },
      {
        name: 'Frank',
        id: '12ed2d1cs',
      },
      {
        name: 'Jacky',
        id: '12e31e',
      },
      {
        name: 'Andrei',
        id: '12e1e213',
      }
    ]
  };
 }

 render() {
   return (
   <div className="App">
    {
      this.state.monsters.map((monster) => {
        return (
        <div key={monster.id}>
        <h1>{monster.name}</h1>
        </div>
        );
      })
    }
   </div>
   )
  }
}


export default App;
