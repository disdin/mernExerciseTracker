import React,{ useState ,useEffect}  from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { useLocation } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";


const url='';

const EditExercise=()=>{
    const [username, setUserName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users,setUsers]= useState([]);

    const editid = useLocation().pathname.slice(6,);
    console.log(editid);

    useEffect(() => {
        
        axios.get(`${url}/exercises/`+editid)
            .then(res=>{
                setUserName(res.data.username);
                setDescription(res.data.description);
                setDuration(res.data.duration);
                
            })
            .catch(err=>console.log(err));

        axios.get(`${url}/users/`)
        .then(response => {
            if (response.data.length > 0) {
                setUsers(response.data.map(user => user.username)) 
            }
        })
        .catch((error) => {
            console.log(error);
        })
    },[editid])

    const onSubmit=(e)=>{
        e.preventDefault();
        
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }
        console.log(exercise);
        axios.post(`${url}/exercises/update/`+editid,exercise)
            .then(res=>console.log(res.data))
            .catch(err=> console.log(err));
        window.location= '/';

    }
    return(
        <div style={{"margin":"0px 20px"}}>
            <h3>Edit exercise log</h3>
            <form onSubmit={onSubmit} >
                <div className="form-group">
                    <label>Username: </label>
                    <select
                        required
                        className="form-control"
                        value={username}
                        onChange={(e)=>setUserName(e.target.value)}>
                        {
                            users.map(function(user) {
                            return <option 
                                key={user}
                                value={user}>{user}
                                </option>;
                            })
                        }
                    </select>
                </div>
                
                
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                    </div>
                
                
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={duration}
                        onChange={(e)=>setDuration(e.target.value)}
                        />
                </div>
                
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={date}
                        onChange={(date)=>setDate(date)}
                        />
                    </div>
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                </div>


            </form>
        </div>
    )
}
export default EditExercise;