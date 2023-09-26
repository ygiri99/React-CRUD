import { Table } from 'reactstrap';
import axios from 'axios';
import { Api_URL } from './Api_URL';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [apiData,setApiData] = useState([]);

  useEffect(() => {
    datas();
},[]);
const datas = async() => {
  try { const response = await axios.get(Api_URL);
         setApiData(response.data);
  }
  catch(error){console.log(error); }
}
  return (
    <>
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data,index) => (
              <tr key={data.id}>
              <th scope="row">{index+1}</th>
              <td> {data.name} </td>
              <td>{data.email}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}
