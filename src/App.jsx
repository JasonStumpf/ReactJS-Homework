import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';
import Extra from './views/Extra';
import MyNav from './components/MyNav';

function App() {
  const linkAndy = 'https://www.google.com/'

  return (
    <>
      <MyNav />
      <Routes>
        <Route children path='/' element={<Landing />} />
        <Route children path='/extra' element={<Extra />} />
      </Routes>
      <div>
        <a href={linkAndy} target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href={linkAndy} target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn less
      </p>
    </>
  );
}

export default App;