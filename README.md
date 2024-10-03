# iTask - To-Do Manager

## Overview

**iTask** is a simple, intuitive, and efficient to-do list manager built using React. It allows users to create, edit, delete, and mark tasks as completed. With a sleek user interface and local storage support, iTask helps you manage your tasks effortlessly in one place.


## Features

- **Add To-Do**: Easily add new tasks to your list with an intuitive input box.
- **Edit To-Do**: Update any task using the edit button.
- **Delete To-Do**: Remove tasks that are no longer needed.
- **Mark as Completed**: Check or uncheck tasks to mark them as completed or pending.
- **Show Finished**: Filter between completed and pending tasks by toggling the "Show Finished" checkbox.
- **Persistent Storage**: Uses local storage to save tasks even after refreshing the browser.

## Tech Stack

- **React**: Front-end JavaScript library for building the user interface.
- **React Icons**: For using icons such as edit and delete.
- **Tailwind CSS**: For styling and layout.

## Installation

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/evitabarboza/To-Do-List.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd To-Do-List
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the application:**
   ```bash
   npm run dev
   ```

The app will run locally on `http://localhost:5173`.

---

## Usage

1. **Adding a To-Do**: Enter a task in the input field and click "Save" to add the task to your to-do list.
2. **Editing a To-Do**: Click the edit button next to any task to edit it. The task will reappear in the input field, allowing you to modify it.
3. **Deleting a To-Do**: Click the delete button to remove any task from the list.
4. **Marking a Task as Completed**: Click the checkbox next to a task to mark it as completed or pending.
5. **Showing Completed Tasks**: Check the "Show Finished" checkbox to display only completed tasks. Uncheck it to view pending tasks.

---

## Project Structure

```
/src
  /components
    Navbar.js     // Navigation bar component
  App.js          // Main component for managing the application
  index.js        // Entry point for the React app
```

---

## Local Storage

The app saves the tasks in the browser’s local storage, allowing users to preserve their tasks even after closing or refreshing the browser. Tasks are loaded from local storage when the app is started.


## Dependencies

- [React](https://reactjs.org/)
- [UUID](https://www.npmjs.com/package/uuid)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS](https://tailwindcss.com/)


## License

This project is licensed under the MIT License.


## Author

- [Evita Barboza](https://github.com/evitabarboza)
