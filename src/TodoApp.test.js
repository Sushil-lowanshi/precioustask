import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import "@testing-library/jest-dom";

describe("TodoApp Component", () => {
  beforeEach(() => {
    render(<TodoApp />);
  });

  test("when input is changed, then it updates the state", () => {
    const input = screen.getByPlaceholderText("✍️ Add or Edit Items...");
    fireEvent.change(input, { target: { value: "New Item" } });
    expect(input.value).toBe("New Item");
  });

  test("when Add button is clicked with valid input, then the item is added to the list", () => {
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Pineapple" } });
    fireEvent.click(addButton);

    const newItem = screen.getByText("Pineapple");
    expect(newItem).toBeInTheDocument();
  });

  test("when Add button is clicked with empty input, then the item is not added to the list", () => {
    const addButton = screen.getByRole("button", { name: /add/i });
    fireEvent.click(addButton);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  test("when Delete button is clicked, then the item is removed from the list", () => {
    const deleteButton = screen.getAllByLabelText("delete")[0];
    fireEvent.click(deleteButton);

    const removedItem = screen.queryByText("apple");
    expect(removedItem).not.toBeInTheDocument();
  });

  test("when Edit button is clicked, then the input is filled with the item value for editing", () => {
    fireEvent.click(editButton);
    expect(input.value).toBe("apple");
  });

  test("when Edit is completed, then the item in the list is updated", () => {
    const editButton = screen.getAllByLabelText("edit")[0];
    fireEvent.click(editButton);

    fireEvent.change(input, { target: { value: "Grapes" } });

    const saveButton = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(saveButton);

    const updatedItem = screen.getByText("Grapes");
    expect(updatedItem).toBeInTheDocument();
    expect(screen.queryByText("apple")).not.toBeInTheDocument();
  });

  test('when no items are in the list, then the "No items in the list" message appears', () => {
    const deleteAllButton = screen.getByText(/delete all/i);
    fireEvent.click(deleteAllButton);

    const noItemsMessage = screen.getByText(/no items in the list/i);
    expect(noItemsMessage).toBeInTheDocument();
  });
});
