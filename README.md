# Uptime Checker App
This is a NodeJS project to keep tabs on certain websites and ping them periodically to check ther availability.
The project is purely NodeJS and there are no frameworks or other dependencies used.

## App Info
The app runs on port 3000 and 3001. It includes a simple CLI which you can look up in the code. 

A user first needs to sign-up. After signing up they are automatically logged in.
After a token and a session is created (you can verify this under ```/.data``` folder), the user may create "check"s in order to ping certain websites. These checks -like all other
data- is kept on the local machine. The checks are then processed by the workers periodically and the user is notified of the status of the website they specified while creating that check.

## Running the app
In the root directory, run ```node index.js``` from your terminal to run the app on a single thread. Alternatively, you can run ```node index-cluster.js``` to use multiple threads.
