import {useState , useEffect} from 'react'
import Header from "./components/Header"
import Card from "./components/Card"
import Counter from "./components/Counter"
import {ClockLoader} from "react-spinners"

function App() {
const [loading , setLoading] = useState(false)
const [posts, setPosts] = useState([])

useEffect(()=>{
  setLoading(true)
  fetch("https://jsonplaceholder.typicode.com/posts",{
  method:"GET",
  headers: {
    "Access-Control-Allow-Origin":"*"
  }
  }).then(function(data){
    return data.json();
  }).then(function(response){
    setPosts(response);
    setLoading(false)
  })
},[])

// const resut = await fetch("https://jsonplaceholder.typicode.com/posts",{
//   method:"GET",
//   Headers:{
//     "Access-Control-Allow-Origin": "*"
//   }})
// console.log(resut)
  return (
    <>
    <Header />
    <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
      {loading && <ClockLoader/>}
      <Counter/>
      {posts.length ? posts.map((post)=>{
        return <Card>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </Card>
      }): <h1>No Post Found</h1>}
    </div>
    </>
    );
}

export default App;
