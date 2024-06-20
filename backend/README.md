### Description

Node API Express and MongoDB

### Documentation

Swagger Docs http://localhost:8080/docs/

## API

| Technology    | Description             | Link               |
| ------------- | ----------------------- | ------------------ |
| AppEngine     | Google Cloud Platform   | [cloud.google.com] |
| MongoDB Atlas | MongoDB database server | [mongodb.com]      |
| GitHub        | Version Controlling     | [github.com]       |

## API Directories

- Public Routes `./src/routes/public`
- Private Routes `./src/routes/private`
- Models `./src/app/Models`
- Controllers `./src/app/Controllers`
- Services `./src/app/Services`
- Config consign and express `./src/config/express.js`
- Server configuration and application startup `./server.js`

## Configuring the API locally

- Download or clone the project access the project folder with the terminal and execute the CLI <code>npm install</code>
- Create your .env file with the following configuration
  - WORKERS: How many workers you need
  - AUTO_SCALE: When enabled will create workers by CPU Eg.: CPU \* WORKERS
  - DATABASE_URL: Your database URL
  - AUTH_ROUNDS and AUTH_SECRET: Those are used for authentication and verification

```
WORKERS=1
AUTO_SCALE=true
DATABASE_URL=mongodb+srv://<user>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
AUTH_ROUNDS=15
AUTH_SECRET=docssecret
```

- Run the server <code>npm start</code>
- Access in your browser <a href="http://localhost:8080/projects">http://localhost:8080/projects</a>
- For deployment is important to update app.yaml to your service_account and can be found on your GCP


