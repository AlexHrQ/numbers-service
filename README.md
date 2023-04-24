# Numbers Service

This service will provide some basic arithmetic operation implementation wrapped into REST API.

## Getting Started


### Configuration

In order to start service locally create `.env` file and fill it with data provided in sample file `.env.sample`

Env variables list:

| Name   |      Description      |
|----------|-------------|
| NODE_ENV |  Environment service will be running on |
| CONTEXT_PATH |    Global prefix for all routes exposed (typically used for API versioning)   |
| PORT | Port service will be running on (default equals to 3000) |

### CLI

- `npm start` - starts application development server on provided PORT (see above)
- `npm run start:dev` - starts application development server in watch mode
- `npm run build` - bundles application (typically used when deploying to remote envs)

### OpenAPI

Application exposes OpenAPI documentation, available at `/docs` (e.g. `http://localhost:PORT/docs`).
NOTE: OpenAPI is available only when NODE_ENV is not equal to `production`

### Folder structure

- `/domain` represents all the domain objects used in this service. 
- `/services` represents business logic layer. Typically it incapsulates various operations combined into different flows and manipulates with `domain` layer.
- `/api` represents presentational client-facing layer. It contains everything related to inbound/outbound stuff (e.g. controllers, middlewares, guards, operations with request/response).
- `/infrastructure` contains all implementations of different 3rd parties, database drivers, message brokers etc.