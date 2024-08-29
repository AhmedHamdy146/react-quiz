# Quiz App

This is a simple Quiz App built with React that allows users to select the difficulty level (Easy, Medium, Hard) and then begin the quiz. The app leverages several React hooks and the Context API for state management and side effects. The quiz questions are served using json-server for a quick and easy local REST API.

## Features

- **Welcome Screen:** Users are greeted with a welcome screen and an option to choose the difficulty level for the quiz.
- **Quiz Functionality:** The app fetches quiz questions based on the selected difficulty and presents them one at a time.
- **State Management:** Uses Context API and `useReducer` for managing global state across components.
- **Dynamic Data Fetching:** Fetches quiz questions dynamically using the `useEffect` hook based on the chosen difficulty level.
- **Interactive UI:** Users can interact with the quiz by selecting answers and moving through the questions.
- **JSON Server:** Utilizes `json-server` to serve quiz data locally, making development and testing easier.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Context API:** To manage global state across different components.
- **useReducer:** For handling complex state logic in a more structured way, especially for managing the quiz state (current question, score, etc.).
- **useEffect:** For handling side effects, such as fetching quiz questions from an API when the difficulty level is selected.
- **json-server:** A simple and quick tool to create a REST API using a JSON file.


# Start json-server to serve the quiz data:

```bash
npx json-server --watch db.json --port 4000
```
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Application Flow

1. **Welcome Screen:**
   - The app begins with a welcome screen where the user can select the quiz difficulty: Easy, Medium, or Hard.

2. **Difficulty Selection:**
   - The user selects the desired difficulty level. Upon selection, the app fetches quiz questions based on the difficulty using `useEffect`.

3. **Quiz Screen:**
   - The quiz begins, and questions are presented one at a time.
   - Users can select an answer and proceed to the next question.
   - The current quiz state (current question, score, etc.) is managed using `useReducer`.

4. **Result Screen:**
   - After the quiz is completed, the user's score is displayed, and they have the option to retake the quiz or change the difficulty.

## State Management

### Context API

The Context API is used to provide global state throughout the app. This allows different components to access and update the quiz state without prop drilling.

### useReducer

`useReducer` is used to manage the quiz state, including the current question index, score, and selected difficulty level. This hook is ideal for managing the complex state logic in the quiz application.

### useEffect

`useEffect` is used to fetch quiz questions from an API based on the selected difficulty level. It also handles any side effects, such as updating the component when the data is loaded.

## Folder Structure

```bash
quiz-app/
├── public/
├── data/
│   ├── questions.json  
├── src/
│   ├── components/        # Reusable components (e.g., Question, Answer, Result)
│   ├── context/           # Context API-related files
│   ├── App.js            # Main App component
│   ├── index.js          # Entry point of the application
│   └── index.css/            # CSS or Tailwind styles
├── .gitignore
├── package.json
└── README.md
```
# Demo 
