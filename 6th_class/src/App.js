import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import { Routes , Route } from "react-router"
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/> } />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/users' element={ <Users/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
