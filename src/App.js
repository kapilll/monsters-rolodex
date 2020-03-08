import React,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './component/card-list/card-list.components';
import { SearchBox } from './component/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }
  onSearchChange=event=>{
    this.setState({searchField:event.target.value})
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users=>this.setState({monsters:users}))
  }
  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}



export default App;
