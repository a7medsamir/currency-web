# `currency-web` — the currency web is AngularJS app

This project is an application  for retrive currency


## Getting Started

To get you started you can simply clone the `currency-web` repository and install the dependencies:

### Prerequisites

You need git to clone the `currency-scrapper` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `currency-web`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `currency-web`

Clone the `currency-web` repository using git:

```
git clone https://github.com/a7medsamir/currency-web.git
cd currency-web
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:3000/index.html`][local-app-url].

### Running the App during Development

The `angular-seed` project comes preconfigured with a local development web server. It is a Node.js
tool called [http-server][http-server]. You can start this web server with `npm start`, but you may
choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
http-server -a localhost -p 3000
```

Alternatively, you can choose to configure your own web server, such as Apache or Nginx. Just
configure your server to serve the files under the `app/` directory.


[bower]: http://bower.io/
[git]: https://github.com/shahboura/currency-scraper
[http-server]: https://github.com/indexzero/http-server

[local-app-url]: http://localhost:3000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
