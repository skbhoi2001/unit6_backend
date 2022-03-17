import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react"

function App() {
 const [users,setUsers] = useState([])
  useEffect(() => {
   
    fetch('http://localhost:8000/users')
    .then((r)=>r.json())
    .then((r)=>{
      console.log(r)
      setUsers(r)
    })

  }, [])
  

  return (
    <div className="App">
      <button onClick={()=>{
        fetch('http://localhost:8000/users/2',{
          method:"PUT",
          body:JSON.stringify({
            ...users[2],
            first_name:"Soumyak",
            last_name:"Bhoi"
          }),
          headers:{
            "content-type":"application/json"
          }
        })
        .then((r)=>r.json())
        .then((r)=>{
          console.log(r)
          setUsers(r)
        })
      }} >
        Add Data
      </button>
      <table>
          <thead>
            <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user=>{
                return(
                  <tr key={user._id} >
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
                )
              })
            }
          </tbody>
      </table>
    </div>
  );
}

export default App;
