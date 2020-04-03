import React from "react";
import NavBar from "./Navbar";
import FlatListTile from "./FlatListTile";
import Search from "./Search";

import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import { Card } from "semantic-ui-react";
import Calendar from "./Calendar";

class FlatList extends React.Component {
  render() {
    return (
      <div>
        <h1>All of the flats</h1>
        <Calendar />
        <Search />
        <Card.Group itemsPerRow={1}>
          <FlatListTile />
          <FlatListTile />
          <FlatListTile />
        </Card.Group>
        <div className="NavBar">
          <Fab size="small" color="primary" aria-label="add">
            <NavigationIcon />
          </Fab>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default FlatList;
