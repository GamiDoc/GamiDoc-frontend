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
          // audience: process.env.AUTH0_ISSUER_BASE_URL + "/api/v2", //'https://' + process.env.BACK_ENDPOINT,
          audience: process.env.AUDIENCE,
          scope: 'openid profile email read:user_app_metadata update:users_app_metadata  read:users update:users'
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
