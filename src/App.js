import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Books from './components/BookDetails';
import Categories from './components/Categories';

function App() {
  return (
    <div className="books_container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
