import { db } from "@/db/drizzle";
import { pages } from "@/db/schema";

export async function getData() {
    const data = await db.select().from(pages);
    return data;
}