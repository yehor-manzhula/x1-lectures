# X1-JS-Lectures
Here is examples for X1 js lectures.

### Installations
You need to install node.js on your environment:

##### Ubuntu:
* Install nvm (Node Version Manager) this thing allows you to have multiple node.js
versions at a time and switch between them from project to project

    ```sh
    $  wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
    ```
* Install node.js using nvm
    ```sh
    $ nvm install 5.6.0
    ```
* Make version node.js 5.6.0 default (not necessary)
    ```sh
    $ nvm alias default 5.6.0
    ```
* Go to examples folder and install all dependencies with npm (node package manager) that installed with node.js
    ```sh
    $ npm install
    ```
* Run web server using gulp plugin
    ```sh
    $ gulp serve
    ```

##### Windows
* Download the Windows installer from the [Nodes.js web site](http://nodejs.org/).
* Run the installer (the .msi file you downloaded in the previous step.)
* Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
* Restart your computer. You won’t be able to run Node.js® until you restart your computer.

Make sure you have Node and NPM installed by running simple commands to see what version of each is installed and to run a simple test program:

* Test Node. To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type `node -v`. This should print a version number, so you’ll see something like this `v0.10.35`.
* Test NPM. To see if NPM is installed, type `npm -v` in Terminal. This should print NPM’s version number so you’ll see something like this `1.4.28`
* Create a test file and run it. A simple way to test that node.js works is to create a JavaScript file: name it `hello.js`, and just add the code `console.log('Node is installed!');`. To run the code simply open your command line program, navigate to the folder where you save the file and type node `hello.js`. This will start Node and run the code in the `hello.js` file. You should see the output `Node is installed!`.

##### Mac
###### Use installer
* Download a pre-compiled binary package from the [Nodejs.org site](http://nodejs.org/download/).
* Install the sowtware by following along the install wizard.

At the end of the install you are prompted to make sure that `/usr/local/bin` is in your path, double check you have it by running in the Terminal `echo $PATH`.
If not add it in either `.bash_profile` or `.bashrc` in your home directory.

* Test Node. To see if Node is installed, open the Terminal and type `node -v`. This should print a version number, so you’ll see something like this `v0.10.35`.
* Test NPM. To see if NPM is installed, type `npm -v` in Terminal. This should print NPM’s version number so you’ll see something like this `1.4.28`

###### Use Homebrew
* Install XCode. Apple’s XCode development software is used to build Mac and iOS apps, but it also includes the tools you need to compile software for use on your Mac. XCode is free and you can find it in the [Apple App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).
* Install Homebrew. Homebrew is a package manager for the Mac — it makes installing most open source sofware (like Node) quite simple. You can learn more about Homebrew at the [Homebrew website](http://brew.sh/). To install Homebrew just open Terminal and type `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`. You’ll see messages in the Terminal explaining what you need to do to complete the installation process.
* Open the Terminal app and type `brew install node`
* Wait, Homebrew downloads some files and installs them.

Make sure you have Node and NPM installed by running simple commands to see what version of each is installed and to run a simple test program:

* Test Node. To see if Node is installed, open the Terminal and type `node -v`. This should print a version number, so you’ll see something like this `v0.10.35`.
* Test NPM. To see if NPM is installed, type `npm -v` in Terminal. This should print NPM’s version number so you’ll see something like this `1.4.28`