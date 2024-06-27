import mongoose from "mongoose";

import movieModel from "./MovieSchema/movieSchema.js";
export default class movieReposiotry{
    constructor(){
        
    }
    addMovie = async (movieInfo)=>{
        try{
            // 
            const movieDetails = new movieModel(movieInfo);

            const result = await movieDetails.save();
            console.log('Newly added movie is: ', result);
            return result;

        }catch(err){
            console.log('Failed to add: ', movieInfo);
            console.log('Some error occured in moviesRepository', err);
            return;
        }
    }

    editMovie = async (movieDetails) => {
        try {
            console.log('movieDetails received to edit: ', movieDetails);
    
            // Extract the _id from movieDetails
            const { _id} = movieDetails;
    
            // Ensure _id is provided
            if (!_id) {
                console.log('Error: _id is not found');
            }
    
            // Perform the update
            const updatedMovieDetails = await  movieModel.findByIdAndUpdate(_id, movieDetails, {
                new: true, // Return the updated document
                runValidators: true // Run schema validators
            });
    
            console.log('Details of movie updated: ', updatedMovieDetails);
            return updatedMovieDetails; // Return the updated details
        } catch (err) {
            console.log('Error updating movie: ', err);
            return;
        }
    }


    deleteMovie = async (movieDetails) =>{
        try{
            console.log('Movie about to be deleted: ', movieDetails);
            const deleteMovieDetails = await movieModel.findByIdAndDelete(movieDetails._id);
            console.log(deleteMovieDetails);
            return deleteMovieDetails;
        }catch(err){
            console.log("Some error occured: ", err);
            return 
        }
    }
    
    toggleMovieWatched = async (movieDetails) =>{
        try{
            console.log('Came into watch status toggle');
            // Obtain _id of watched movie
            const {_id} = movieDetails;
            
            if(!_id){
                console.log('_id is undefined');
                return false;
            }
            

            // Find a movie by ID
            const movie = await movieModel.findById(_id);
            
            // If no data found in data base then return false
            if (!movie){
                return false
            }

            // Toggle the boolean value of watched
            movie.Watched = !movie.Watched;
            const toogleResponse = await movie.save();

            console.log(toogleResponse);
            return toogleResponse;

        }catch(err){
            console.log('Some error occured: ', err)
            return
        }
    }

    starRating = async(movieDetails)=>{
        try{
            // Obtain movie _id and rating
            const {_id, rating} = movieDetails;
            console.log(_id, rating);

            // Find the movie by its _id and update the Review field
            const updatedMovie = await movieModel.findByIdAndUpdate(
                _id,
                { $set: { Rating: rating } },
                { new: true } // Return the updated document
            );

            console.log("updatedMovie: ", updatedMovie);

            return updatedMovie;

        }catch(err){
            console.log('Some error occured in repository: ', err);
            return;
        }
    }

    movieDetails = async ()=>{
        try{

            const movieData = await movieModel.find();
            console.log(movieData);
            return movieData;

        }catch(err){
            console.log('Some error occured in repository', err);
            return
        }
    }
}