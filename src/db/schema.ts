import { pgTable, serial, text, boolean, uuid, varchar } from 'drizzle-orm/pg-core';

export const pages = pgTable('pages', {
    id: serial('id').primaryKey(),
    title: text('title').notNull().unique(),
    path: text('path').notNull().unique(),
    includeInProd: boolean('include_in_prod').notNull().default(false),
    order: serial('order').notNull().unique()
});

export const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull()
});
