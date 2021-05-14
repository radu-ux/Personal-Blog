import { BrowserRouter } from 'react-router-dom';
import { History } from './services/History';
import { Routes } from './services/Routes';

function App() {
  return (
    <BrowserRouter history={History}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
 