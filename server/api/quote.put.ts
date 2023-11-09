import { z } from 'zod'

export default eventHandler(async (event) => {
  const { body } = await readValidatedBody(event, z.object({
    body: z.string().min(1)
  }).parse)
  const session = await requireUserSession(event)

  // List todos for the current user
  const quote = await useDB().insert(tables.quotes).values({
    author: session.user.username,
    body,
    date: new Date()
  }).onConflictDoUpdate({
    target: tables.quotes.author,
    set: {
      body,
      date: new Date()
    }
  }).returning().get()
  
  return quote
})