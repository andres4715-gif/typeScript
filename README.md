# TypeScript

![image](https://github.com/user-attachments/assets/eb22d606-3eb1-430a-8395-2e13df53a169)

### How to run JSON SERVER (keep in mind the path to be used)

In the project root path:

```shell
Using npm scripts:
$ npm run server

Pass it to JSON Server CLI
$ npx json-server data/db.json -p 3000 --watch
```

Response:

```shell
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching data/db.json...

♡( ◡‿◡ )

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/posts
http://localhost:3000/comments
http://localhost:3000/profile
http://localhost:3000/creditCart
```

Based on the example db.json, you'll get the following routes:

```shell
GET    /posts
GET    /posts/:id
POST   /posts
PUT    /posts/:id
PATCH  /posts/:id
DELETE /posts/:id
```

# Same for comments

```shell
GET   /profile
PUT   /profile
PATCH /profile
```
