## MVN React Generate CLI

## Prerequisites

CLI have dependencies that require Node 8.9 or higher.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Generating Components](#generating-components)
- [Generating Features](#generating-features)
- [License](#license)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

### Install Globally

```bash
npm install -g mvn-react-generate-cli
```

Alternatively, you can install [npx](https://www.npmjs.com/package/npx) and run `npx mvn-react-generate-cli <command>`.

## Usage

```bash
mvn-react-gen -h
```

### Generating Components
You can use `mvn-react-gen component` (or just `mvn-react-gen c`) command to generate a component.

When you run a command with `c` or `component` it will auto generate to `components` folder in boilerplate.

See the following example:
```bash
mvn-react-gen c atoms/MyNewComponent
mvn-react-gen c layouts/MyNewComponent
mvn-react-gen c molecules/MyNewComponent
```

### Generating Features
You can use `mvn-react-gen feature` (or just `mvn-react-gen f`) command to generate a feature.

When you run a command with `f` or `feature` it will auto generate to `features` folder in boilerplate.

See the following example:
```bash
mvn-react-gen f projects
mvn-react-gen f products
```

In the feature we can you an argument `--crud` command to generate the feature with full screens for CRUD

See the following example:
```bash
mvn-react-gen f projects --crud
```

## License

[MIT]
