import { createContext } from "react";
import { api } from "../services/api";
import { useForm } from "react-hook-form";

export const NewMemberContext = createContext({})

export function  NewMemberContextProviders ({children}){


     async function autoCompleteAddress(data){
        if (!data.target.value){
            return
        }
        const cep = data.target.value.replace(/\D/g, '');
        console.log(cep)

        await api.get(`${cep}/json/`)
        .then((response) =>{ 
            console.log(response.data.logradouro)
      
        })
        .catch((error) => console.log(error))

        
        
    }

    return (
        <NewMemberContext.Provider
            value={{
                autoCompleteAddress
            }}
        
        >
            {children}

        </NewMemberContext.Provider>
    )
}
