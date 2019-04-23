# LINGODATEST

## Installation guide: 


+ First step: 
    
    + Create a root directory that will be used for the project
       
         
+ Second step: 
    + In terminal in the project directory create package.json file, type "npm init" 
    + This will prompt a wizard like function where we begin creating our package file,
where the command line will ask you a series of step-by-step questions
  



| Question  | Input |
| ------------- | ------------- |
| Package name  | (leave this as default) press enter|
| Version number| (leave this as default) press enter |
| Description | “Webdriverio Framework” |
| Entry Point | By default this is set as index.js (use the default value and press enter) |
| TestCommand | node_modules\.bin\wdio node_modules\.bin\wdio.conf.js |
| Git Repository| The one in use |
| Keywords | leave this as default and press enter |
| Author | enter your name and press enter |
| License| Leave this as default |


+ Fourth step: 
    * We are now going to install WebdriverIO by using the following command ->
    * npm install webdriverio --save
    * Add cli and selenium-standalone-service modules as follows to use 'selenium-standlone' seamlessly with WebDriverIO
	npm install @wdio/cli --save-dev
	npm install @wdio/selenium-standalone-service --save-dev

 
 + Fifth step: 
    To configure wdio, enter the following commands at the root directory:
    
    ./node_modules/.bin/wdio wdio.conf.js
    


| Question  | Input |
| ------------- | ------------- |
| Where should your tests be launched?  | local press enter|
| Shall I install the runner plugin for you?| yes press enter |
|  Where is your automation backend located? | on my local machine |
| Which framework do you want to use? | mocha |
| Shall I install the framework adapter for you? | yes |




+ Sixth step:

Add 'selenium-standalone' to services array inside 'wdio.conf.js'

export.config = {
  // ...
  services: ['selenium-standalone'],
  // ...
};

    
+ Seventh step: 
The setup is complete, and you can write your tests now Directory for tests would be 'project-root-directory/test/specs'.

In this directory, you can put your script and execute the following command from 'project-root-directory' to execute your tests scripts:
	npm test





### Useful links 
* [WebdriverIO](https://webdriver.io/) 
* [WebdriveriIO API](http://webdriver.io/api.html) 
* [NPM](www.npmjs.com)
* [Nodejs](www.nodejs.org)
* [JSON](docs.npmjs.com)
