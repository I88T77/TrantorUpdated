// import './App.css';
import { Layout } from './layout';
// import store from "./store/store";
import { Header } from './header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Blogsite from './Blogsite';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Layout/>}/>
      <Route exact path='/blog/:id' element={<Blogsite/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
