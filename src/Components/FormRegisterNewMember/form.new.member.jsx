import { useForm } from "react-hook-form"
import { schemaRegister } from "../../schemas/schemas"
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { NewMemberContext } from "../../context/context.creationMember";
import { api } from "../../services/api";




export const FormNewMemberComponent = ()=>{

    const {register, handleSubmit, setValue, setFocus,formState:{errors}} = useForm({resolver:yupResolver(schemaRegister)})

    // const {autoCompleteAddress} = useContext(NewMemberContext)
    const [isAddressFilled, setAddressFilled] = useState(false);


    
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



 
    return (
        <>
            <form onSubmit={handleSubmit()}>


                <fieldset>
                    <div>
                        <label htmlFor="">Nome completo</label>
                        <input type="text" placeholder="Nome completo"/>   
                    </div>
                    
                    <div>
                        <label htmlFor="">Tel celular</label>
                        <input type="text" placeholder="telefone celular "/>   
                    </div>
                </fieldset>

                
                <fieldset>
                    <div>
                        <label htmlFor="">Nº do CPF </label>
                        <input type="text" placeholder="Numero do CPF"/>   
                    </div>
                    
                    <div>
                        <label htmlFor=""> Nº do RG:</label>
                        <input type="text" placeholder="Numero do RG"/>   
                    </div>
                </fieldset>
                
                <fieldset>
                    <div>
                        <label htmlFor=""> Data de Nascimento</label>
                        <input type="date" placeholder=""/>   
                    </div>
                    
                    <div>
                        <label htmlFor=""> Email</label>
                        <input type="email" placeholder="Digite o email"/>   
                    </div>
                </fieldset>
                 
                <h2>Endereço</h2>

                <fieldset>
                    <div>
                        <label htmlFor=""> CEP </label>
                        <input type="text" placeholder="Digite o CEP rua onde mora" {...register("cep")} onBlur={autoCompleteAddress}/>   
                    </div>
                    <div>
                        <label htmlFor=""> Nome da Rua</label>
                        <input type="text" placeholder="Digite o nome da rua" {...register("nameStreet")} disabled={isAddressFilled}  />   
                    </div>
                    
                    <div>
                        <label htmlFor="">Nº</label>
                        <input type="text" placeholder="numero da casa" {...register("numberStreet")} />   
                    </div>
                    <div>
                        <label htmlFor="">Bairro</label>
                        <input type="text" placeholder="nome do bairro" {...register("neighborhood")} disabled={isAddressFilled}/>   
                    </div>
                    <div>
                        <label htmlFor="">Cidade</label>
                        <input type="text" placeholder="Cidade onde mora " {...register("city")} disabled={isAddressFilled}/>   
                    </div>
                    <div>
                        <label htmlFor="">Estado</label>
                        <input type="text" placeholder="Estado onde mora " {...register("state")} disabled={isAddressFilled}/>   
                    </div>
                </fieldset>


            </form>
        </>
    )
}