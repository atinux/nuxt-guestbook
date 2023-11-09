import { desc } from 'drizzle-orm'

export default eventHandler(async () => {
  const quotes = await useDB().select().from(tables.quotes).orderBy(desc(tables.quotes.id))

  return quotes
})