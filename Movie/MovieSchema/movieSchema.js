import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    Movie_Title: {
        type: String,
        required: true,
        minlength: 3,
    },

    Description:{
        type:String,
        required:true,
        minlength: 3,
    },

    Release_Year:{
        type:Number,
        required:true,
        min:3,
    },

    Genre: {
        type: [String],
        required: true,
        
    },

    Rating:{
        type:Number,
        required:true,
        enum:[0, 1, 2, 3, 4, 5]
    },

    Review:{
        type: [String],
        
    },

    Watched:{
        type: Boolean,
        default: false 
    }
})

const movieModel = new mongoose.model('movies', movieSchema);
export default movieModel;