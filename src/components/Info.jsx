import { Container, List, ListItem, Typography } from "@mui/material";
import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <Container>
        <List>
          <ListItem>
            <Typography variant="h6">Documentation :</Typography>
          </ListItem>
          <ListItem>
            <Typography margin={1}>State Management :</Typography>
          </ListItem>
          <ListItem>Firstly I created a react project using vite</ListItem>
          <ListItem>
            And have used react class based component with this.state to manage
            its internal state
          </ListItem>
          <ListItem>
            and state varialbles like inputValue which Holds the value from the
            input field for adding or editing a task.
          </ListItem>
          <ListItem>
            list A list of Default items like apple, banana, mangos that
            represents the tasks.
          </ListItem>
          <ListItem>
            isEditing A boolean to represent if the app is in edit mode.
          </ListItem>
          <ListItem>
            editIndex Keeps track of which item is being edited.
          </ListItem>
          <ListItem>
            <Typography margin={1}>Functionality :</Typography>
          </ListItem>
          <ListItem>
            {" "}
            addItem - Adds a new item to the list if inputValue is not empty.
            and If isEditing is true, it updates existing item.
          </ListItem>
          <ListItem>
            handleInputChange - Updates the inputValue state as the user types
            into the input field.
          </ListItem>
          <ListItem>editItem - edit list item based on its index.</ListItem>
          <ListItem>
            deleteItem - Deletes an item from the list based on its index.
          </ListItem>
          <ListItem>clearAll - Clears the entire list.</ListItem>
          <ListItem>
            Used React-Route-Dom for routing in React application and used
            MuiLink for navigation
          </ListItem>
          <ListItem>
            <Typography margin={1}>UI Design & Design Decisions :</Typography>
          </ListItem>
          <ListItem>
            Used Material UI components to provide a modern look and feel
            without custom CSS.
          </ListItem>
          <ListItem>
            The UI uses Material UI components such as Button (IconButton),
            IconButton, Input, ListItem, Typography, RouterLink, MuiLink, Paper
            and Box to create a clean and responsive design.
          </ListItem>
          <ListItem>
            Used MUI ThemeProvider and createTheme for lightmode and darkmode
          </ListItem>

          <ListItem>
            There is a dynamic button that switches between the add icon
            (AddIcon) and the edit icon (EditNoteIcon) depending on whether the
            app is in add or edit mode.
          </ListItem>
          <ListItem>
            Simple logic for editing and adding By managing isEditing and
            editIndex, the app ensures that users can easily switch between
            adding new tasks and editing existing tasks.
          </ListItem>
          <ListItem>
            <Typography margin={1}>Testing & Uploading :</Typography>
          </ListItem>
          <ListItem>
            Used Jest to test the React component. The test functionality checks
            that the TodoApp component behaves correctly when adding, editing,
            and deleting items.
          </ListItem>
          <ListItem>
            It user interactions such as input change button clicks, and ensures
            that the list updates accordingly. The tests verify that items are
            properly added, edited, or deleted, and confirm edge cases such as
            handling empty inputs.
          </ListItem>
          <ListItem>Used GitHub to upload this project</ListItem>
        </List>
      </Container>
    );
  }
}
export default Info;
