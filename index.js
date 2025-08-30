require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000
const githubData = {
  
  "login": "Subhratanughorai",
  "id": 167636310,
  "node_id": "U_kgDOCf3tVg",
  "avatar_url": "https://avatars.githubusercontent.com/u/167636310?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Subhratanughorai",
  "html_url": "https://github.com/Subhratanughorai",
  "followers_url": "https://api.github.com/users/Subhratanughorai/followers",
  "following_url": "https://api.github.com/users/Subhratanughorai/following{/other_user}",
  "gists_url": "https://api.github.com/users/Subhratanughorai/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Subhratanughorai/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Subhratanughorai/subscriptions",
  "organizations_url": "https://api.github.com/users/Subhratanughorai/orgs",
  "repos_url": "https://api.github.com/users/Subhratanughorai/repos",
  "events_url": "https://api.github.com/users/Subhratanughorai/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Subhratanughorai/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "SUBHRATANU GHORAI",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2024-04-20T16:00:54Z",
  "updated_at": "2025-08-25T14:15:54Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req, res) =>{
    res.send('babinghorai')
})
app.get('/login',(req, res) =>{
    res.send('<h1>please login at msit portal</h1>')
})
app.get('/youtube',(req, res) =>{
    res.send('<h2>msit</h2>')
})
app.get('/github',(req, res) =>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
