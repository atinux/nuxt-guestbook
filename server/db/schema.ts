import { sqliteTable, text, integer, unique } from 'drizzle-orm/sqlite-core'

export const comments = sqliteTable('comments', {
  id: integer('id').primaryKey(),
  author: text('author').notNull(),
  body: text('body').notNull()
}, (t) => ({
  authorIdx: unique().on(t.author)
}))
