# Vue Router Vuex Todo List

<div align="center">

  ![License][license-badge]
  ![Last commit][last-commit-badge]
  ![Issues][issues-badge]
  ![Pull requests][pull-requests-badge]
  ![Release][release-badge]
  ![Code size][code-size-badge]
  ![Repo size][repo-size-badge]

  ![Vue][vue-badge]
  ![Vue Router][vue-router-badge]
  ![Vuex][vuex-badge]
  ![Node Sass][node-sass-badge]
  ![Bootstrap][bootstrap-badge]
  ![Font Awesome][font-awesome-badge]

  ![Jest][jest-badge]
  ![Webpack][webpack-badge]
  ![Babel][babel-badge]
  ![ESLint][eslint-badge]
  ![Stylelint][stylelint-badge]
  ![prettier][prettier-badge]

  ![pnpm][pnpm-badge]
  ![Nginx][nginx-badge]
  ![Docker][docker-badge]

</div>

Example of a web application implemented with **Vue.js**, **Vue Router** and **Vuex**.

## Table of contents

- [Vue Router Vuex Todo List](#vue-router-vuex-todo-list)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [Building](#building)
    - [Development](#development)
    - [Production](#production)
  - [Running](#running)
    - [Development build](#development-build)
      - [Webpack's built-in web server](#webpacks-built-in-web-server)
      - [Nginx](#nginx)
      - [Docker container](#docker-container)
    - [Production version](#production-version)
      - [Webpack's built-in web server](#webpacks-built-in-web-server-1)
      - [Nginx](#nginx-1)
      - [Docker container](#docker-container-1)
  - [Testing](#testing)
  - [Coding style](#coding-style)
    - [JavaScript](#javascript)
    - [CSS and SCSS](#css-and-scss)
    - [Formatting](#formatting)
  - [Built With](#built-with)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

### Prerequisites

It is recommended run the project in a Linux machine. Also you will need to install the following software:

- pnpm

   ```sh
   npm install -g pnpm
   ```

- Nginx

   To deploy the project locally without using Webpack's built-in web server, install Nginx by following the steps provided on its [official website][nginx-installation-guide].

- Docker

   To deploy the project as a container you need to have Docker installed on your machine. Follow the steps provided on its [official website][docker-installation-guide] to install it.

### Installing

1. Clone the repository:

   ```sh
   git clone https://github.com/jorgeac89/vue-router-vuex-todo-list.git
   ```

2. Navigate to the project folder:

   ```sh
   cd path_to_project
   ```

3. Run the setup command:

   ```sh
   pnpm setup
   ```

   This will install the project dependencies and will set up Git.

4. Add the hostnames `vueroutervuextodolist.local` and `www.vueroutervuextodolist.local` to the localhost IP row in the file `/etc/hosts`. The row should look like this:

   ```txt
   127.0.0.1	localhost vueroutervuextodolist.local www.vueroutervuextodolist.local
   ```

5. If you want to run the project using Nginx, configure it with the following command:

   ```sh
   pnpm setup:nginx
   ```

## Building

### Development

To create the development build, run:

```sh
pnpm dev
```

If you also want to run the watcher that rebuilds the app when there are changes in the code, run:

```sh
pnpm dev:watch
```

To create the Docker image of the development build, run:

```sh
pnpm dev:docker
```

### Production

To create the production build, run any of the following commands:

```sh
pnpm build
```

```sh
pnpm prod
```

If you also want to run the watcher that rebuilds the app when there are changes in the code, run:

```sh
pnpm prod:watch
```

To create the Docker image of the production build, run:

```sh
pnpm prod:docker
```

## Running

### Development build

#### Webpack's built-in web server

1. To run the development build using Webpack's built-in web server, run:

   ```sh
   pnpm dev:server
   ```

2. Now you should now be able to access the application through any of these links:

   - [vueroutervuextodolist.local:8080][primary-dev-webpack-link]
   - [www.vueroutervuextodolist.local:8080][secondary-dev-webpack-link]

3. To stop the server, press `Ctrl+C` in the terminal where the server is running or run the following command in another terminal:

   ```sh
   pnpm dev:server:stop
   ```

   If the server does not stop, you can run the following command:

   ```sh
   pnpm dev:server:kill
   ```

#### Nginx

1. To run the development build using Nginx you need to have it configured. If you haven't run the Nginx setup command yet, run:

   ```sh
   pnpm setup:nginx
   ```

2. Make sure that Nginx is running with the following command:

   ```sh
   sudo service nginx status
   ```

   If it is not running, start it with the following command:

   ```sh
   sudo service nginx start
   ```

3. Run the following command to create a development build and Nginx will start serving the application:

   ```sh
   pnpm dev
   ```

4. Now you should now be able to access the application through any of these links:

   - [vueroutervuextodolist.local][primary-nginx-link]
   - [www.vueroutervuextodolist.local][secondary-nginx-link]

5. To stop Nginx, run:

   ```sh
   sudo service nginx stop
   ```

#### Docker container

1. To run the development build in a Docker container, you must first create the Docker image. To do so, run:

   ```sh
   pnpm dev:docker
   ```

2. Once the image is created, you can run it with the following command:

   ```sh
   pnpm dev:docker:start
   ```

3. Now you should now be able to access the application through any of these links:

   - [vueroutervuextodolist.local:8081][primary-dev-docker-link]
   - [www.vueroutervuextodolist.local:8081][secondary-dev-docker-link]

4. To stop the Docker container, run:

   ```sh
   pnpm dev:docker:stop
   ```

### Production version

#### Webpack's built-in web server

1. To run the production build using Webpack's built-in web server, run any of these commands:

   ```sh
   pnpm start
   ```

   ```sh
   pnpm prod:server
   ```

2. Now you should now be able to access the application through any of these links:

   - [vueroutervuextodolist.local:8090][primary-prod-webpack-link]
   - [www.vueroutervuextodolist.local:8090][secondary-prod-webpack-link]

3. To stop the server, press `Ctrl+C` in the terminal where the server is running or run any of the following commands in another terminal:

   ```sh
   pnpm stop
   ```

   ```sh
   pnpm prod:server:stop
   ```

   If the server does not stop, you can run any of the following commands:

   ```sh
   pnpm kill
   ```

   ```sh
   pnpm prod:server:kill
   ```

#### Nginx

1. To run the development build using Nginx you need to have it configured. If you haven't run the Nginx setup command yet, run:

   ```sh
   pnpm setup:nginx
   ```

2. Make sure that Nginx is running with the following command:

   ```sh
   sudo service nginx status
   ```

   If it is not running, start it with the following command:

   ```sh
   sudo service nginx start
   ```

3. Run the any of the following commands to create a production build and Nginx will start serving the application:

   ```sh
   pnpm build
   ```

   ```sh
   pnpm prod
   ```

4. Now you should now be able to access the application through any of these links:

   - [vueroutervuextodolist.local][primary-nginx-link]
   - [www.vueroutervuextodolist.local][secondary-nginx-link]

5. To stop Nginx, run:

   ```sh
   sudo service nginx stop
   ```

#### Docker container

1. To run the production build in a Docker container, you must first create the Docker image. To do so, run any of these commands:

   ```sh
   pnpm docker
   ```

   ```sh
   pnpm prod:docker
   ```

2. Once the image is created, you can run it with the following command:

   ```sh
   pnpm prod:docker:start
   ```

3. Now you should now be able to access the application through any of these links:

   - [vueroutervuextodolist.local:8091][primary-prod-docker-link]
   - [www.vueroutervuextodolist.local:8091][secondary-prod-docker-link]

4. To stop the Docker container, run:

   ```sh
   pnpm prod:docker:stop
   ```

## Testing

The test are placed in the folder `__tests__`. To run the test suites, execute the following command:

```sh
pnpm test
```

If you want a more verbose output, run:

```sh
pnpm test:verbose
```

You can also run a watcher that runs the test suites whenever there are changes in the code. To do so, run:

```sh
pnpm test:watch
```

Some tests relies on Jest snapshots, so when you change some part of the code that renders into HTML it is possible that some of them fail. If that happens, check out that the new render conforms to what you intended and if so, run the following command to update the snapshots:

```sh
pnpm test:update
```

To generate a coverage report use the following command:

```sh
pnpm test:coverage
```

## Coding style

The project uses ESLint and Stylelint to check the JavaScript, CSS, and SCSS coding style and Prettier to format the code.

### JavaScript

To check the JavaScript coding style with the linter, run the following command:

```sh
pnpm lint
```

You can also run a watcher checks the JavaScript coding style whenever there are changes in the code. To do so, run:

```sh
pnpm lint:watch
```

Some errors in the JavaScript coding style can be automatically fixed by the linter running the following command. Be careful using it because it can lead to unexpected results, so make sure that the execution does not break the code (it is recommended to use it only when there is a small amount of code changes):

```sh
pnpm lint:fix
```

You can also run a watcher that automatically fixes JavaScript coding style errors whenever there are changes in the code. As with the previous command, use it with caution as it can lead to unexpected breaks in the code:

```sh
pnpm lint:autofix
```

### CSS and SCSS

To check the CSS coding style with the linter, run the following command:

```sh
pnpm stylelint
```

You can also run a watcher checks the CSS and SCSS coding style whenever there are changes in the code. To do so, run:

```sh
pnpm stylelint:watch
```

Some errors in the CSS abd SCSS coding style can be automatically fixed by the linter running the following command. Be careful using it because it can lead to unexpected results, so make sure that the execution does not break the code (it is recommended to use it only when there is a small amount of code changes):

```sh
pnpm stylelint:fix
```

You can also run a watcher that automatically fixes CSS and SCSS coding style errors whenever there are changes in the code. As with the previous command, use it with caution as it can lead to unexpected breaks in the code:

```sh
pnpm stylelint:autofix
```

### Formatting

Optionally you can format your code with a formatter. To print in a terminal the formatted code, run:

```sh
pnpm format
```

You can also run a watcher checks format of the code whenever there are changes on it. To do so, run:

```sh
pnpm format:watch
```

Some formatting errors can be automatically fixed by formatter running the following command. Be careful using it because it can lead to unexpected results, so make sure that the execution does not break the code (it is recommended to use it only when there is a small amount of code changes):

```sh
pnpm format:fix
```

You can also run a watcher that automatically formats the code whenever there are changes on it. As with the previous command, use it with caution as it can lead to unexpected breaks in the code:

```sh
pnpm format:autofix
```

## Built With

- [Vue.js][vue] - Open-source model–view–viewmodel front end JavaScript framework
- [Vue Router][vue-router] - Vue router library for Vue.js
- [Vuex][vuex] - Flux state management pattern library for Vue.js applications
- [Bootstrap][bootstrap] - CSS framework
- [Font Awesome][font-awesome] - Font and icon toolkit based on CSS and Less
- [Jest][jest] - JavaScript testing framework
- [Webpack][webpack] - JavaScript module bundler
- [Babel][babel] - JavaScript compiler
- [Sass][sass] - Preprocessor scripting language that is interpreted or compiled into CSS
- [ESLint][eslint] - Linter tool for JS and JSX files
- [Stylelint][stylelint] -  Linter tool for CSS and SCSS files
- [Prettier][prettier]- Multilanguage code formatter
- [pnpm][pnpm] - Node package manager
- [Nginx][nginx] -  HTTP server and reverse proxy
- [Docker][docker] - Tool designed to create, deploy, and run applications by using containers

## Contributing

Contributions are always welcome and we encourage you to help us to improve the project! If you want to contribute, please read [CONTRIBUTING.md][contributing] for guidelines on the how to do so.

## Versioning

The project uses [SemVer][semver] for versioning in `master` branch, considering a major change when the GUI changes substantially or when backend APIs implement breaking changes, a minor change when new features are added and a patch when bugs are fixed.

For `release` branches, it uses for the next version to be used in `master` branch with the suffix `-rc.x`, being `x` the number of commits since the branch was created.

Regarding `develop` branch, it uses the last `master` branch version and adds the suffix `-snapshot.x`, being `x` the number of commits since the last merge with `master` branch or `release` branch.

Finally, for `feature` branches, they use the version of the commit of the `develop` branch from which it started and adds the suffix `.hash.x`, being `hash` the first 10 characters of the sha256 of the branch name and `x` the number of commits it that branch.

For the versions available, see the [tags on this repository][repository-tags].

## Authors

- **Jorge Antón Caballero** - [jorgeac89@gmail.com][jorgeac89-email] - [Github][jorgeac89-github-page]

## License

This project is licensed under the MIT License - see the [LICENSE][license] file for details

<!-- APP LINKS -->

[primary-dev-webpack-link]: http://vueroutervuextodolist.local:8080

[secondary-dev-webpack-link]: http://www.vueroutervuextodolist.local:8080

[primary-nginx-link]: http://vueroutervuextodolist.local

[secondary-nginx-link]: http://www.vueroutervuextodolist.local

[primary-dev-docker-link]: http://vueroutervuextodolist.local:8081

[secondary-dev-docker-link]: http://www.vueroutervuextodolist.local:8081

[primary-prod-webpack-link]: http://vueroutervuextodolist.local:8090

[secondary-prod-webpack-link]: http://www.vueroutervuextodolist.local:8090

[primary-prod-docker-link]: http://vueroutervuextodolist.local:8091

[secondary-prod-docker-link]: http://www.vueroutervuextodolist.local:8091

<!-- REPOSITORY LINKS -->

[contributing]: https://github.com/jorgeac89/vue-router-vuex-todo-list/blob/master/CONTRIBUTING.md

[repository-tags]: https://github.com/jorgeac89/vue-router-vuex-todo-list/tags/

[license]: https://github.com/jorgeac89/vue-router-vuex-todo-list/blob/master/LICENSE

<!-- EXTERNAL LINKS -->

[nginx-installation-guide]: https://www.nginx.com/resources/wiki/start/topics/tutorials/install/

[docker-installation-guide]: https://docs.docker.com/get-docker/

[vue]: https://vuejs.org/

[vue-router]: https://router.vuejs.org/

[vuex]: https://vuex.vuejs.org/

[bootstrap]: https://getbootstrap.com/

[font-awesome]: https://fontawesome.com/

[jest]: https://jestjs.io/

[enzyme]: https://enzymejs.github.io/enzyme/

[webpack]: https://webpack.js.org/

[babel]: https://babeljs.io/

[Sass]: https://sass-lang.com/

[eslint]: https://eslint.org/

[stylelint]: https://stylelint.io/

[prettier]: https://prettier.io/

[pnpm]: https://pnpm.js.org/

[nginx]: https://www.nginx.com/

[docker]: https://www.docker.com/

[semver]: http://semver.org/

[jorgeac89-email]: mailto:jorgeac89@gmail.com

[jorgeac89-github-page]: https://github.com/jorgeac89/

<!-- BADGES -->

[license-badge]: https://img.shields.io/github/license/jorgeac89/vue-router-vuex-todo-list?style=flat-square

[last-commit-badge]: https://img.shields.io/github/last-commit/jorgeac89/vue-router-vuex-todo-list?style=flat-square

[issues-badge]: https://img.shields.io/github/issues/jorgeac89/vue-router-vuex-todo-list?style=flat-square

[pull-requests-badge]: https://img.shields.io/github/issues-pr/jorgeac89/vue-router-vuex-todo-list?style=flat-square

[release-badge]: https://img.shields.io/github/v/release/jorgeac89/vue-router-vuex-todo-list?style=flat-square

[code-size-badge]: https://img.shields.io/github/languages/code-size/jorgeac89/vue-router-vuex-todo-list?style=flat-square

[repo-size-badge]: https://img.shields.io/github/repo-size/jorgeac89/vue-router-vuex-todo-list?style=flat-square

[vue-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/vue?style=flat-square

[vue-router-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/vue-router?style=flat-square

[vuex-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/vuex?style=flat-square

[node-sass-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/dev/node-sass?style=flat-square

[bootstrap-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/bootstrap?style=flat-square

[font-awesome-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/@fortawesome/fontawesome-free?label=font-awesome&style=flat-square

[jest-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/dev/jest?style=flat-square

[webpack-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/dev/webpack?style=flat-square

[babel-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/dev/@babel/core?style=flat-square

[eslint-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/dev/eslint?style=flat-square

[stylelint-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/dev/stylelint?style=flat-square

[prettier-badge]: https://img.shields.io/github/package-json/dependency-version/jorgeac89/vue-router-vuex-todo-list/dev/prettier?style=flat-square

[pnpm-badge]: https://img.shields.io/npm/v/pnpm?label=pnpm&style=flat-square

[nginx-badge]: https://img.shields.io/github/v/tag/nginx/nginx?label=nginx&style=flat-square

[docker-badge]: https://img.shields.io/github/v/tag/docker/engine?label=docker&style=flat-square
