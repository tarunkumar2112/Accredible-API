# Accredible-API

A React.js application that allows users to create credentials by entering their name and email. The app integrates with an external API to generate credentials and displays the API response. It includes a loading spinner for enhanced user experience during API requests.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14 or later): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **Yarn**: [Download Yarn](https://yarnpkg.com/)
- **Git**: [Download Git](https://git-scm.com/)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tarunkumar2112/Accredible-API.git
Navigate to the Project Directory

bash
Copy code
cd Accredible-API
Install Dependencies

Using npm:

bash
Copy code
npm install
Or using Yarn:

bash
Copy code
yarn install
Environment Variables
Create a .env File

In the root directory of the project, create a file named .env.

Add the Following Variables

env
Copy code
REACT_APP_API_URL=https://private-anon-e129025237-accrediblecredentialapi.apiary-proxy.com/v1/credentials
REACT_APP_AUTH_TOKEN=6289c2d08e24b748e6414e151231bd66
REACT_APP_API_URL: The endpoint for creating credentials.
REACT_APP_AUTH_TOKEN: The authorization token required by the API.
Important: Ensure the .env file is listed in your .gitignore to prevent sensitive information from being committed.

Running the Application Locally
Start the Development Server

Using npm:

bash
Copy code
npm start
Or using Yarn:

bash
Copy code
yarn start
Access the Application

Open your browser and navigate to http://localhost:3000.

Deployment
You can deploy the application to platforms like Vercel or Netlify. Below are the steps for both.

Deploying to Vercel
Sign Up / Log In to Vercel

Visit Vercel and sign up or log in.

Import Your Git Repository

Click on "New Project" and select your GitHub repository (Accredible-API).
Follow the prompts to configure the project.
Set Environment Variables

During the deployment setup, add the environment variables from your local .env file:

REACT_APP_API_URL
REACT_APP_AUTH_TOKEN
Deploy

Click "Deploy" and wait for Vercel to build and deploy your application. Once completed, Vercel will provide a live URL for your app.

Deploying to Netlify
Sign Up / Log In to Netlify

Visit Netlify and sign up or log in.

Connect Your Git Repository

Click on "New site from Git."
Select your Git provider and authorize Netlify to access your repositories.
Choose the Accredible-API repository.
Configure Build Settings

Build Command: npm run build or yarn build
Publish Directory: build
Set Environment Variables

In the "Build & Deploy" settings, add the environment variables:

REACT_APP_API_URL
REACT_APP_AUTH_TOKEN
Deploy Site

Click "Deploy Site" and wait for Netlify to build and deploy your application. Netlify will provide a live URL upon completion.
