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
| `/:market`            | MarketDetailPage (home) | public `<Route>`  | Shows markets list, details and feeds related to one market|
| `/signup`| SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login` | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/recover`| RecoverPassPage| anon only  `<AnonRoute>`  | Recover Password form, link to login, navigate to homepage after recover |
| `/auth/:id/:market/feed` | ProfileFeedPage      | user only `<PrivateRoute>`  | Shows feed related to users favorites markets|
| `/auth/:id/:market`| ProfileMarketPage | user only  `<PrivateRoute>`| Shows favorites markets list, details related to selected market |
| `/auth/:id/edit` | EditProfilePage    | user only `<PrivateRoute>`  | Edit users profile|



## Components

- Navbar

- MarketDetailPage
  - MarketList
  - MarketChart
  - MarketFeed

- SignupPage
  - Form

- LoginPage
  - Form

- RecoverPassPage
  - Form

- ProfileFeedPage
  - Sidebar
  - Feed
  
- ProfileMarketPage
  - Sidebar
  - MarketList
  - MarketChart

- EditProfilePage
  - Form
  - FavMarketList


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
  pinned_feed: [
    {
      element: { type: Object, required: true },
      type: { type: String, enum: ['tweet', 'news'], required: true },
      sentiment: { type: String, required: true },  
    }
  ],
  investments: [ { type: ObjectId, ref: 'Investment' }, default: [] ],
}
```


Investment model

```javascript
 {
   crypto: { type: String, required: true },
   crypto_value: {type: Number, required: true},
   date: { type: Date, default: Date.now, required: true },  
   sentiment_ratio: { type: Number, required: true },
   type: { type: String, enum: ['sell', 'buy'], required: true },
 }
```


## API Endpoints (backend routes)

| HTTP Method |       URL      | Request Body           | Success status | Error Status | Description                               |
| ----------- | -------------------- | ---------------------------- | -------------- | ------------ | ---------------- |
| GET         | `/api/auth/profile`| Saved session   | 200    | 404   | Check if user is logged in and return ProfileMarketPage     |
| POST        | `/api/auth/signup` | {username, email, password}|                 |     500      | Checks if fields not empty (400) and user not exists (400), then create user with encrypted password, and store user in session |
| POST        | `/api/auth/login`  | {username, password}       |       200       |     500      | Checks if fields not empty (400), if user exists (401), and if password matches (401), then stores user in session              |
| POST        | `/api/auth/logout`         | (empty)           | 200            |              | Logs out the user         |
| POST        | `/api/auth/recover`        | {email, password} | 200            |              | Recovers users password   |
| GET         | `/api/profile/edit`        | {email}           | 200            | 500          | Edits an user   |
| PUT         | `/api/profile/edit`        | {email}           | 200            | 500          | Edits an user   |
| POST        | `/api/profile/delete`      | {email}           | 200            | 500          | Deletes an user   |
| GET         | `/api/investments`     |                   |                | 400          | Show all investments      |
| GET         | `/api/investments/:id` | {id}              |                |              | Show specific investment  |
| POST        | `/api/investments`     | {}                | 201            | 400          | Create and save a new investment |
| DELETE      | `/api/investments/:id` | {id}              | 201            | 400          | delete investment               |


## Links

### Trello/Kanban
[Link to your trello board](https://trello.com/b/Yi0KGJxy/m3) 

### Git
[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides
[Slides Link](http://slides.com)
