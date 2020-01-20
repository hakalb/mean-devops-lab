# Angular Multi Stack Lab <!-- omit in toc -->

## Content <!-- omit in toc -->

- [1. Purpose of project](#1-purpose-of-project)
- [2. Managing development](#2-managing-development)
  - [Start application stack on virtual servers with live reload](#start-application-stack-on-virtual-servers-with-live-reload)
  - [Start application stack as Docker background process](#start-application-stack-as-docker-background-process)
  - [Stop application stack and cleanup containers and networks](#stop-application-stack-and-cleanup-containers-and-networks)
  - [Rebuild application stack](#rebuild-application-stack)
- [3. Use Nx to evolve the stack](#3-use-nx-to-evolve-the-stack)
  - [Generate an application](#generate-an-application)
  - [Generate a library](#generate-a-library)
  - [Development server](#development-server)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [Understand your workspace](#understand-your-workspace)
  - [Further help](#further-help)

## 1. Purpose of project

Create a multi stack application using

- `Angular` _as front end client_
- `Nest` _as backend rest and push api_
- `MongoDB` _as NoSql database_
- `Nx` _as monorepo developer tool_
- `docker-compose` _to containerize and start/stop the stack (development)_
- `minikube` _to containerize and orchestrate the stack (development)_

The stack will be deployed to `Kubernetes` using a cloud privider with `DevOps` capabilities, e.g:

- `Codefresh` _as CI/CD tool_
- `DigitalOcean` _as host provider_

## 2. Managing development

### Start application stack on virtual servers with live reload

This is the normal case when developing code. Every code change trigger a rebuild and browser refresh.

```bash
npm start
```

> Open browser and navigate to <http://localhost:4200>

It's also possible to activate debugging when using virtuel servers.

### Start application stack as Docker background process

> This lets the user test the stack built for production. Note! Everything is built when images are missing.

```bash
docker-compose up -d
```

> Open browser and navigate to <http://localhost>

View container details.

```bash
docker ps
```

### Stop application stack and cleanup containers and networks

```bash
docker-compose down
```

### Rebuild application stack

```bash
docker-compose build --parallel
```

or open and force a rebuild at the same time

```bash
docker-compose up --force-recreate -d
```

## 3. Use Nx to evolve the stack

> Nx auto generated documentation!  

This project was initially generated using [Nx](https://nx.dev), which is a set of Extensible Dev Tools for Monorepos.

### Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@mean-devops-lab/mylib`.

### Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

### Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
