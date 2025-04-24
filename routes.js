const express = require('express');
const router = express.Router();

let movieData = [
    {
        "id": 1,
        "title": "The Shawshank Redemption",
    },
    {
        "id": 2,
        "title": "The Godfather",
    }
];

router.get("/", (req, res) => {
    res.json({ movieData: movieData });
});

router.post('/createMovies', (req, res) => {
    const newMovies = {
        "id": movieData.length + 1,
        "title": req.body.title,
    };
    if (movieData.push(newMovies)) {
        res.status(200).json('Movie added successfully', newMovies);
    } else {
        res.status(400).json('Movie not added');
    }
});

router.delete('/deleteMovie/:id', (req, res) => {
    const movieId = parseInt(req.params.id);

    const movieExists = movieData.some(movie => movie.id === movieId);

    if (!movieExists) {
        return res.status(404).json({ message: 'Movie not found' });
    }

    movieData = movieData.filter(movie => movie.id !== movieId);

    res.status(200).json({ message: 'Movie deleted successfully', data: movieData });
});

module.exports = router;
