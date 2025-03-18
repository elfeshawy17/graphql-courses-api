import mongoose from "mongoose";
// eslint-disable-next-line no-undef
const uri = process.env.MONGO_URI;

export const dbConnection = mongoose.connect(uri).then( () => console.log("DataBase Connected Successfully") )
                                    .catch( () => console.log("DataBase is not Connected Successfully") );