import React from "react";
import List from "./List";
import ListForm from "./ListForm";
import { Header, } from "semantic-ui-react";

class Board extends React.Component {
  state = {
    posts: []
  };

  getId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

addList = (listData) => {
  const { lists, } = this.state;
  const list = { id: this.getId(), ...listData, };
  this.setState({ lists: [list, ...lists], });
};

editLists = (listData) => {
const lists = this.state.lists.map( list => {
  if (list.id === listData.id)
    return listData;
  return list
});
this.setState({ lists, });
}

deleteLists = (id) => {
  const lists = this.state.lists.map( list => {
    if (list.id !== id)
      return list
  });
    this.setState({ lists: [...lists], });
  };

renderLists = () => {
return this.state.lists.map( list => <List key={list.id} {...list} edit={this.editList} delete={this.deleteList} />)
};

  render() {
    return (
      <div>
        <Header as="h1">{this.props.title}</Header>
        <ListForm add={this.addList} />
        { this.renderList() }
      </div>
    )
  }
}

export default Board;
