import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { updateApi } from './apis/Userapi';

export default function UpdateUser() {
    const [id,setId] = useState('');
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [course, setCoures] = useState('');
    const [mark, setMark] = useState(undefined);
    const [percent, setPercent] = useState('');
    const navigate = useNavigate();
    
    const updateData = async() => {
        try{ await updateApi({id,name,email,course,mark,percent});}
        catch(error) {console.log(error)}
        navigate('/user');
    }
   
    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
        setCoures(localStorage.getItem('course'))
        setMark(localStorage.getItem('mark'))
    },[])
    useEffect(() => {
        if(mark){
        let p = (parseFloat(mark)/6).toFixed(2);
        setPercent(`${p}%`);}
        else setPercent('')
    },[mark]);
  return (
    <>
        <h3>Updating : {name}</h3>
        <Form>
            <FormGroup className="row">
                <div className="col">
                    <Label for="name">
                        name
                    </Label>
                    <Input
                        id="name"
                        name="text"
                        placeholder="Enter name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col">
                    <Label for="Email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col">
                    <Label for="name">
                        course
                    </Label>
                    <Input
                        id="course"
                        name="course"
                        type="select"
                        value={course}
                        onChange={(e) => {setCoures(e.target.value)}} >
                        <option>
                            Select
                        </option>
                        <option>
                            UX/UI designer
                        </option>
                        <option>
                            Fullstack developer
                        </option>
                        <option>
                            Data science
                        </option>
                    </Input>
                </div>
            </FormGroup>
            <FormGroup className="row">
            <div className="col">
                    <Label for="marks">
                        Totalmark
                    </Label>
                    <Input
                        id="mark"
                        name="mark"
                        type="number"
                        value={mark}
                        onChange={(e) => {
                            setMark(e.target.value)}}/>
                </div>
                <div className="col">
                    <Label for="name">
                        Percent
                    </Label>
                    <Input
                        id="percentage"
                        name="percentage"
                        type="text"
                        defaultValue={percent}/>                   
                </div>
            </FormGroup>
            <Button className='bg-primary' onClick={updateData}>Update</Button>
        </Form>
    </>
  )
}
