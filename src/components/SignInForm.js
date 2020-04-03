import React from "react";
import API from "../api";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import NavBar from "./Navbar";

class SignInForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signin(this.state);
  };

  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <div className="form">
            <Avatar style={{ backgroundColor: "navy" }}>
              <HomeWorkOutlinedIcon />
            </Avatar>
            <h2>Welcome back! Sign in </h2>
            <form onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
              />
              <br></br>
              <Button
                color="facebook"
                size="large"
                type="submit"
                value="Sign In"
                variant="contained"
                fluid
              >
                Sign in
              </Button>
            </form>
            <h4>
              New to us?<Link to="/sign-up"> Sign Up </Link>
            </h4>
            <h5>
              <Link to="/admin"> admin </Link>
            </h5>
          </div>
        </Container>
        <div className="NavBar">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default SignInForm;
