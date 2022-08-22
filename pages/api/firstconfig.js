import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';

export default async function firstConfig(req, res) {
  const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

  const { accessToken } = await getAccessToken(req, res);

  const resp = await axios.get(url + "/routes/user/checkProfile", { // API endpoint per il checkprofile
    headers: {
      'Authorization': "Bearer " + accessToken
    }
  }).catch(err => {
    res.status(500).json(err);
  })
  if (!resp) return res;
  if (resp.data?.status == true) {
    // ti riporta alla homepage 
    res.writeHead(302, {
      Location: '/'
    })
    res.end();
  } else {
    // ti porta alla pagina di firstConfig per l'account 
    res.writeHead(302, {
      // da fare un form che manda la richiesta al back con le informazioni per l'utente
      Location: '/firstConfig'
    })
    res.end();
  }
}
