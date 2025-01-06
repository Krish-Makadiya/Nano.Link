import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const shortUrl = `${process.env.NEXT_PUBLIC_HOST}/${
        (await params).shortUrl
    }`;

    const client = await clientPromise;
    const db = client.db("NanoLink");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shortUrl: shortUrl });

    if (doc) {
        redirect(doc.url);
    }

    return <div>URL not found</div>;
}
