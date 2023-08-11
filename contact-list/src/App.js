import Contact from "./components/contact"
import Card from "./components/addcontact"
import { useRef , useState , useEffect} from "react";
import './App.css';

const users = [
  {
    id: 1 ,
    firstname  : "Mohsin",
    lastname  : "Khan",
    phoneNumber : "03189541914",
    relation: "Best Friend",
    image:"",
    email:"mohsin@gmail.com",
  },
  {
    id: 2 ,
    firstname  : "Muhammad Islam",
    lastname  : "Kamran",
    phoneNumber : "03189541914",
    relation: "Team Lead",
    image:"",
    email:"islam@gmail.com",
  },
  {
    id: 3 ,
    firstname  : "Umair",
    lastname  : "Syed",
    phoneNumber : "03189541914",
    relation: "Mentor",
    image:"",
    email:"umair@gmail.com",
  },
  {
    id: 1 ,
    firstname  : "Bilal",
    lastname  : "Khan",
    phoneNumber : "03189541914",
    relation: "Team member",
    image:"",
    email:"Bilal@gmail.com",
  },
]

function App() {

const [contacts , setContacts] = useState(users)
const[query, setQuery] = useState("");
const [searcherror , setsearcherror] = useState(null)
const firstNameRef = useRef(); 
const lastNameRef = useRef(); 
const emailRef = useRef(); 
const phoneNumberRef = useRef(); 
const relationRef = useRef(); 
const imageRef = useRef();

function addingcontact(event){
  event.preventDefault();
  console.log(event)
  const newContact = {
    firstname: firstNameRef.current.value,
    lastname: lastNameRef.current.value,
    email: emailRef.current.value,
    phoneNumber: phoneNumberRef.current.value,
    relation: relationRef.current.value,
    image: imageRef?.current?.value
  }
  setContacts([...contacts ,newContact])
  firstNameRef.current.value = "";
  lastNameRef.current.value = "";
  emailRef.current.value="";
  phoneNumberRef.current.value = "";
  relationRef.current.value = "";
  imageRef.current.value="";
}

function searchQuery(){
  if(query.length < 3){
    setsearcherror("Seach query must be at least 3 characters")
  }
  else {
    setsearcherror(null)
    setContacts(contacts.filter((user)=> user.firstname.includes(query)))
  }
}
function setQueryevent(event){
  setQuery(event.target.value)
  if(event.target.value.length >= 3){
    setsearcherror("")
}
}

useEffect(() => {
  const storedContacts = localStorage.getItem('contacts');
  if (storedContacts) {
    setContacts(JSON.parse(storedContacts));
  }
}, []);

// Save contacts to localStorage whenever they change
useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

console.log(contacts);

  return (
    <>

     <div className="app">
      <h1>Contact Manager</h1>
      
      <Card className={"w-50"}>
        <h3>Add a new Contact</h3>
        <form onSubmit={addingcontact}>
          <div>
            <label>firstname</label>
            <input
              type={"text"}
              placeholder="Firstname"
              ref={firstNameRef}
            />
          </div>
          <div >
            <label>lastname</label>
            <input
              type={"text"}
              placeholder="Lastname"
              ref={lastNameRef}
            />
          </div>
          <div>
            <label>phoneNumber</label>
            <input
              type={"number"}
              placeholder="Phone Number"
              ref={phoneNumberRef}
            />
          </div>
          <div >
            <label>Relation</label>
            <input
              type={"text"}
              placeholder="Relation"
              ref={relationRef}
            />
          </div>
          <div >
            <label>Email</label>
            <input
              type={"text"}
              placeholder="email"
              ref={emailRef}
            />
          </div>
          <div >
            <label>Add image</label>
            <input
              type={"text"}
              placeholder="addimage"
              ref={imageRef}
            />
          </div>
          <button type="submit">
            Add Contact
          </button>
        </form>
      </Card>
      <Card className="w-50 mt-3 ">
      <input type='text' placeholder='Search user' className={searcherror ? "input-error" : ""} onChange={setQueryevent}/>
      <button className='btn-custom' onClick={searchQuery}>Search</button>
      {searcherror? <div style={{color: "red"}}>{searcherror}</div> : ""}
    </Card>
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </div>
    </div>

    </>
  );
}

export default App;
