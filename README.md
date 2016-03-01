# X1-JS-Lectures
Here is examples for X1 js lectures.
### Installations
You need to install node.js on your environment:

##### Ubuntu:
1. Install nvm (Node Version Manager) this thing allows you to have multiple node.js 
versions at a time and switch between them from project to project

```sh
$  wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
```
2. Install node.js using nvm
```sh
$ nvm install 5.6.0
```
3. Make version node.js 5.6.0 default (not necessary) 
```sh
$ nvm alias default 5.6.0
```
4. Go to examples folder and install all dependencies with npm (node package manager) that installed with node.js
```sh
$ npm install
```
5. Run web server using gulp plugin 
```sh
$ gulp serve
```