export default eventHandler(async () => {
  const quotes = await useDB().select().from(tables.quotes).all()

  return quotes
})