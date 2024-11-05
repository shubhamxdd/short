import clientPromise from "@/utils/mongodb";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const client = await clientPromise;
  const db = client.db("short-url");
  const collection = db.collection("url");

  const slugg = await collection.findOne({
    slug,
  });

  if (slugg) {
    redirect(slugg.url);
  } else {
    redirect(process.env.BASE_URL!);
  }

  return <div>My Post: {slug}</div>;
}
