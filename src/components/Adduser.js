import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { addData } from "./apis/Userapi";

export default function Adduser() {
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [course, setCoures] = useState('');
    const [mark, setMark] = useState(undefined);
    const [percent, setPercent] = useState('');
    const navigate = useNavigate();
    
    const postData = async() => {
        if(checked){
        try { await addData({name,email,course,mark,percent})}
        catch(error) {console.log(error)}
        navigate('/user');
        } else {
            alert("tick the agree box");
        }
    }
   
    useEffect(() => {
        if(mark){
        let p = (parseFloat(mark)/6).toFixed(2);
        setPercent(`${p}%`);}
        else setPercent('')
    },[mark]);

    return (
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
                        defaultValue={percent}

                    />
                </div>
                <div className="col">
                    <FormGroup check className="mt-5">
                        <Input type="checkbox"checked={checked} onChange={() => setChecked(!checked)}/>
                        <Label check>
                            Agree terms and condition
                        </Label>
                    </FormGroup>
                </div>
            </FormGroup>
            <Button className='bg-danger' onClick={postData}>Submit</Button>
        </Form>
    )
}
