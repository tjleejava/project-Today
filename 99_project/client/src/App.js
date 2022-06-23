import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import Menus2 from './pages/Menus2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/>} >
          <Route index element={ <Main/> } />
          <Route path="menus" element={ <Menus/>} />
          <Route path="menus2" element={ <Menus2/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
