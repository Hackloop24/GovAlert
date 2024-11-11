import React from 'react'
import Home from './Pages/Home'
import Signin from './Pages/signin';
import Signup from './Pages/signup';
import Submain from './Pages/submain';
import Track from './Pages/track';
import Report from './Pages/report';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/report' element={<Report/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/submain' element={<Submain/>}/>
<Route path='/track' element={<Track/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
