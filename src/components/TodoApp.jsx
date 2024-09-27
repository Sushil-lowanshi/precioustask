import React, { Component } from "react";
import {
  Button,
  IconButton,
  Input,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Box,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      list: ["apple", "banana", "mangos"],
      isEditing: false, 
      editIndex: null,
    };
  }

  addItem = () => {
    const { inputValue, list, isEditing, editIndex } = this.state;

    if (inputValue.trim() !== "") {
      if (isEditing) {
        const updatedList = [...list];
        updatedList[editIndex] = inputValue;
        this.setState({
          list: updatedList,
          inputValue: "",
          isEditing: false,
          editIndex: null,
        });
      } else {
        this.setState({
          list: [...list, inputValue],
          inputValue: "",
        });
      }
    }
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  deleteItem = (index) => {
    const { list } = this.state;
    const newList = list.filter((_, i) => i !== index);
    this.setState({ list: newList });
  };

  clearAll = () => {
    this.setState({
      list: [],
    });
  };

  editItem = (index) => {
    const { list } = this.state;
    this.setState({
      inputValue: list[index],
      isEditing: true,
      editIndex: index,
    });
  };

  render() {
    const { inputValue, list, isEditing } = this.state;

    return (
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h5" color="primary" align="center" gutterBottom>
            Add Your List Here ✌
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: 2 }}
          >
            <Input
              placeholder="✍️ Add or Edit Items..."
              value={inputValue}
              onChange={this.handleInputChange}
              fullWidth
              sx={{ marginRight: 2 }}
            />
            <IconButton color={"success"} onClick={this.addItem}>
              {isEditing ? <EditNoteIcon /> : <AddIcon />}
            </IconButton>
          </Box>

          {list.length > 0 ? (
            list.map((item, index) => (
              <ListItem
                key={index}
                sx={{ borderBottom: "1px solid #eee" }}
                secondaryAction={
                  <>
                    <IconButton
                      aria-label="edit"
                      onClick={() => this.editItem(index)}
                    >
                      <EditNoteIcon color="success" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => this.deleteItem(index)}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </>
                }
              >
                <ListItemText primary={item} />
              </ListItem>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No items in the list
            </Typography>
          )}

          {list.length > 0 && (
            <Box mt={3}>
              <Button
                variant="outlined"
                color="error"
                fullWidth
                startIcon={<DeleteIcon />}
                onClick={this.clearAll}
              >
                Delete All
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    );
  }
}

export default TodoApp;
