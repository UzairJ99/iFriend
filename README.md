# iFriend Mobile App
Updated on October 27th, 2021.

This is the main repository for the source code of our mobile app, iFriend, for our Capstone project.
To get started on collaborating on this project, follow the below steps:

1. clone this repo onto your local computer
2. open up the folder iFriend in your IDE
3. in the terminal, cd into /iFriend/client and run the below commands
```
npm install -g expo-cli
npm install
```
4. to run the app, run the command
```
npm start
```
5. the server will start up on your computer with a QR code. Scan this on your iphone to test run the app.

### File Structure
You'll notice there are two main folders: api and client.  All the backend source code is located in /api and all the frontend code is in /client.
Whenever pulling updates, you'll need to run npm install in both api and client to have the most updated packages. Also note, .gitignore contains specific
paths to all the files we don't want to push to git (sensitive information, large packages, etc).

The top level of our front end modules begin at App.js in /client.  Any new components should be added under a components folder which we will 
decide on later.

### Major Updates
- October 27th, 2021: seperated source code into frontend and backend with /api and /client folders and modified the getting started steps in the README.md file.