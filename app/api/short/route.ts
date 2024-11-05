import clientPromise from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("short-url");

  const collection = db.collection("url");

  const slugg = await collection.findOne({
    slug: body.slug,
  });

  if (slugg) {
    return NextResponse.json(
      {
        success: false,
        message: "Slug already exists",
      },
      {
        status: 409,
      }
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const res = await collection.insertOne({
    url: body.url,
    slug: body.slug,
  });

  return NextResponse.json(
    { success: true, url: `${process.env.BASE_URL}/${body.slug}` },
    { status: 201 }
  );
}
