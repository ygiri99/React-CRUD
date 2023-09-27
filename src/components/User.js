import { Button, Table } from 'reactstrap';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteApi, readApi } from './apis/Userapi';

export default function User() {
  const navigate = useNavigate();
  const [apiData,setApiData] = useState([]);

  const upDate = ({id,name,email,course,mark}) => {
    localStorage.setItem('id',id)
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('course',course)
    localStorage.setItem('mark',mark)
    navigate('/UpdateUser');
  }

  const del = (id,name) => {
    if(window.confirm(`Do you want to delete ${name}?`)){
      (async(id) => {
        await deleteApi(id);
        datas();
      })(id);
    } else {
      return;
    }
  }

  useEffect(() => {
    datas();
},[]);

const datas = async() => {
  try { const data =await readApi();
         setApiData(data);
  }
  catch(error){console.log(error); }
}
  return (
    <>
      <Button className='bg-success' onClick={() => navigate('/adduser')}>AddUser</Button>
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Course</th>
              <th>Mark</th>
              <th>Percent</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data,index) => (
              <tr key={data.id}>
              <th scope="row">{index+1}</th>
              <td> {data.name} </td>
              <td>{data.course}</td>
              <td> {data.mark}</td>
              <td> {data.percent}</td>
              <td><Button className= 'bg-warning' onClick={() => upDate(data)}>Edit</Button></td>
              <td><Button className='bg-danger' onClick={() => del(data.id,data.name)}>Delete</Button></td>
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}
