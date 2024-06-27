import movieReposiotry from "./movie.repository.js";

export default class moviesController{
    constructor(){
        this.movieReposiotry = new movieReposiotry();
    }

    addNewMovie = async (req, res)=>{
        try{
            if (!req.body){
                return res.status(400).json({msg: 'Details of movie missing'});
            }

            console.log('Movie details received are: ', req.body);
            const response = await this.movieReposiotry.addMovie(req.body);
            if (!response){
                console.log('res: ', response);
                return res.status(400).json({msg:'Some thing went wrong, Error!'});
            }

            return res.status(201).json({response});
        }catch(err){
            console.log(err);
            return res.status(400).json({message: 'Some thing went wrong'});
        }
    }

    editMovieInDB = async (req, res)=>{
        try{
            const response = await this.movieReposiotry.editMovie(req.body);
            if(!response){
                res.status(400).json({msg:'Something went wrong'});
            }

            return res.status(200).json({response});
        }catch(err){
            return res.status(400).json({msg:'Some error occurred'});
        }
    }

    deleteMovie = async (req, res)=>{
        try{
            
            const response = await this.movieReposiotry.deleteMovie(req.query);
            if(!response){
                res.status(400).json({err:"Some error occured"});
            }

            return res.status(200).json(response);
        }catch(err){
            console.log('Some error occured: ', err);
            return res.status(400).json({msg:"Some error occured!"});
        }
    }

    toggleWatch = async (req, res)=>{
        try{
            
            const response = await this.movieReposiotry.toggleMovieWatched(req.query);
            
            if(!response){
                return res.status(400).json('Somethig went wrong')
            }

            return res.status(200).json(response);
        }catch(err){
            console.log('Some error occured: ', err)
            return res.status(400).json({msg: 'Something went wrong'});
        }
    }

    addStarRating = async (req, res)=>{
        try{
            const response = await this.movieReposiotry.starRating(req.query);
            if(!response){
                return res.status(400).json({msg:"Something went wrong!"});
            }

            return res.status(200).json({response});

        }catch(err){
            console.log('Some error occured: ', err);
            res.status(400).json({msg: 'Something went wrong!'});
        }
    }

    allMovieDetails = async (req, res)=>{
        try{

            const response = await this.movieReposiotry.movieDetails();
            return res.status(200).json({response});

        }catch(err){
            console.log('Some error occured: ', err);
            return res.status(400).json({msg:'Something went wrong'});
        }
    }
}