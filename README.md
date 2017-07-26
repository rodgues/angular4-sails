# skeleton for angular2 + bootstrap
This skeleton is suitable for both those who want to use only angular (2 or 4) + bootstrap

Both for those who want to use Sails, the most popular MVC framework for Node.js

# First installation (Production)

npm install

ng build --aot --prod

sails lift

or

node app.js

# Development
sails lift -> run server node http://localhost:1337/ + Grunt Task Automation + Database

ng serve -> run angular client http://localhost:4200

You must install

https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related

for solve the Allow-Control-Allow-Origin: * problem

Or you can study this documentation

http://sailsjs.com/documentation/reference/configuration/sails-config-cors



# Bootstrap 4
It's use scss ( .angular-cli.json file )

"styles": [
  "../node_modules/bootstrap/scss/bootstrap.scss",
  "./style.scss"
],

See this bootstrap components
http://valor-software.com/ngx-bootstrap/#/



# Database
You can choose the most popular databases,
https://www.npmjs.com/search?q=sails%20adapter&page=1&ranking=optimal
see \config\connectios.js for configuration



# API
To create new api, for example http://localhost:1337/employee launch this command:
sails generate api Employee

See the files

/api/models/Employee.js

/api/controllers/EmployeeController.js

## to create new record
http://localhost:1337/employee/create?fullname=a&emailid=xyz@abc.com&phonenumber=1234

## to get the list
http://localhost:1337/employee/
http://localhost:1337/employee/?limit=1
http://localhost:1337/employee/?limit=10&sort=emailid%20desc

## to update
http://localhost:1337/employee/update/1?fullname=ciccio&emailid=abc@abc.com

See this tutorial

https://www.youtube.com/watch?v=GK-tFvpIR7c
