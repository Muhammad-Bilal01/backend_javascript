require('dotenv').config() // configure .dot env variables
// import express app from express module
const express = require('express')
// make a reference of express in app 
const app = express()



// Initialize port in which our app listen 
// const port = 3000
const port = process.env.PORT


const user = {
    "login": "Muhammad-Bilal01",
    "id": 148564089,
    "node_id": "U_kgDOCNroeQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/148564089?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Muhammad-Bilal01",
    "html_url": "https://github.com/Muhammad-Bilal01",
    "followers_url": "https://api.github.com/users/Muhammad-Bilal01/followers",
    "following_url": "https://api.github.com/users/Muhammad-Bilal01/following{/other_user}",
    "gists_url": "https://api.github.com/users/Muhammad-Bilal01/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Muhammad-Bilal01/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Muhammad-Bilal01/subscriptions",
    "organizations_url": "https://api.github.com/users/Muhammad-Bilal01/orgs",
    "repos_url": "https://api.github.com/users/Muhammad-Bilal01/repos",
    "events_url": "https://api.github.com/users/Muhammad-Bilal01/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Muhammad-Bilal01/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Muhammad Bilal",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 76,
    "public_gists": 0,
    "followers": 6,
    "following": 12,
    "created_at": "2023-10-20T14:44:36Z",
    "updated_at": "2024-12-15T21:42:10Z"
}

// get Route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Dont forget to add / in routes
app.get("/youtube", (req, res) => {
    res.send("Run From Youtube")
})

app.get("/login", (req, res) => {
    res.send("<h1>Please login to go ahead</h1>")
})

app.get("/github", (req, res) => {
    res.json(user)
})


// App listening
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})