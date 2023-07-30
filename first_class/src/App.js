import './App.css';
import Card from './components/cad.js'

function App() {
  var message = "Hi its my first application"

  var cards= [
    {
      id : 1,
      title: "First card",
      description: "First card description"
    },
    {
      id : 2,
      title: "second card",
      description: "second card description"
    },
    {
      id : 3,
      title: "Third card",
      description: "Third card description"
    },
    {
      id : 4,
      title: "Fourth card",
      description: "Fourth card description"
    }
  ]
  return (
      <>
      <h1 className='heading'>Hello its me waleed</h1>
      <p>{message}</p>
      <button style={{backgroundColor:"olive"}}>Click me</button><br/>
      {cards.map((card) => <Card key = {card.id} title ={card.title} description={card.description} />)}
      </>
  );
}

export default App;
