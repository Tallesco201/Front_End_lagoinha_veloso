import { createContext,  useState } from "react";
import { api, apiSheetDb } from "../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../schemas/schemas";
import { GoogleSpreadsheet } from 'google-spreadsheet';




export const NewMemberContext = createContext({})

export function  NewMemberContextProviders ({children}){

    const [isAddressFilled, setAddressFilled] = useState(false);
    const [isSingle, setIsSingle] = useState(false);
    const [isBaptized, setIsBaptized] = useState(false);

    const {register, handleSubmit, setValue, setFocus,formState:{errors}} = useForm({resolver:yupResolver(schemaRegister)})

    async function autoCompleteAddress(data){
        if (!data.target.value){
            return
        }
        const cep = data.target.value.replace(/\D/g, '');
        console.log(cep)

        await api.get(`${cep}/json/`)
        .then((response) =>{ 
            console.log(response.data)
            setValue('nameStreet', response.data.logradouro)
            setValue('neighborhood', response.data.bairro)
            setValue('city', response.data.localidade)
            setValue('state', response.data.uf)
            setAddressFilled(true)
            setFocus('numberStreet')
      
        })
        .catch((error) => console.log(error))
    }

    function desableOptions (data){
        const value = data.target.value
        const singleStatuses = ["solteiro", "divorciado", "viuvo", "separadoJudicialmente"];

        if(singleStatuses.includes(value)){
            setValue('spousesName', "sem nome");
            setValue('weddingDate', "xx/xx/xxxx")
            setValue("")
            setIsSingle(true);
        }
        else{
            setIsSingle(false)
        }
    }

    function disableOptionsBaptized (data){
        if (data.target.value === "nao"){
            setValue('dateOfBaptism', "Não foi batizado")
            setValue('nameChurchOfBaptism', "Não tem igreja de batismo")
            setIsBaptized(true)
        }
        else{
            setIsBaptized(false)
        }
    }


    
    //metodo axios sheetDB

    const viewObject = async (data) => {
        await apiSheetDb.post("?sheet=page2", {
            data:[data]
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
    } 
    
    
    
    
    
    
    return (
        <NewMemberContext.Provider
        value={{
                autoCompleteAddress,
                register,
                handleSubmit,
                errors,
                desableOptions,
                disableOptionsBaptized,
                viewObject,
                isAddressFilled,
                isSingle, 
                isBaptized,
            }}
        >
            {children}
        </NewMemberContext.Provider>
    )
}

//metodo fetch api noCodeApi

/*     const viewObject = async (data) => {
    console.log(data)
    const response = await fetch('https://v1.nocodeapi.com/talles/google_sheets/tYYTktKRVPsGTeto/addRows?tabId=page1', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([data]) // Envia o objeto de dados como um array de objetos
    });
    console.log(response);
} */



//metodo fecth api sheetDB

/* const viewObject = async (data) => {
    console.log(data)
    const response = await fetch('https://sheetdb.io/api/v1/to75nnr9j5812', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            "data": [data] // Envia o objeto de dados como um array de objetos
        })
    });
    console.log(response);
} */

            /*    async function appendSpreadsheet(data) {
                   // ID da sua planilha do Google Sheets
                   const doc = new GoogleSpreadsheet('1xTnIFm5LQE6baXMkpP745SGj9mGarf_fS24tFfbKUo4');
           
                 
                   await doc.useServiceAccountAuth({
                     client_email: process.env.REACT_APP_CLIENT_EMAIL,
                     private_key: process.env.REACT_APP_PRIVATE_KEY,
                   });
                 
                   await doc.loadInfo(); // Carrega informações da planilha
                 
                   const sheet = doc.sheetsByIndex[0]; // Seleciona a primeira aba
                 
                   const newRow = await sheet.addRow(data); // Adiciona uma nova linha com os dados do formulário
                 }
                 
                 // Sua função viewObject
                 function viewObject(data) {
                   console.log(data);
                   appendSpreadsheet(data); // Chama a função para adicionar os dados à planilha
                 } */
               