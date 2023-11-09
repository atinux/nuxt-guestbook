import { z } from 'zod'

export default eventHandler(async (event) => {
  const { body } = await readValidatedBody(event, z.object({
    body: z.string().min(1)
  }).parse)
  const session = await requireUserSession(event)

  // List todos for the current user
  return await useDB().insert(tables.comments).values({
    author: session.user.username,
    body
  }).onConflictDoUpdate({
    target: tables.comments.author,
    set: {
      body
    }
  }).returning().get()
})