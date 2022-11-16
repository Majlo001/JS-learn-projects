import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './pages/Dashboard.js';
import TicketPage from './pages/TicketPage.js';
import Navbar from './components/Navbar.js';
import CategoriesContext from './context.js';

const App = () => {
  const [categories, setCategories] = useState(null);

  return (
    <div className="app">
      <CategoriesContext.Provider value={{categories, setCategories}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/ticket' element={<TicketPage/>}/>
            <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}/>
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
