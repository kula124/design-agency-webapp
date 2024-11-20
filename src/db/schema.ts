import { pgTable, text, boolean } from 'drizzle-orm/pg-core';

export const pages = pgTable('pages', {
    title: text('title').notNull().unique(),
    path: text('path').notNull().unique(),
    includeInProd: boolean('include_in_prod').notNull().default(false),
});