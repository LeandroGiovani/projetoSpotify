import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://dbLeandro:db191006@cluster0.5pdqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotify")