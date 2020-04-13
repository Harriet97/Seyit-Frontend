import React from "react";
import API from "../../api";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";

class SignUpForm extends React.Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    API.signUp(this.state).then((json) => {
      console.log(json);
      this.props.signIn(json.username, json.token);
    });
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div className="form">
          <Avatar style={{ backgroundColor: "navy" }}>
            <HomeWorkOutlinedIcon />
          </Avatar>
          <h2>Not a member? Sign up </h2>
          <form onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="first_name"
              label="First Name"
              name="first_name"
              autoComplete="first name"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              autoComplete="last_name"
              autoFocus
              onChange={this.handleChange}
            />
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
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
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
              value="Sign Up"
              variant="contained"
              fluid
            >
              Sign up
            </Button>
          </form>
          <h4>
            Already have an account?<Link to="/sign-in"> Sign In </Link>
          </h4>
        </div>
      </Container>
    );
  }
}
export default SignUpForm;
