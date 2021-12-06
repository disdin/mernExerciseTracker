import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const url='';

const Exercise = (props) => 
  (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="/" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td>
    </tr>
  );


const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  
  const getExercises=async()=>{
     try{
      const response=await fetch(`${url}/exercises`);
      setExercises(await response.json())
     }
     catch(err){
        console.log(err);
     }
  }
  
  useEffect(() => {
    getExercises();
    // axios
    //   .get("http://localhost:5000/exercises/")
    //   .then((response) => {
    //     //   console.log(response.data);
    //     setExercises(response.data );
    //   })
    //   .catch((err) => console.log(err));
  },[]);
  const deleteExercise = (id) => {
    axios.delete(`${url}/exercises/` + id).then((response) => {
      console.log(response.data);
    });
    setExercises(exercises.filter((ex) => ex._id !== id));
  };
  const exerciseList = () => {
    return (exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={deleteExercise}
          key={currentexercise._id}
        />
      );
    })
    )
  };
  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration (minutes)</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
};
export default ExerciseList;
