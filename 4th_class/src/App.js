import { useState , useRef} from 'react';
import './App.css'
import Card from './components/Card'
import LeaderCard from './components/leadercard';

const users = [
  {
    id: 1 ,
    name  : "Mohsin",
    description : "Mern Stack",
    points: 34,
    image:""
  },
  {
    id: 2,
    name  : "Waleed",
    description : "Mern Stack",
    points: 39,
    image:""
  },
  {
    id: 3 ,
    name  : "Islam Bhai",
    description : "Python",
    points: 31,
    image:""
  },
  {
    id: 4 ,
    name  : "Umair Sir",
    description : "Senior Software Engineer",
    points: 349,
    image:""
  }
]

function App() {

  const[query, setQuery] = useState("");
  const [searcherror , setsearcherror] = useState(null)
  const [userArray , setuserArray] = useState(users)

  const nameref = useRef()
  const descriptionref = useRef()
  const pointref = useRef()
  
  function searchQuery(){
    if(query.length < 3){
      setsearcherror("Seach query must be at least 3 characters")
    }
    else {
      setsearcherror(null)
      setuserArray(userArray.filter((user)=> user.name.includes(query)))
    }
  }
  function setQueryevent(event){
    setQuery(event.target.value)
    if(event.target.value.length >= 3){
      setsearcherror("")
  }
  }
  function addinguser(event){
    event.preventDefault()
    if(
      nameref.current.value &&
      descriptionref.current.value &&
      pointref.current.value
    ){
      setuserArray([
        {
          id : userArray.length+1,
          name: nameref.current.value,
          description: descriptionref.current.value,
          points: pointref.current.value
        },
        ...userArray
      ]);
      nameref.current.value = ""
      descriptionref.current.value = ""
      pointref.current.value = ""
    }
  }

  return (
    <>
    <h1 style={{textAlign:"center"}}>Leader Board</h1>
    <Card className={"w-50"}>
        <h3>Add a new User</h3>
        <form onSubmit={addinguser}>
          <div className="mt-3">
            <label>Name</label>
            <input
              type={"text"}
              placeholder="Enter Name of the User"
              ref={nameref}
            />
          </div>
          <div className="mt-3">
            <label>Description</label>
            <input
              type={"text"}
              placeholder="Enter Description of the User"
              ref={descriptionref}
            />
          </div>
          <div className="mt-3">
            <label>Points</label>
            <input
              type={"number"}
              placeholder="Enter Points of the User"
              ref={pointref}
            />
          </div>
          <button className="btn-custom mt-3" type="submit">
            Add User
          </button>
        </form>
      </Card>
    <Card className="w-50 mt-3 ">
      <input type='text' placeholder='Search user' className={searcherror ? "input-error" : ""} onChange={setQueryevent}/>
      <button className='btn-custom' onClick={searchQuery}>Search</button>
      {searcherror? <div style={{color: "red"}}>{searcherror}</div> : ""}
    </Card>
    <Card className = "w-50 mt-3">
      {userArray.length ? userArray.map(function(user){
        return <LeaderCard key={user.id} name = {user.name} description={user.description} img={user.image} points={user.points}/>
      }): <div>No Records Found</div>}
    </Card>
    </>
  );
}

export default App;
