import React,{useState,useEffect} from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const url='';

function CreateExersise(){
    const [username, setUserName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users,setUsers]= useState([]);
    
    useEffect(() => {
        axios.get(`${url}/users/`)
            .then(response=>{
                if(response.data.length>0){
                    setUsers(response.data.map(user=>user.username));
                    // setUserName(response.data[0].username)
                }
        })
    })

    const onSubmit=(e)=>{
        e.preventDefault();
        
        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }
        console.log(exercise);
        axios.post(`${url}/exercises/add`,exercise)
            .then(res=>console.log(res.data))
            .catch(err=> console.log(err));
        window.location= '/';

    }
    
    return(
        // <h1>hello </h1>
        <div style={{"margin":"0px 20px"}}>
            <h3>Create new exercise log</h3>
            <form onSubmit={onSubmit} >
                <div className="form-group" >
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
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>


            </form>
        </div>
    )
}
export default CreateExersise;

// export default class CreateExersise extends React.Component{
//     constructor(props){
//         super(props);
//         this.onChangeUsername=this.onChangeUsername.bind(this);//         this.onChangeDescription = this.onChangeDescription.bind(this);//         this.onChangeDuration = this.onChangeDuration.bind(this);//         this.onChangeDate = this.onChangeDate.bind(this);//         this.onSubmit = this.onSubmit.bind(this);
        
//         this.state={
//             username:'',
//             description:'',
//             duration:10,
//             date: new Date(),
//             users:[]
//         }
//     }

//     componentDidMount(){
//         this.setState({
//             users:['test user'],
//             username:'test user'
//         })
//     }

//     onChangeUsername(e){
//         this.setState({
//             username:e.target.value
//         })
//     }
//     onChangeDescription(e){
//         this.setState({
//             Description:e.target.value
//         })
//     }
//     onChangeDuration(e){
//         this.setState({
//             Duration:e.target.value
//         })
//     }
//     onChangeDate(date){
//         this.setState({
//             date:date 
//         })
//     }
//     onSubmit(e){
//         e.preventDefault();
        
//         const exercise = {
//             username: this.state.username,
//             description: this.state.description,
//             duration: this.state.duration,
//             date: this.state.date
//         }

//         console.log(exercise);
//         // window.location= '/';
        
//     }

//     render(){
//         return(
//             <div>
//                 <h3>Create new exercise log</h3>
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Username: </label>
//                         <select ref="userInput"
//                             required
//                             className="form-control"
//                             // value={this.state.username}
//                             onChange={this.onChangeUsername}>
//                             {
//                                 this.state.users.map(function(user) {
//                                 return <option 
//                                     key={user}
//                                     value={user}>{user}
//                                     </option>;
//                                 })
//                             }
//                         </select>
//                     </div>
                    
                    
//                     <div className="form-group"> 
//                         <label>Description: </label>
//                         <input  type="text"
//                             required
//                             className="form-control"
//                             // value={this.state.description}
//                             onChange={this.onChangeDescription}
//                             />
//                      </div>
                    
                    
//                     <div className="form-group">
//                         <label>Duration (in minutes): </label>
//                         <input 
//                             type="text" 
//                             className="form-control"
//                             // value={this.state.duration}
//                             onChange={this.onChangeDuration}
//                             />
//                     </div>
                    
//                     <div className="form-group">
//                         <label>Date: </label>
//                         <div>
//                             <DatePicker
//                             selected={this.state.date}
//                             onChange={this.onChangeDate}
//                             />
//                         </div>
//                     </div>
                    
//                     <div className="form-group">
//                         <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
//                     </div>


//                 </form>
//             </div>
//         )
//     }
// }