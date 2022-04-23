 const express = require("express")
 const app = express()
 const Path = require("path")
 const database = path.join(__dirname,movieData.db)

 let db = null 

 const intializeAndDatabaseSeverve = async ()=>{

    try{
        db = await open({
            filename:database,
            driver:sqlite3.database
        })
        app.listen(3000,()=>{
            console.log("server  Running at https:localhost:3000")
    })
    }catch(error){
        console.log(`DB ERROR.${error.message}`)
        process.exit(1)
    }

 }
 intializeAndDatabaseSeverve()
 
 const covertingMoviesDbObjectToResponseObject=(DbObject)=>{
     return 
     movieId:DbObject.movie_id,
     directorId:DbObject.director_id,
     movieName:DbObject.movie_name,
     leadActor:DbObject.lead_actor,
 }

 //getAPI
 app.get("/movies/",(request,response)=>{
     const getMovieName = `
     SELECT 
     * 
     FROM 
     movie`;
     const movieDate = await db.all(getMovieName)
     response.send(movieArray.map(eachMovie)=>({movieName:eachMovie.movie_name}))
 )
 })
 