import React from "react";
import { Card } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";

class Search extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <TextField id="outlined-basic" label="search..." variant="outlined" />
        </Card>
        <br></br>
      </div>
    );
  }
}
export default Search;
