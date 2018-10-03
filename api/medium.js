const express = require('express');

const router = express.Router();
const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const redirectUri = encodeURIComponent('http://127.0.0.1:7087/api/medium/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://medium.com/m/oauth/authorize?client_id={{clientId}}
    &scope=basicProfile,publishPost,uploadImage
    &state={{state}}
    &response_type=code
    &redirect_uri={{redirectUri}}`);
});

module.exports = router;
