import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center h-screen w-screen">
      <div className="text-2xl hover-scale w-max m-auto cursor-pointer">Create</div>
      <div className="text-2xl hover-scale w-max m-auto cursor-pointer">View</div>
    </div>
  );
}

export default App;
