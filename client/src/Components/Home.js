import React from 'react';
import Board from './board';
import BoardForm from './BoardForm';
import { Header, } from "semantic-ui-react";

class Home extends React.Component {
  state = {
    boards: []
  };

  getId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

  addBoard = (boardData) => {
    const { boards, } = this.state;
    const board = { id: this.getId(), ...boardData, };
    this.setState({ boards: [board, ...boards], });
  };

  editBoard = (boardData) => {
    const boards = this.state.boards.map( board => {
      if (board.id === boardData.id)
    return boardData;
      return board
    });
this.setState({ boards, });
}

  renderBlogs = () => {
    return this.state.boards.map( board => <Board key={board.id} {...board} edit={this.editBoard} />)
  };

  render() {
    return (
      <div>
        <Header as="h1">Boards</Header>
        <BoardForm add={this.addBoard} />
        { this.renderBoards() }
      </div>
    )
  }
}

export default Home;
