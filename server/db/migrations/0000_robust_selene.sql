CREATE TABLE `quotes` (
	`id` integer PRIMARY KEY NOT NULL,
	`author` text NOT NULL,
	`body` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `quotes_author_unique` ON `quotes` (`author`);