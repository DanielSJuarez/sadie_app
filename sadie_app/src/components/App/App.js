import { Outlet } from 'react-router-dom'
import TopNav from '../TopNav';
import Footer from '../Footer';
import './App.css';

function App() {

  return (
    <>
      <TopNav />
      <div className="App">
         <Outlet />
      </div>
      <Footer />

    </>
  );
}

export default App;
