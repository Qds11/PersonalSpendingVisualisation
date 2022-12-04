# PersonalSpendingVisualisation


## Introduction
This web app is for an internship assigment which displays a barchart for personal spending visualisation. Users are able to filter the displayed data according to user inputted date range. 

## Requirement
Have mysql installed.

## Installation/ Running of web app
1) Download Files
2) Run ```setup.sql``` in your mysql workbench/ terminal
3) Change ```database.js``` connection user, password values if yours differs
4) ```npm i``` in root folder to install node_modules for backend
5) ```npm i``` in "client" folder to install node_modules for frontend
6) ```nodemon app.js``` in root folder to run backend
7) ```npm run serve``` in "client" folder to run frontend
8) Open http://localhost:8080/ in browser (chrome preferable)

## Web App Flow

1) Upon loading the web app, all spending data will be displayed
<img width="630" alt="datavisual" src="https://user-images.githubusercontent.com/101784318/205484258-91ec9340-8b41-437f-96d0-bc31c0c98d71.PNG">
![image](https://user-images.githubusercontent.com/101784318/205484314-a4945b72-64f9-4e67-85b8-1eedc1a252c3.png)

2) Users can filter data displayed according to date range using the 2 date type inputs.
![image](https://user-images.githubusercontent.com/101784318/205484279-3477a027-f30a-4cbd-b73d-2d5da4786d56.png)

   Both dates must be inputted and end date must be later than start date or else there will be an error message
<img width="233" alt="empty" src="https://user-images.githubusercontent.com/101784318/205483984-4eb6debc-0c33-4921-8330-eb2b1d5a6213.PNG">
<img width="575" alt="error" src="https://user-images.githubusercontent.com/101784318/205484008-f6429dc9-2f7d-4388-b032-9de8b4c39288.PNG">

  
