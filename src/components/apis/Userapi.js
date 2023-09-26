import {Api_URL} from '../Api_URL';
import axios from 'axios';

export async function addData({name,email,course,mark,percent}) {
  try{ await axios.post(Api_URL,{name,email,course,mark,percent});}
  catch(error) {console.log(error);}
}

export async function updateApi({id,name,email,course,mark,percent}) {
  try{ await axios.put(Api_URL+`/${id}`,{name,email,course,mark,percent});}
  catch(error) {console.log(error);}
}

export async function deleteApi(id) {
  try { await axios.delete(Api_URL+`/${id}`);}
  catch(error) {console.log(error);}
}

export async function readApi() {
  try { const response = await axios.get(Api_URL);
        return response.data;
  }
  catch(error) {console.log(error);}
}