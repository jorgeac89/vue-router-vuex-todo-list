# Contributing

We welcome each contribution with open arms and we are grateful for the time you took to improve the project. This document will help you know how to proceed when reporting a bug, suggesting a new feature, or something else so you don't feel left behind with your wonderful ideas.

## Table of contents

- [Contributing](#contributing)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
  - [Guidelines](#guidelines)
    - [Issues](#issues)
    - [Pull requests](#pull-requests)
      - [Process](#process)
        - [References](#references)

## Getting started

Contributions are managed via GitHub **issues** and **pull requests**. Please, have a look at the guidelines to get your contribution acknowledged as fast and smooth as possible, whether it's a bug report, a suggestion for a new feature or something else.

## Guidelines

### Issues

- Look for similar issues already posted before submitting yours.
- Provide as much information as possible on the subject. Screenshots and sketches are accepted, as well as any other means that help communicate the objective of the problem.
- We try to manage problems FIFO, but depending on the impact of each one, some may vary their priority.

### Pull requests

- Discuss the feature or scope  of your contribution via issue first.
- Keep the scope of each pull request as small and atomic as possible. If you want to add a large feature, try breaking it down into smaller ones.
- Also, keep each commit as small and atomic as possible with a clear and meaningful message.
- Update the documentation when required.
- If your contribution requires to be tested, add tests.
- Linters will help you to conform to the coding style standards, make sure to run it to check for errors.

#### Process

- Fork the project.
- Clone the project to your machine.

   ```sh
   git clone https://github.com/jorgeac89/vue-router-vuex-todo-list.git
   ```

- Run the setup command in order to install the Git hooks.

   ````sh
   pnpm setup
   ````

- The projects are developed following a Gitflow workflow, so create a branch following its standard.

   ```sh
   git checkout -b [feature, hotfix...]/descriptive-name
   ```

- Commit your changes with semantic commit message.

   ```sh
   git commit -m 'semantic commit message'
   ```

- Push the branch.

   ```sh
   git push origin your-branch
   ```

- Open a pull request.

##### References

- [Gitflow Workflow][gitflow-workflow]
- [Conventional Commits][conventinal-commits]
- [Semantic Commit Messages][Semantic-commit-messages]
- [Karma - Git Commit Msg][karma-git-commit-msg]

<!-- LINKS -->
[gitflow-workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

[conventinal-commits]: https://www.conventionalcommits.org/en/v1.0.0/

[semantic-commit-messages]: https://seesparkbox.com/foundry/semantic_commit_messages

[karma-git-commit-msg]: https://karma-runner.github.io/1.0/dev/git-commit-msg.html
