import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component{
  constructor(){
    super();
    this.state ={
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({monsters: users}));
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value })
  }

  render(){
    const {monsters, searchField } = this.state;
    // Filter the monster list for the searched monster name / returns true or false
    const filteredMonster = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
        <div className="App">
          <h1 cla>MONSTER ROLODEX </h1>
          <SearchBox
              placeholder='search monsters'
              handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonster}/>
        </div>
    );
  }

}

export default App;
