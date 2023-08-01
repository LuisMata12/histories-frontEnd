import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Generate } from '../pages/generate/Generate'
import { Login } from '../register/Login'
import { Register } from '../register/Register'
import { PdfView } from '../pages/pdf/Components/PdfView'
import { PDFViewer } from '@react-pdf/renderer'
import { DocumentPdf } from '../pages/pdf/Components/DocumentPdf'
import { RenderView } from '../pages/pdf/RenderView'

export const Router = () => {
  const autenticated = 'no'
  return (
    <Routes>
        {
          (autenticated==='no')
          ?<Route path='/generate' element={<Generate/>}/>
          :<Route path='/generate' element={<Navigate to='/login'/>}/>
        }
        {
          (autenticated==='no')
          ?<Route path='/pdf/:id' element={<RenderView/>}/>
          :<Route path='/pdf/:id' element={<Navigate to='/login'/>}/>
        }
        <Route path='/pdf/:id' element={<Login/>}/>
        <Route path='/login/*' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}
