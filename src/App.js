// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { CaseStuides } from './pages/casestudies/CaseStuides';
import { AIDevelopment } from './pages/service/AIdevelopment/AIDevelopment';
import { Navbar } from './base/Navbar';
import { Footer } from './base/Footer';


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/casestudies' element={<CaseStuides/>}/>
        <Route path='/aidevelopment' element={<AIDevelopment/>}/>
      </Routes> 
    {/* <Footer/>       */}
   </>        
  );
}

export default App;
