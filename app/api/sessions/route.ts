import clientPromise from "../../../lib/mongo";
import crypto from "crypto";
import {ISession} from "@/lib/types";
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
        const new_session_id = crypto.randomBytes(16).toString('base64');

        const new_session: ISession = {id: new_session_id, finished: false, rounds: null}

        const client = await clientPromise;
        const db = client.db("name_city");
        const insertOneResult = await db
            .collection("sessions")
            .insertOne(new_session)
        console.log("insert result: ", insertOneResult)
        return Response.json({ "session id" : new_session_id });
    } catch (e) {
        console.log(e)
    }
}