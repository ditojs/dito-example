export default {
  app: {
    helmet: {
      // Admin doesn't work in dev mode with the default helmet v4 CSP settings:
      contentSecurityPolicy: false
    }
  }
}
