# Post Management App

## Description

This project is a simple React app that fetches and displays a list of posts from a public API (`jsonplaceholder.typicode.com`). The app is designed with a modular structure, using reusable components for rendering posts and handling interactions such as liking and sharing. The UI is styled with **Tailwind CSS**, providing a clean and responsive layout.

## Features

- Fetches post data from an API and displays it in a list.
- Users can like a post, and the like button changes color when toggled.
- Share dialog for each post.
- Skeleton loader for a better loading experience while fetching data.
- Error handling with toast notifications if data fetching fails.
- Additional loader component for loading the list of posts.

## Tech Stack

- **React** (with Hooks)
- **Tailwind CSS** for styling
- **Axios** for data fetching
- **React Hot Toast** Showing messages
- **React Icons** for icons
- **Shadcn UI** for UI

## Reusable Components

- **Post Component:** This component is responsible for rendering an individual post. It accepts post data as props and displays its title, description, and actions (like and share). This component is reusable because it can be used to render any post with varying content, just by passing different props.

- **Posts Component:** The Posts component is the parent component that handles the fetching of data from the API. It stores the fetched data and passes it as props to the Post component for rendering. This component is responsible for managing the data and ensuring that each Post component receives the correct data.

- **ShareDialog Component:** This component handles the share dialog that opens when a user clicks the share button. It is reusable for different posts and can be styled to match the UI.

By breaking the app into smaller, reusable components like Post, Posts, and ShareDialog, the code remains modular, organized, and easier to maintain. Each component focuses on one specific task, making them easier to reuse and test.



## Setup and Run Locally

To set up and run this project on your local machine, follow these steps:


```bash
1. Clone the Repository

git clone https://github.com/sourin8590/post-management-app.git

2. cd post-management-app

3. Install Dependencies
Make sure you have Node.js installed. Then, run the following command to install the necessary dependencies:

4. npm install

5. To Run the application type- npm run dev in the terminal

6. Then click http://localhost:5173/ to see the app in your browser
