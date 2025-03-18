import mongoose from "mongoose";

export const dbConnection = mongoose.connect("mongodb://127.0.0.1:27017/test").then( () => console.log("DataBase Connected Successfully") )
                                    .catch( () => console.log("DataBase is not Connected Successfully") );