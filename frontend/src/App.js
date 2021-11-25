import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import CreatePage from './pages/CreatePage';
import ViewPage from './pages/ViewPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/view" element={<ViewPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
