export default eventHandler(async (event) => {
  await setUserSession(event, {
    user: {
      username: 'Atinux'
    }
  })
  return sendRedirect(event, '/')
})