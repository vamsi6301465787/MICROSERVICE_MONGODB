
import * as mongoDB from "mongodb"

export const collections:{users?: mongoDB.Collection}={}

export async function connectToDatabase() {
    // const client:mongoDB.MongoClient=new mongoDB.MongoClient(
    //     "mongodb+srv://vamsi:vamsi4()(L@cluster0.s0tyjqp.mongodb.net/?retryWrites=true&w=majority"
   
    // )

    // await client.connect()

    // const db:mongoDB.Db=client.db("studentDetailssssss")
    
    // const users:mongoDB.Collection=db.collection("registrationsssss")

    // collections.users=users

   
            const { MongoClient, ServerApiVersion } = require('mongodb');
            const uri = "mongodb+srv://vamsi:vamsi4()(L@cluster0.s0tyjqp.mongodb.net/?retryWrites=true&w=majority";
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
            client.connect((err: any) => {
            const users = client.db("test").collection("devices");
            // perform actions on the collection object
            collections.users=users
           // client.close();
            });

}

	


