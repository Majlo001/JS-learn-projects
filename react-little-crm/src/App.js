import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import TicketPage from './pages/TicketPage.js';
import Navbar from './components/Navbar.js';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/ticket' element={<TicketPage/>}/>
          <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
