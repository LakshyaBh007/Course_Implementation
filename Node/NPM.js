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