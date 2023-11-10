export default eventHandler(() => {
  return useDB().select().from(tables.comments).all()
})