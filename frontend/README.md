# ![React + Mobx + TypeScript Example App](project-logo.png)

## Getting started

To get the frontend running locally:

- Clone this repo
- `yarn install` to install all req'd dependencies
- `yarn start` to start the local server (this project uses create-react-app)


### Making requests to the backend API

If you want to change the API URL to a local server, simply edit `src/agent.js` and change `API_ROOT` to the local server's URL (i.e. `localhost:3000/api`)

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU* users (sign up & settings page - no deleting required)
- CRUD Articles
- CR*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users