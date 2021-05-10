# M3-

## Description

This is an app to manage unofficial tournaments within communities. The app helps to organize, manage and track competitions.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start playing into competition
-  **Login:** As a user I can login to the platform so that I can play competitions
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Tournaments** As a user I can add a tournament
-  **Edit Tournaments** As a user I can edit a tournament
-  **Add Player Names** As a user I can add players to a tournament
-  **Edit Player profiles** As a user I can edit a player profile to fit into the tournament view
-  **View Tournament Table** As a user I want to see the tournament table
-  **Edit Games** As a user I can edit the games, so I can add scores
-  **View Ranks** As a user I can see the ranks




## Backlog



# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior         |
| ------------------------- | -------------------- | --------------------------- | ---------------- |
| `/`                       | SplashPage           | public `<Route>`            | Home page |
| `/signup`| SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login` | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/markets`                | TournamentListPage   | user only `<PrivateRoute>`  | Shows all tournaments in a list|
| `/markets/:id`            | TournamentDetailPage | user only `<PrivateRoute>`  | Details of a tournament to edit|
| `/tournament/:id`         | n/a                  | user only `<PrivateRoute>`  | Delete tournament|
| `/tournament/players`     | PlayersListPage      | user only  `<PrivateRoute>` | List of players of a tournament|
| `/tournament/players/add` | PlayersListPage      | user only `<PrivateRoute>`  | Add a player to the tournament|
| `/tournament/players/:id` | PlayersDetailPage    | user only `<PrivateRoute>`  | Edit player for tournament|
| `/tournament/players/:id` | PlayersListPage      | user only  `<PrivateRoute>` | Delete player from tournament|
| `/tournament/tableview`   | TableView            | user only  `<PrivateRoute>` | Games view and brackets|
| `/tournament/ranks`       | RanksPage            | user only `<PrivateRoute>`  | Ranks list|
| `/tournament/game`        | GameDetailPage       | user only `<PrivateRoute>`  | Game details|




## Components

- LoginPage

- SplashPage

- TournamentListPage

- Tournament Cell

- TournamentDetailPage

- TableViewPage

- PlayersListPage

- PlayerDetailPage

- RanksPage

- TournamentDetailPageOutput

- Navbar


  

 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Tournament Service
  - tournament.list()
  - tournament.detail(id)
  - tournament.add(id)
  - tournament.delete(id)
  
- Player Service 

  - player.detail(id)
  - player.add(id)
  - player.delete(id)

- Game Service

  - Game.put(id)


# Server / Backend

## Models

User model

```javascript
{
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  image: { type: string, default: "https://res.cloudinary.com/dkevcmz3i/image/upload/v1619125766/Service-Wall/user_avatar_xyyphc.png" },
  google_id: { type: String },
  favorites_cryptos: [ String ],
  notifications: [ ],
  pinned_feed: [ {type: ObjectId, ref: 'Feed'}, default: [] ],
}
```


Feed model

```javascript
 {
   element: { type: Object, required: true },
   type: { type: String, enum: ['tweet', 'news'], required: true },
   sentiment: { type: String, required: true },
 }
```


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/api/tournaments`                |                              |                | 400          | Show all tournaments                                         |
| GET         | `/api/tournaments/:id`            | {id}                         |                |              | Show specific tournament                                     |
| POST        | `/api/tournaments` | {}                           | 201            | 400          | Create and save a new tournament                             |
| PUT         | `/api/tournaments/:id`       | {name,img,players}           | 200            | 400          | edit tournament                                              |
| DELETE      | `/api/tournaments/:id`     | {id}                         | 201            | 400          | delete tournament                                            |
| GET         | `/api/players`                    |                              |                | 400          | show players                                                 |
| GET         | `/api/players/:id`                | {id}                         |                |              | show specific player                                         |
| POST        | `/api/players`         | {name,img,tournamentId}      | 200            | 404          | add player                                                   |
| PUT         | `/api/players/:id`           | {name,img}                   | 201            | 400          | edit player                                                  |
| DELETE      | `/api/players/:id`         | {id}                         | 200            | 400          | delete player                                                |
| GET         | `/api/games`                      | {}                           | 201            | 400          | show games                                                   |
| GET         | `/api/games/:id`                  | {id,tournamentId}            |                |              | show specific game                                           |
| POST        | `/api/games`             | {player1,player2,winner,img} |                |              | add game                                                     |
| PUT         | `/api/games/:id`             | {winner,score}               |                |              | edit game                                                    |


## Links

### Trello/Kanban
[Link to your trello board](https://trello.com/b/Yi0KGJxy/m3) 

### Git
[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides
[Slides Link](http://slides.com)
