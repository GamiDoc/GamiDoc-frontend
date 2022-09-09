require('dotenv').config()
import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0';

const afterCallback = async (req, res, session, state) => {
//  console.log(session);
  return session;
}

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          audience: 'http://localhost:5000',// + process.env.BACK_ENDPOINT,
          scope: 'openid profile email read:messages'
        },
        returnTo: "/api/firstConfig"
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  }
});
