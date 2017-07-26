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
