
import { FormNewMemberComponent } from "../Components/FormRegisterNewMember/form.new.member"
import { HeaderComponent } from "../Components/Header/header.components"
import { Main } from "./registerPage.style"

export const RegisterPage = ()=>{
    return (
        <>
            <HeaderComponent/>
            <Main>
               <FormNewMemberComponent/>
            </Main>
    
    
       
        </>
    )
}