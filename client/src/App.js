import React from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExersise from "./components/create-exercises.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <br />
          
          <Routes>
          <Route  path="/"   element={<ExercisesList/>} ></Route>
          <Route  path="/edit/:id" element={<EditExercise/>} />
          <Route  path="/create" element={<CreateExersise/>}/>
          <Route  path="/user"  element={<CreateUser/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
