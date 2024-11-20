CREATE TABLE IF NOT EXISTS "pages" (
	"title" text NOT NULL,
	"path" text NOT NULL,
	"include_in_prod" boolean DEFAULT false NOT NULL,
	CONSTRAINT "pages_title_unique" UNIQUE("title"),
	CONSTRAINT "pages_path_unique" UNIQUE("path")
);
