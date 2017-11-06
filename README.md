# API-based application exercise walkthrough

This is an exercise to use a JavaScript (Angular 1.x in this case) front-end to use a basic API to get data and send data updates. Following are the steps followed
1.	Downloaded the exercise code from NCARB/exercise repository.
2.	Installed NPM and Bower and run the commands required.
3.	Navigated to url http://localhost:8000/
4.	Opened the sln file in the /API directory in Visual Studio.
5.	Created an endpoint(PersonController) of API project that returns the following hard-coded data:   
2 Person objects with these fields and anything for the values:
    FirstName
    LastName
    JobTitle
6.	URL to Web API service first endpoint is  http://localhost:3928/api/person/GetAllPersons
7.	Created an endpoint that allows updating a Person object(PersonController) of API project that updates the data object, however as we are using hardcoded data I have just hit the api method and if the hit is successful it displays a message with index of which row is updated just to show that the data was successfully updated.
8.	URL to Web API service second endpoint is :
http://localhost:3928/api/person/PutPerson
9.	Started the Web API application and verified that I can hit it.
10.	In the Angular application, on the homepage, used an endpoint to display both people with all the fields in table format by using “Get” api call. 
11.	Used Twitter Bootstrap to make it table look presentable. Used some of the bootstrap classes.
12.	Added Edit button on each row which allows selection of one of the people in the table, and show that data to edit in a form for editing of each of the fields. These edits are then submitted to the 2nd endpoint of Web API  using a “PUT” api call.
13.	On click on edit button hidden form opens up in which the row for which edit button is clicked data is pre populated to edit and update button is available on click of which the made edits will go to web api for saving.
14.	A console message is displayed once you hit the “update” button which displays a message on success of saving the edits.
15.	 Created a new repository in Git hub and uploaded the code and shared the end-to-end  walkthrough in Readme file.
