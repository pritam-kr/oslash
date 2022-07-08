import { Routes, Route } from 'react-router-dom';
import './App.css';
import Booking from './pages/booking/Booking';
import Home from './pages/home/Home';
import Ticket from './pages/ticket/Ticket';
 


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Ticket />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
