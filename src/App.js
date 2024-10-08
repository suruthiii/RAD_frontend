import "./index.css";
import AddStudent from "./components/Add_Student";
import All_students from "./components/All_students";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Update_student from "./components/Update_students";
import AddLecturer from "./components/Add_Lecturer";
import All_lecturers from "./components/All_lecturers";
import Update_lecturers from "./components/Update_lecturers";
import AddInstructor from "./components/Add_Instructor";
import All_instructors from "./components/All_instructors";
import Update_instructor from "./components/Update_instructors";
import AddNonacademicstaff from "./components/Add_Nonacademicstaff";
import All_nonacademicstaff from "./components/All_nonacademicstaff";
import Update_nonacademicstaff from "./components/Update_nonacademicstaff";
import AddCleaningstaff from "./components/Add_Cleaningstaff";
import All_cleaningstaff from "./components/All_cleaningstaff";
import Update_cleaningstaff from "./components/Update_cleaningstaff";
import Login from "./components/Login";
import Signup from "./components/Signup";
import View_signup from "./components/View_signup";
import { useEffect, useState } from "react";
import AddCourse from "./components/Add_Course";
import All_course from "./components/All_courses";
import Update_course from "./components/Update_courses";
import Addannouncement from "./components/Add_Announcement";
import All_announcement from "./components/All_announcement";
import Update_announcement from "./components/Update_announcement";
import Addissue from "./components/Add_issue";
import All_issue from "./components/All_issues";
import Update_issue from "./components/Update_issue";
import View_anno_stu from "./components/View_anno_stu";
import Addassignment from "./components/Add_Assignment";
import All_assignment from "./components/All_assignments";
import Upduedate_assignment from "./components/Update_assignment";
import View_course_stu from "./components/View_course_stu";
import View_Assignment_stu from "./components/View_Assignment_stu";
import Admin from "./components/Admin";
import Lecturer from "./components/Lecturer";
import Instructor from "./components/Instructor";
import Non_aca from "./components/Non_aca";
import Student from "./components/Student";
import Clean_s from "./components/Clean_s";
import Addsubmition from "./components/Add_submition";
import All_submition from "./components/All_submition";
import Update_submition from "./components/Update_submition";
import View_submition_lec from "./components/View_submition_lec";
import ViewCourse_Lec from "./components/ViewCourse";
import ViewAssignment_Lec from "./components/ViewAssignment";

import Home from "./pages/Student/Home";
import ViewCourses from "./pages/Student/Course/ViewAllCourses";
import ViewCourse from "./pages/Student/Course/ViewCourse";
import ViewAllAnnouncements from "./pages/Student/Announcement/ViewAllAnnouncements";
import ViewAllSubmissions from "./pages/Student/Submission/ViewAllSubmitions";
import AddSubmission from "./pages/Student/Submission/AddSubmission";
import UpdateSubmition from "./pages/Student/Submission/UpdateSubmission";
import ViewAllInstructors from "./pages/Student/Instructor/ViewAllInstructors";
import ViewAllLecturers from "./pages/Student/Lecturer/ViewAllLecturers";
import ViewAllAssignments from "./pages/Student/Assignment/ViewAllAssignments";
import ViewAssignment from "./pages/Student/Assignment/ViewAssignment";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedIn_lec, setLoggedIn_lec] = useState(false);
  const [loggedIn_ins, setLoggedIn_ins] = useState(false);
  const [loggedIn_nona, setLoggedIn_nona] = useState(false);
  const [loggedIn_stu, setLoggedIn_stu] = useState(false);
  const [loggedIn_clean, setLoggedIn_clean] = useState(false);

  const handleLogin = (username, password) => {
    // Admin login
    if (username === "ruchith") {
      if (password === "21001766") {
        setLoggedIn(true);
      } else {
        alert("Invalid password. Please try again.");
      }
    } else if (username === "nethmi") {
      if (password === "21000131") {
        setLoggedIn(true);
      } else {
        alert("Invalid password. Please try again.");
      }
    } else if (username === "praveena") {
      if (password === "21001669") {
        setLoggedIn(true);
      } else {
        alert("Invalid password. Please try again.");
      }
    } else if (username === "sandani") {
      if (password === "21000743") {
        setLoggedIn(true);
      } else {
        alert("Invalid password. Please try again.");
      }
    } else if (username === "dasun") {
      if (password === "dasun123") {
        setLoggedIn(true);
      } else {
        alert("Invalid password. Please try again.");
      }
    }

    // Lecturer login
    else if (username === "pasindu") {
      if (password === "123") {
        setLoggedIn_lec(true);
      } else {
        alert("Invalid password. Please try again.");
      }
    }

    // Instructor login
    else if (username === "amal") {
      if (password === "789") {
        setLoggedIn_ins(true);
      } else {
        alert("Invalid password. Please try again.");
      }
    }

    // Non Acadamic Staff Login
    else if (username === "kumara") {
      if (password === "456") {
        setLoggedIn_nona(true);
      } else {
        alert("Invalid password. Please try again.");
      }
    }

    // Student Login
    else if (username === "suruthi") {
      if (password === "21001172") {
        setLoggedIn_stu(true);
      } else {
        alert("Invalid password. Please try again.");
      }
    }

    // Cleaning Staff Login
    else if (username === "kamala") {
      if (password === "222") {
        setLoggedIn_clean(true);
      } else {
        alert("Invalid password. Please try again.");
      }
    } else {
      alert("Invalid username. Please try again.");
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn_stu ? <Home /> : <Login handleLogin={handleLogin} />
            }
          />

          <Route path="/signup" element={<Signup />} />

          {/* -------------------------------- Admin -------------------------------- */}

          {/* --------------- Student --------------- */}
          <Route
            path="/add_student"
            element={
              loggedIn ? <AddStudent /> : <Login handleLogin={handleLogin} />
            }
          />

          <Route
            path="/view_students"
            element={
              loggedIn ? <All_students /> : <Login handleLogin={handleLogin} />
            }
          />

          <Route
            path="/update_student/:id"
            element={
              loggedIn ? (
                <Update_student />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          {/* --------------- Lecturer --------------- */}
          <Route
            path="/add_lecturer"
            element={
              loggedIn ? <AddLecturer /> : <Login handleLogin={handleLogin} />
            }
          />

          <Route
            path="/view_lecturers"
            element={
              loggedIn ? <All_lecturers /> : <Login handleLogin={handleLogin} />
            }
          />

          <Route
            path="/update_lecturer/:id"
            element={
              loggedIn ? (
                <Update_lecturers />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          {/* --------------- Instructor --------------- */}
          <Route
            path="/add_instructor"
            element={
              loggedIn ? <AddInstructor /> : <Login handleLogin={handleLogin} />
            }
          />

          <Route
            path="/view_instructors"
            element={
              loggedIn ? (
                <All_instructors />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/update_instructor/:id"
            element={
              loggedIn ? (
                <Update_instructor />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          {/* --------------- Non Acedamic --------------- */}
          <Route
            path="/add_nonacademicstaff"
            element={
              loggedIn ? (
                <AddNonacademicstaff />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/view_nonacademicstaff"
            element={
              loggedIn ? (
                <All_nonacademicstaff />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/update_nonacademicstaff/:id"
            element={
              loggedIn ? (
                <Update_nonacademicstaff />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          {/* --------------- Cleaning --------------- */}
          <Route
            path="/add_cleaningstaff"
            element={
              loggedIn ? (
                <AddCleaningstaff />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/view_cleaningstaff"
            element={
              loggedIn ? (
                <All_cleaningstaff />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/update_cleaningstaff/:id"
            element={
              loggedIn ? (
                <Update_cleaningstaff />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/view_signup"
            element={
              loggedIn ? <View_signup /> : <Login handleLogin={handleLogin} />
            }
          />

          <Route
            path="/admin"
            element={loggedIn ? <Admin /> : <Login handleLogin={handleLogin} />}
          />

          {/* -------------------------------- Lecturer -------------------------------- */}
          <Route
            path="/add_course"
            element={
              loggedIn_lec || loggedIn ? (
                <AddCourse />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/view_courses"
            element={
              loggedIn_lec || loggedIn ? (
                <All_course />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/update_course/:id"
            element={
              loggedIn_lec || loggedIn ? (
                <Update_course />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/lecturer/viewCourse/:id"
            element={
              loggedIn_lec || loggedIn ? (
                <ViewCourse />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/add_announcement"
            element={
              loggedIn_lec || loggedIn || loggedIn_ins || loggedIn_nona ? (
                <Addannouncement />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/view_announcements"
            element={
              loggedIn_lec || loggedIn || loggedIn_ins || loggedIn_nona ? (
                <All_announcement />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/update_announcement/:id"
            element={
              loggedIn_lec || loggedIn || loggedIn_ins || loggedIn_nona ? (
                <Update_announcement />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/add_assignment"
            element={
              loggedIn || loggedIn_lec || loggedIn_ins ? (
                <Addassignment />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/lecturer/view_assignments"
            element={
              loggedIn || loggedIn_lec || loggedIn_ins ? (
                <All_assignment />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/lecturer/viewAssignment/:id"
            element={
              loggedIn_lec || loggedIn ? (
                <ViewAssignment_Lec />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/update_assignment/:id"
            element={
              loggedIn || loggedIn_lec || loggedIn_ins ? (
                <Upduedate_assignment />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/lecturer"
            element={
              loggedIn_lec ? <Lecturer /> : <Login handleLogin={handleLogin} />
            }
          />

          {/* -------------------------------- Student -------------------------------- */}
          <Route
            path="/ViewCourses"
            element={
              loggedIn_stu ? (
                <ViewCourses />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/ViewCourse/:id"
            element={
              loggedIn_stu ? (
                <ViewCourse />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/ViewAnnouncements"
            element={
              loggedIn_stu ? (
                <ViewAllAnnouncements />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/ViewSubmissions"
            element={
              loggedIn_stu ? (
                <ViewAllSubmissions />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/AddAubmission"
            element={
              loggedIn_stu ? (
                <AddSubmission />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/UpdateSubmission/:id"
            element={
              loggedIn_stu ? (
                <UpdateSubmition />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/ViewInstructors"
            element={
              loggedIn_stu ? (
                <ViewAllInstructors />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/ViewLecturers"
            element={
              loggedIn_stu ? (
                <ViewAllLecturers />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/ViewAssignments"
            element={
              loggedIn_stu ? (
                <ViewAllAssignments />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/ViewAssignment/:id"
            element={
              loggedIn_stu ? (
                <ViewAssignment />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          {/* -------------------------------- Instructor -------------------------------- */}
          <Route
            path="/instructor"
            element={
              loggedIn_ins ? (
                <Instructor />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          {/* -------------------------------- Non Acedamic -------------------------------- */}
          <Route
            path="/nonacc"
            element={
              loggedIn_nona ? <Non_aca /> : <Login handleLogin={handleLogin} />
            }
          />

          <Route
            path="/add_issue"
            element={
              loggedIn || loggedIn_nona ? (
                <Addissue />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/view_issues"
            element={
              loggedIn || loggedIn_nona ? (
                <All_issue />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/update_issue/:id"
            element={
              loggedIn || loggedIn_nona ? (
                <Update_issue />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />

          {/* -------------------------------- Cleaning -------------------------------- */}
          <Route
            path="/cleans"
            element={
              loggedIn_clean ? <Clean_s /> : <Login handleLogin={handleLogin} />
            }
          />

          {/* -------------------------------- Instructor -------------------------------- */}
          <Route
            path="/view_submition_lec"
            element={
              loggedIn || loggedIn_lec || loggedIn_ins ? (
                <View_submition_lec />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
