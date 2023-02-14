
import * as mongoDB from "mongodb"

export const collections:{users?: mongoDB.Collection}={}

export async function connectToDatabase() {
    const client:mongoDB.MongoClient=new mongoDB.MongoClient(
        "mongodb+srv://vamsi:<password>@cluster0.s0tyjqp.mongodb.net/?retryWrites=true&w=majority"
   
    )

    await client.connect()

    const db:mongoDB.Db=client.db("studentDetails")
    
    const users:mongoDB.Collection=db.collection("registration")

    collections.users=users
}
