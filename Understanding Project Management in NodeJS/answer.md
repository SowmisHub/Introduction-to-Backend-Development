a) Package Managers

What is a package manager:
    A package manager is a tool that helps us install, update, remove, and manage libraries or packages that our project depends on. Instead of writing everything from scratch, we can use ready made code created by others.

Why we need package managers in backend development:
    Backend projects use many external libraries for things like servers, databases, authentication, and security. A package manager makes it easy to download these libraries and keep them organized. It also ensures that everyone working on the project uses the same versions of packages.

Problems faced if package managers are not used:
    Without a package manager, developers would need to manually download libraries.
    It becomes hard to track which version of a library is used.
    Sharing the project with others becomes difficult.
    Updating libraries safely is almost impossible.
    Projects become messy and error prone.

b) NPM Node Package Manager

What is NPM
    NPM is the default package manager for Node.js. It comes automatically when Node.js is installed. NPM allows developers to install and manage third party packages for Node.js applications.

Why NPM is important for Node.js applications
    NPM gives access to thousands of ready made packages.
    It saves development time by reusing existing solutions.
    It helps manage project dependencies in a structured way.
    It ensures consistency across development environments.

How NPM helps in managing dependencies
    NPM installs required packages and stores them in one place.
    It records dependency details in package.json.
    It locks exact versions using package lock json.
    It allows easy updates and removal of dependencies.

c) Backend Project Initialization

What is the command used to initialize a backend Node.js project
    The command used is npm init.

Explain what npm init does
    npm init starts an interactive process.
    It asks questions like project name, version, description, and entry file.
    Based on the answers, it creates a package.json file.

Explain what npm init -y does
    npm init -y skips all questions.
    It automatically creates package.json with default values.
    It is useful when you want to quickly start a project.

d) Files and Folders Created After Project Initialization

package.json
    package.json is the main configuration file of a Node.js project.
    It stores project details like name and version.
    It lists dependencies and scripts.
    It helps NPM understand how the project works.

node_modules
    node_modules is the folder where all installed packages are stored.
    It contains the actual code of dependencies.
    This folder can become very large.
    It is recreated automatically when dependencies are installed.

package lock json
    package lock json records the exact versions of installed packages.
    It ensures the same dependency versions are installed on all machines.
    It improves consistency and avoids unexpected errors.

Files and folders that should not be pushed to GitHub and why
node_modules should not be pushed.

It is very large in size.
It can be regenerated using package.json and package lock json.
Pushing it makes the repository heavy and slow.

Files that must be committed and why
package.json must be committed.
It tells others which dependencies the project needs.
package lock json must be committed.
It ensures everyone installs the same versions of dependencies.
These files help recreate the project exactly on any system.