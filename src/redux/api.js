import superagent from "superagent";
import { APP_API } from "../../settings";


 let URI = {
  band_uri:'bands.json',
  concert_uri:'concerts.json'
}
  
const ajaxCall = (uri) => {
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

const getBands = ()=>{
  const uri = `${URI.band_uri}`;
   return ajaxCall( uri );
 }

 const getConcerts = (bandIds)=>{
  const uri = `${URI.concert_uri}`;
   return ajaxCall( uri );
 }
 
export {  getBands, getConcerts };

export default ajaxCall;
