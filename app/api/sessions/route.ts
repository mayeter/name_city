import clientPromise from "../../../lib/mongo";
import crypto from "crypto";
export async function GET()  {
    try {
        const client = await clientPromise;
        const db = client.db("name_city");
        const sessionList = await db
            .collection("sessions")
            .find({})
            .toArray();
        return Response.json({ sessionList });
    } catch (e) {
        console.log(e)
    }
}

export async function POST()  {
    try {
        const crypto = require('crypto');

        const new_session_id = crypto.randomBytes(16).toString('base64');
        const client = await clientPromise;
        const db = client.db("name_city");
        const insertOneResult = await db
            .collection("sessions")
            .insertOne({"id": new_session_id})
        console.log("insert result: ", insertOneResult)

        const newCollection =   await db.createCollection(new_session_id)
        console.log("new collection: ", newCollection)
        return Response.json({ "session id" : new_session_id });
    } catch (e) {
        console.log(e)
    }
}