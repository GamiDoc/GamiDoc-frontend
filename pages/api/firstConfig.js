import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';

export default async function firstConfig(req, res) {
  console.log("sono Dentro!")

  //const url =  "http://"+ process.env.BACK_ENDPOINT;
  //(process.env.SECURE ? 'https://' : 'http://')
  const { accessToken } = await getAccessToken(req, res);
  let resp
  try {
    let type = (process.env.SECURE) ? "https://" : "http://"
    resp = await axios.get(type + process.env.BACK_ENDPOINT + "/user/checkProfile", { // API endpoint per il checkprofilet
      headers: {
        'Authorization': "Bearer " + accessToken
      }
    })
  } catch (error) {
    console.error(error);
    //.response.data
  } console.log(resp)
  return new Promise((resolve, reject) => {
    if (!resp) return res;
    if (resp.data?.status == true) {
      // ti riporta alla homepage 
      res.writeHead(302, {
        Location: '/'
      })
      console.log("good")
      res.end();
    } else {
      // ti porta alla pagina di firstConfig per l'account 
      res.writeHead(302, {
        // da fare un form che manda la richiesta al back con le informazioni per l'utente
        Location: '/firstConfig'
      })
      console.log("good")
      res.end();
    }
  })
}
