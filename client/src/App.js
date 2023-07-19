import logo from './logo.svg';
import './App.css';
import List from './view/List';
import Product from './view/Product';
import {Routes, Route, Link} from 'react-router-dom';
import Edit from './view/Edit';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Routes>
        <Route path='/products' element={<List/>}></Route>
        <Route path='/products/:id' element={<Product/>}></Route>
        <Route path='/products/edit/:id' element={<Edit/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
