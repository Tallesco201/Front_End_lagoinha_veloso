import {Route, Routes} from 'react-router-dom'
import { RegisterPage } from '../Pages/registerPage'

export const RoutesMain = () =>{
    return (
        <Routes>
        
            <Route path='/' element= {<RegisterPage/>} />
        
        </Routes>
    )
}

