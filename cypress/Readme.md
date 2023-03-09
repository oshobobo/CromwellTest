Test
This foldder contains UI tests done for "https://www.cromwell.co.uk/shop/abrasives/cutting/c/090901". 

Framework Used
I have used the cypress framework, which is a good tool for UI testing, written in javascript, as these are the preferred recommended for set up.

How to set up
* First thing you should do it pull the project via preferred IDE or
* Create a folder, open terminal and navigate to the folder then run command: git clone https://www.cromwell.co.uk/shop/abrasives/cutting/c/090901
* Launch IDE and open project
* Navigate to folder on terminal and 'npm install'
To run cypress in GUI, in terminal type: node_module/.bin/cypress open or npx cypress open
* Select UI test file
* RUN TEST!
To run cypress headless, in terminal, type: UI: npx cypress run 

Tour
Fixtures folder -> For test data
Integration -> For main test file
cypress.json -> Adjust configuration and add base url

Bug Encountered
Failed test when confirming users can view Out of Stock products.
This failed because the In Stock products are also displayed row per page is set to 25 and the "Show Out of Stock" is checked.
I also observed at least one Out of Stock product displayed when the row page is set to 50. 

