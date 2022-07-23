##Setting up the Project

##git clone <repo link>
##npm install
##npm start

usage

Create 3 GET endpoints in postman

1. http://localhost:3001/

2. http://localhost:3001/

3. http://localhost:3001/update

Hit 1 & 2 wait for 30 seconds it will return 30 seconds done in both

Hit 1 & 2 and Hit 3 within 30 seconds of hit 1 start and hit 2 start it will return update from server

LongPolling:

Long polling is a methodology in which it is used incase of receiving updates from a server on behalf of state update of the application
It is a good alternative to short polling but it is not as effective as sockets are.
It gives state of change of application update in near real time depends on the server side configuration.