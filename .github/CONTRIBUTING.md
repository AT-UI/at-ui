
# Contributing to AT-UI


Thank you for choosing AT-UI. Please take a few moments to review the following guidelines to get you started.

## Team members

AT-UI is developed as an open source project by [AOTU Labs](https://aotu.io/)

## Documentation

The AT-UI documentation is maintained as a collection of Markdown files power by [vue-markdown-loader](https://www.npmjs.com/package/vue-markdown-loader). Any pull requests are highly appreciated. Especially for internationalization.

## Issue

Issues are exclusively for bug reports, feature requests and design-related topics. A bug issue is a demonstrable problem that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

Before submitting an issue, please check if similar questions have already been issued.

## Pull requests

**Working on your first Pull Request?** You can learn how from this *free* series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

All pull requests are welcome. Thanks for taking the time to contribute.

- Create an issue about the features, such as new components.
- Fork the repo to your own account.
- Clone your fork.
- Create a new branch base on `dev`, if you want to add new component, the branch name should be formatted as `component-[Component Name]`. (e.g. `component-steps`) And the commit info should be formatted as `[Component Name]: Info about commit`.
- Make sure that running `npm run prepublish` outputs the correct files.
- Rebase before creating a PR to keep commit history clear. (Merge request to branch `dev`)
- Provide some description about your PR.

## Develop

Clone and install the respoitory.

```bash
git clone git@github.com:AT-UI/at-ui.git

npm install
```

Update submodule.

> `at-ui-style` is a submodule of `at-ui`. You should run two commands: `git submodule init` to initialize your local configuration file, and `git submodule update` to fetch all the data.

```bash
git submodule init
git submodule update
```

Run the project.

```bash
npm run dev

# open http://localhost:7200/
```

If you add new language config, please run the command `npm run build:locale` first.

```bash
npm run build:locale
```

To build components

```bash
npm run build:component
```
