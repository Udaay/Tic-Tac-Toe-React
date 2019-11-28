import React, { Component }from 'react';
import './App.css';
import Table from './Table'
const name = 'Uday'
class App extends Component {

  state = {
    Characters : [
      {
        name: 'Flash',
        job: 'Superhero'
      },
      {
        name: 'Diggle',
        job: 'BlackArrow'
      },
      {
        name: 'Oliver',
        job: 'Punisher'
      }
    ],
  }

  removeCharacter = (index)=> {
    const { Characters } = this.state;
    this.setState({
      Characters: Characters.filter((child, i) => {
        return i !== index;
      }),
    });
  }

  addCharacter = () => {
    
  }

  render(){
  return (
    <div className="container">
    <Table characterData ={this.state.Characters} removeCharacter = {this.removeCharacter} />

    </div>
  );
  }
}


export default App;
