per mandare in produzione bisogna digitare:
	ng build --aot --prod -> crea la cartella dist contenente i sorgenti di angular 4 compilati per benino
  sails lift -> esegue il framework sails per le api crud
  oppure
	node app.js -> esegue il server node che mette on line su http://localhost:1337/ sia le api che la cartella dist



per sviluppare invece è più veloce fare così:
	sails lift -> esegue il server node, in versione sviluppo, che però useremo solo per le api
	ng serve -> che compila in tempo reale angular (appena facciamo un cambiamento ricompila) pubblica il tutto su http://localhost:4200
	oppure npm start (vedi configurazione in package.json)
dato che frontend e backend sono su porte diverse, bisogna attivare
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=it-IT


il bootstrap 4 è installato mediante scss
vedi file di configurazione .angular-cli.json
al momento non so come importare un secondo css, teoricamente:

"styles": [
  "../node_modules/bootstrap/scss/bootstrap.scss",
  "./style.scss"
],

ma non funziona :-(


Per usare bootstrap con angular vedi questa demo
http://valor-software.com/ngx-bootstrap/#/


  )
# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

ng build --aot --prod

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
