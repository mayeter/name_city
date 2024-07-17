import clientPromise from "../../../lib/mongo";

export async function GET()  {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
        return Response.json({ movies });
    } catch (e) {
        console.log(e)
    }
}

export async function POST()  {
    try {
        const client = await clientPromise;
        const db = client.db("name_city");
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
        return Response.json({ movies });
    } catch (e) {
        console.log(e)
    }
}