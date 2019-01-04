import React from "react";
import { Button, Header, Icon, Segment, } from "semantic-ui-react";
import ListForm from "./ListForm";

class List extends React.Component {
  state = { editing: false, };

  toggleEdit = () => this.setState({ editing: !this.state.editing, });

  render() {
    return (
      <Segment style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {
          this.state.editing ?
            <ListForm { ...this.props } toggleEdit={this.toggleEdit} />
          :
            <div>
              <Header as="h3">{this.props.title}</Header>
            </div>
        }
        <div>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil" />
          </Button>
          <Button icon color="red">
            <Icon name="trash" />
          </Button>
        </div>
      </Segment>
    )
  }
};

export default List;
