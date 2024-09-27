import { Container, List, ListItem, Typography } from "@mui/material";
import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <Container>
        <List>
          <ListItem>
            <Typography variant="h6">
              React.js with Class Components :
            </Typography>
          </ListItem>
          <ListItem>
            Use class components exclusively in your application.
          </ListItem>
          <ListItem>
            Demonstrate effective state management and lifecycle methods.
          </ListItem>

          <ListItem>
            <Typography variant="h6">Styling with Material-UI :</Typography>
          </ListItem>
          <ListItem>
            Implement styling using Material-UI components and theming.
          </ListItem>
          <ListItem>
            Ensure the UI is responsive and follows best design practices.
          </ListItem>

          <ListItem>
            <Typography variant="h6">Functionality :</Typography>
          </ListItem>
          <ListItem>
            Here, insert specific functionality you want the candidate to
            implement.
          </ListItem>
          <ListItem>
            Create a simple todo application where users can add, edit, and
            delete tasks. Include form validation where appropriate.
          </ListItem>
          <ListItem>
            Use React Router for navigation between at least two
            pages/components.
          </ListItem>

          <ListItem>
            <Typography variant="h6">Testing :</Typography>
          </ListItem>
          <ListItem>
            Write unit tests for your components using a testing framework like
            Jest and Enzyme.
          </ListItem>
          <ListItem>
            Ensure that all core functionalities are covered by tests.
          </ListItem>

          <ListItem>
            <Typography variant="h6">Documentation :</Typography>
          </ListItem>
          <ListItem>
            Provide a README file with instructions on how to run your
            application.
          </ListItem>
          <ListItem>
            Briefly explain the architecture and any design decisions.
          </ListItem>
        </List>
      </Container>
    );
  }
}

export default Task;
