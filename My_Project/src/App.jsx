
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import Listview from './listview';
import DetailView from './detailview';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/listview" element={<Listview/>} />
        <Route path="/post/:id" element={<DetailView/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;