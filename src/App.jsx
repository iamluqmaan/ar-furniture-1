import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './component/home';
import Model from './component/xr-gallery/XrGalleryContainer'
import Test from './Ar.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/chair1' element={<Model />}/>
        <Route path='/chair2' element={<Model />}/>
        <Route path='/table1' element={<Model />}/>
        <Route path='/table2' element={<Model />}/>
        <Route path='/table3' element={<Model />}/>
        <Route path='/table4' element={<Model />}/>
        <Route path='/table5' element={<Model />}/>
        <Route path='/sofa1' element={<Model />}/>
        <Route path='/sofa2' element={<Model/>}/>
        <Route path='/sofa3' element={<Model/>}/>
        <Route path='/sofa4' element={<Model/>}/>
        <Route path='/sofa5' element={<Model/>}/>
        <Route path='/sofa6' element={<Model/>}/>
        <Route path='/sofa7' element={<Model/>}/>
        <Route path='/lamp1' element={<Model />}/>
        <Route path='/lamp2' element={<Model />}/>
        <Route path='/kitchen1' element={<Model />}/>
        <Route path='/elevator1' element={<Model />}/>
      </Routes>
    </>
  )
}

export default App
