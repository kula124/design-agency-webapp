import { db } from "@/db/drizzle";
import { pages } from "@/db/schema";
import { unstable_cache } from "next/cache"; // Replaced by 'use cache' directive in new version of Next.js

async function getPages() {
    const data = await db.select().from(pages).orderBy(pages.order);
    return data;
}

export const getNavigation = unstable_cache(getPages, ['pages'], { revalidate: 60 * 60, tags: ['pages'] });