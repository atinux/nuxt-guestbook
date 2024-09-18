export default oauthGitHubEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        username: user.login
      }
    })
    return sendRedirect(event, '/')
  },
})