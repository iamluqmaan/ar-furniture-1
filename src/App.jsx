import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './component/home';
import Model from './component/xr-gallery/XrGalleryContainer'
import XrSpace from './component/xr-gallery/XrSpace'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chair1' element={<Model comp='chair1'/>}/>
        <Route path='/table1' element={<Model comp='table1'/>}/>
        <Route path='/table2' element={<Model comp='table2'/>}/>
        <Route path='/sofa1' element={<Model comp='sofa1'/>}/>
        <Route path='/lamp1' element={<Model comp='lamp1'/>}/>
        <Route path='/xr' element={<XrSpace/>}/>
      </Routes>
    </>
  )
}

export default App
