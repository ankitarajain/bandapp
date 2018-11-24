import superagent from "superagent";
import { APP_API } from "../../settings";


 const URI = {
  band_uri:'bands.json',
  concert_uri:'concerts.json'
}
  
const getCall = (uri) => {
  const url = `${APP_API}/${uri}`;
  return new Promise((resolve, reject) => {
    superagent
      .get(url)
      .then(res => {
        resolve(res.body);
     })
      .catch(err => {
        reject(err);
      })
  });
};
  
const postCall = (uri,data) => {
  const url = `${APP_API}/${uri}`;
  return new Promise((resolve, reject) => {
    superagent
      .post(url)
      .send(data)
      .then(res => {
        resolve(res.body);
     })
      .catch(err => {
        reject(err);
      })
  });
};
const getBands = ()=>{
  const uri = `${URI.band_uri}`;
   return getCall( uri );
 }

 const getConcerts = ()=>{
  const uri = `${URI.concert_uri}`;
   return getCall( uri );
 }

 const setFavBands = (band_ids)=>{
 const uri = `${URI.concert_uri}`;
  return postCall( uri,{band_ids} );
}

 
 
export {  getBands, getConcerts ,setFavBands };

export default getCall;
