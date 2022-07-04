import { Outlet } from 'react-router-dom'
import './App.css';
import TopNav from './components/TopNav';

function App() {
  return (
    <>
      <TopNav />
      <div className="App">
        < Outlet />
      </div>
    </>
  );
}

export default App;
