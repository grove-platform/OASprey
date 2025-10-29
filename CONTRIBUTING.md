# How to Run OASprey from Source

To build and run OASprey from source, clone this repo and install dependencies:

```sh
npm install
```

To build, run:

```sh
npm build
```

# Running Tests

This project uses Jest to test.

To run tests, use:

```bash
# run all tests
npm test

# run all tests, with coverage check
npm test:coverage

# run all tests, with coverage check, and opens the coverage report in your browser
npm test:coverage:browse

# run eslint check
npm lint

# [MUST] run all the above checks
npm test:ci
```

# Architecture

OASprey has two major components:

- **oasprey:** contains the matchers and utilities to determine whether the
  response under test satisfies the OpenAPI spec.
- **openapi-validator:** contains utilities to load and parse OpenAPI specs.

If you're working on one of these units, add or update any corresponding tests.

# Contribution Guidelines

> **Note**: This project is not under active development. We will review and
respond to issues and PRs, but we may not be able to address them immediately.

Thanks for being willing to contribute!

We appreciate bug reports, doc updates, fixing open issues, and other
contributions.

- [Bug Reports](#bug-reports)
- [Pull Requests](#pull-requests)

## Bug Reports

A bug is a **recreatable** problem that is caused by the code in the repository.

Before submitting bug reports:

1. **Check if the [issue has already been reported](https://github.com/grove-platform/OASPrey/issues)**
2. **File an issue**: [file an issue](https://github.com/grove-platform/OASprey/issues/new?assignees=&labels=bug&template=bug_report.md&title=) with the details required to recreate
the bug.

## Pull Requests

- Good PRs are a fantastic help!
- PRs must pass `npm test:ci`
- New code should be consistent with existing code.
- PRs should remain focused in scope and not contain unrelated commits or code changes.
- Please ask before embarking on any significant pull request, to ensure we will want to merge into the project.

Follow this process if you'd like to work on this project:

### 1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes

```bash
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/<repo-name>

# Navigate to the newly cloned directory
cd <repo-name>

# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/<upstream-owner>/<repo-name>
```

### 2. If you cloned a while ago, get the latest changes from upstream

```bash
git checkout <dev-branch>
git pull upstream <dev-branch>
```

### 3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix

```bash
git checkout -b <topic-branch-name>
```

### 4. Test that your code works

This project uses Jest to test.

```bash
# run all tests
npm test

# run all tests, with coverage check
npm test:coverage

# run all tests, with coverage check, and opens the coverage report in your browser
npm test:coverage:browse

# run eslint check
npm lint

# [MUST] run all the above checks
npm test:ci
```

### 5. Commit your changes in logical chunks

- Use Git's [interactive rebase](https://help.github.com/articles/interactive-rebase) feature to tidy up your commits before making them public.
- We use [Husky](https://github.com/typicode/husky) to run code-quality checks on every commit. This informs you early on if your code is not ready to be saved in Git history. If a commit fails a check, fix the problem then commit again.

### 6. Locally merge (or rebase) the upstream development branch into your topic branch

```bash
git pull [--rebase] upstream <dev-branch>
```

### 7. Push your topic branch up to your fork

```bash
git push origin <topic-branch-name>
```

### 8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description. Link it to the relevant issue