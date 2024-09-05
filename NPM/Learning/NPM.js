//NPM - Node Package Manager

//Package.JSON file needs to be created if you want to distribute 
//your project and want others to work on it.

//JSON = JavaScript Object Notation - used for data exchange

//npm init - initialization
//each public package must have unique name and version

//Semantic versioning - 5.21.17 (5-Major, 21-Minor, 17-Patch)

//for bug fixes you need to change patch version
//if you introduce new features but your package remains compatible
//with previous version then you update minor version
//if you introduce some non compatible features or change your
//project completely then you need to update major version
//if other package are depended on your package and you update
//the major version then you dont gurantee it will work

//Exact Version 5.21.17
//Greater than >5.21.1
//compatible Changes ^5.21.8 minor patch can change
//Minor-level changes ~5.21.8 patch can change
//Pre-release versions - alpha,beta,rc

//npm install or i <package> install package in the project folder
//and add it as dependency in package.json

//npm install <package> --save-dev install package in the project
//folder and add it as development dependency in package,json

//moment
const moment = require("moment");
const a = 10;
const day = moment().format("dddd");
console.log(day);

//semver
const semver = require("semver");
console.log(semver.valid("1.5.2-beta.10"));
//if version is valid you will get version and if it is invalid
//you will get null
console.log(semver.gt("1.2.3","4.3.2"));
console.log(semver.coerce("v3").raw);
//const range = semver.Range("^2.22.2")
//console.log(range); //.Range method has been deprecated
console.log(semver.satisfies('2.23.3'))
console.log(semver.inc("1.4.3","major"));
console.log(semver.parse("1.4.3-alpha.10"));

//Dependencies - when package is dependent on other packages

//Dependencies vs Development Dependencies

//Dependencies - installed using npm install or npm install package
//if package A is installed using "npm install package A" and it has
//dependency on package B than package B will be also installed along
//with its dependencies

//Development Dependencies
//Installed using "npm install"
//not installed uing "npm install == production"
//if package A is installed using "npm install packageA" and it has
//devDependency on package B than package B will not be installed

//npm i - everything will be installed
//--production - only dependencies will be installed

//add dependencies when your package is public

//npm view to view package details
//npm view versions to see all the versions

//package-lock.json - keeps versions tree of the project dependencies
//including child dependencies
//created automatically from npm v5.0.0
//updated automatically
//should be committed to source control
//Guarantees consistency of thr dependencies version
//Generated and pdated automatically
//commited to source control
//It locks the versions of your dependencies to ensure consistent 
//installations across different environments.

//npm update to update
//--save-exact for exact version no changes

//npm start to execute file
//npm prestart

console.log('application is starting');

//npm run all to run scripts simultaneously

//.bin
//The .bin directory is used by npm to store executable binaries 
//for the packages installed in your project

//package-lock.json: Ensures consistent and repeatable 
//installations of dependencies across different environments 
//by locking dependency versions.
//.bin Directory: Provides a place for npm to link executables 
//from installed packages, making them easily accessible for 
//command-line usage.