import LogoLagoinhaVeloso from "../../image/logo_lagoinha.png"
import { Header } from "./header..style"

export const HeaderComponent = ()=>{
    return (
        <>
            <Header>
                
                    <img src={LogoLagoinhaVeloso} alt="Logo lagoinha veloso" />
                
                <nav>

                </nav>

            </Header>
        </>
    )
}