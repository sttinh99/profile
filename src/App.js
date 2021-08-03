
import { useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Profile from './components/Profile';


function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  }, 8000);
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      {loading ? <Loading /> : <Profile />}
    </div>
  );
}

export default App;
