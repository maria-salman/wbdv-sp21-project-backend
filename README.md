# wbdv-sp21-project-backend

This is the back end repo for our project.  Both the front end and back end repos must be used to run this application.

**Steps**
1. Clone repo
2. Install Mongo
3. In the command line: '''npm install'''
4. Create a folder in the project to store data locally. 
5. Run the command '''mongod --dbpath data''' (where data is the name of the data folder created in step 4.)
6. Run shell in another terminal window with command '''mongo'''.
7. In .env file, define the following variables necessary to run the app
    DB_PASS
    DB_USER
    ORIGIN_NAME (either remote Heroku app url or locally, http://localhost:4000 (where 4000 can be whichever port you're using in the front end)
8. Run the server by running command '''node server.js''' or adding a configuration in Intellij called "server" to run server.js.
