const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', async (req, res) => {
    const username = req.query.username || 'rbrahinets';

    try {
        const result = await axios.get(
            `https://api.github.com/users/${username}/repos`
        );

        const repos = result.data
            .map((repo) => ({
                name: repo.name,
                url: repo.html_url,
                description: repo.description,
                stars: repo.stargazers_count,
            }))
            .sort((a, b) => b.stars - a.stars);

        res.send(repos);
    } catch (error) {
        res.status(400).send(
            `Error while getting list of repositories for user ${username}`
        );
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});