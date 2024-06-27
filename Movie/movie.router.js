import express from "express";
import moviesController from "./movie.controller.js";

const movieRouter = express.Router();
const MoviesController = new moviesController();

movieRouter.get('/getMovieDetails', MoviesController.allMovieDetails);
movieRouter.post('/addNewMovie', MoviesController.addNewMovie);
movieRouter.put('/editMovie', MoviesController.editMovieInDB);
movieRouter.delete('/deleteMovie', MoviesController.deleteMovie);
movieRouter.patch('/toggleWatchedStatus', MoviesController.toggleWatch);
movieRouter.patch('/addStarRating', MoviesController.addStarRating);
// Catch-all route for unmatched routes
movieRouter.use((req, res) => {
    console.log('No route matched!');
    res.status(404).send({ error: 'Route not found' });
  });

export default movieRouter;