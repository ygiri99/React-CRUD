import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readIdApi } from './apis/Userapi';


function UserDetail() {
  const [user, setUser] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getUser(id);
  },[id]);

  const getUser = async(id) => {
    try {
      const data = await readIdApi(id);
      setUser(data);
    } catch (error) { console.log(error); }
  }

  const {name, email,course,mark} = user;

  return (
    <div>
      <h2>UserDetail</h2><hr/>
      <h4>Name:    {name}</h4>
      <h4>Email:   {email}</h4>
      <h4>Course:  {course}</h4>
      <h4>Mark:    {mark}</h4>
    </div>
  )
}

export default UserDetail