import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Stuff } from './pages/Stuff';
import { Hats } from './pages/Hats';
import { Clothes } from './pages/Clothes';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={
                  <Home />
                }
              />
               <Route
                path='/clothes'
                element={
                  <Clothes />
                }
              />
               <Route
                path='/hats'
                element={
                  <Hats />
                }
              />
               <Route
                path='/stuff'
                element={
                  <Stuff />
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
