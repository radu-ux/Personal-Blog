import { Router } from 'react-router-dom';
import { History } from './services/History';
import { Routes } from './services/Routes';

function App() {
  return (
    <Router history={History}>
      <Routes />
    </Router>
  );
}

export default App;
 