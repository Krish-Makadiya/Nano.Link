import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json();

    const client = await clientPromise;
    const db = await client.db("NanoLink");
    const collection = await db.collection("url");

    const doc = await collection.findOne({ shortUrl: body.generatedUrl });
    if (doc) {
        return Response.json({
            success: false,
            data: "NULL",
            msg: "Short URL already exists",
        });
    }

    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.generatedUrl,
    });

    return Response.json({
        success: true,
        data: result,
        msg: "URL shortened successfully",
    });
}
