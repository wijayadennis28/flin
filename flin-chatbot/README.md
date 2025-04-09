# FLIN Website Simple Chatbot

## Objective

Implement a simple chatbot as a floating widget for FLIN's website to answer common user queries based on predefined responses.

## Features

* Floating chat widget on the webpage.
* Answers predefined questions based on keyword matching.
* Basic user interface for sending and receiving messages.
* Frontend built with React.
* Backend built with Node.js and Express.
* Responses stored and loaded from a JSON file (`backend/responses.json`).

## Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Data Storage:** JSON file
* **API Communication:** Axios (or Fetch API)
* **Styling:** CSS

## Setup Instructions

Follow these steps to set up the project environment and install necessary packages:

1.  **Clone the Repository:**
    ```bash
    git clone <your-repository-url>
    cd flin-chatbot
    ```
    *(Replace `<your-repository-url>` with the actual URL of your repository)*

2.  **Setup Backend & Install Packages:**
    * Navigate to the backend directory:
        ```bash
        cd backend
        ```
    * Install the required Node.js packages:
        ```bash
        npm install
        ```
    * Navigate back to the root project directory:
        ```bash
        cd ..
        ```

3.  **Setup Frontend & Install Packages:**
    * Navigate to the frontend directory:
        ```bash
        cd frontend
        ```
    * Install the required Node.js packages for React:
        ```bash
        npm install
        ```
    * Navigate back to the root project directory (optional, you can run the start commands from within the respective directories):
        ```bash
        cd ..
        ```

## Running the Application

You need two separate terminal windows or tabs to run both the frontend and backend concurrently.

1.  **Start the Backend Server:**
    * Open a terminal and navigate to the `flin-chatbot/backend` directory.
    * Run the start command:
        ```bash
        npm start
        # Or alternatively: node server.js
        ```
    * The backend server should start, typically listening on `http://localhost:5001`. Check the console output for the exact port.

2.  **Start the Frontend Development Server:**
    * Open a second terminal and navigate to the `flin-chatbot/frontend` directory.
    * Run the start command:
        ```bash
        npm start
        ```
    * This will usually open the application automatically in your default web browser at `http://localhost:3000`. If not, manually navigate to that URL.

## How to Use

1.  Once both servers are running, open `http://localhost:3000` in your browser.
2.  You will see a "Chat with FLIN" button floating in the bottom-right corner of the page.
3.  Click the "Chat with FLIN" button to expand the chat window.
4.  Type your questions related to FLIN (e.g., "What is loan consolidation?", "How can FLIN help me?") into the message input field at the bottom.
5.  Press Enter or click the "Send" button.
6.  The chatbot will reply based on the keywords configured in `backend/responses.json`.
7.  Click the "✕" button in the chat header or click the floating "Chat with FLIN" button again to collapse the chat window.

## Customization

* **Add/Modify Responses:** Edit the `backend/responses.json` file. Each entry should have:
    * `keywords`: An array of lowercase strings. The bot responds if any of these keywords are found in the user's message.
    * `response`: The string the bot will reply with.
    * Ensure there is a `default` keyword entry to handle unrecognized messages. Remember to restart the backend server (`npm start` in the `backend` directory) after modifying this file for changes to take effect.
* **Styling:** Modify the CSS rules in `frontend/src/App.css` to change the appearance of the chat widget and messages.
* **Backend Port:** Change the `port` variable in `backend/server.js` if needed (e.g., if port 5001 is already in use). If you change it, remember to also update the `API_URL` constant in `frontend/src/components/ChatWidget.js` to match the new backend address.