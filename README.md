# Taskmate

Taskmate is a simple implementation of a Task Management Application built using React. This project demonstrates basic component structure, state management, and props handling in React.
https://saumya2308.github.io/Saumya-mishra-Resume/

## Features

- **Task List**: Displays a list of tasks with their current status (Completed/Pending).
- **Delete Task**: Users can remove tasks from the list.
- **Toggle Visibility**: Functionality to show or hide the task list.
- **Add Task Interface**: A form to input new tasks (Note: Currently logs the new task to the console).

## Project Structure

- `src/components/Header.js`: The application header.
- `src/components/Footer.js`: The application footer.
- `src/components/TaskList.js`: Manages and displays the list of tasks.
- `src/components/TaskCard.js`: Represents an individual task item.
- `src/components/AddTask.js`: Form component for capturing new task input.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
