import 'server-only'

import { db } from "@/db/drizzle";
import { pages } from "@/db/schema";
import contentfulClient from "@/lib/contentfulClient";
import { unstable_cache } from "next/cache"; // Replaced by 'use cache' directive in new version of Next.js
import { TypeNavigationSkeleton, TypeProductSkeleton } from '@/content-types';

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// ===============================
// Fetching data from a database
// ===============================
async function getPages() {
    const data = await db.select().from(pages).orderBy(pages.order);
    return data;
}
export const getNavigation = unstable_cache(getPages, ['pages'], { revalidate: DAY, tags: ['pages'] });


// =====================================================================================
// Fetching data from Contentful (a headless CMS) using the 'contentful.js' library.
// This library is a wrapper around Contentful Delivery REST API.
// (https://github.com/contentful/contentful.js)
// =====================================================================================
export const getMainNavigation = unstable_cache(async () => {
    // Check https://github.com/contentful/contentful.js/blob/master/ADVANCED.md#link-resolution
    // for more information on "withoutUnresolvableLinks".
    const data = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeNavigationSkeleton>({
        content_type: 'navigation',
        query: 'Main navigation',
        select: ['fields'],
    });

    return data.items[0];

}, ['navigation'], { revalidate: HOUR, tags: ['navigation'] });


export const getProducts = unstable_cache(async () => {
    const data = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeProductSkeleton>({
        content_type: 'product',
    });

    return data;
}, ['products'], { revalidate: HOUR, tags: ['products'] });