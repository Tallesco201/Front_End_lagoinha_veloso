
import { useContext } from "react";
import { NewMemberContext } from "../../context/context.creationMember";
import { FormStyle } from "./formRegisterMemberStyle";




export const FormNewMemberComponent = ()=>{

    const {autoCompleteAddress,
        register,
        handleSubmit,
        errors,
        desableOptions,
        disableOptionsBaptized,
        viewObject,
        isAddressFilled,
        isSingle, 
        isBaptized, 
        
        } = useContext(NewMemberContext)
  


 
    return (
        <>
            <FormStyle onSubmit={handleSubmit(viewObject)}>
            <h1>Ficha Cadastral</h1>


                <fieldset>
                    <div>
                        <label htmlFor="">Nome completo</label>
                        <input type="text" placeholder="Nome completo" {...register("name")}/> 
                        <span>{errors.name && errors.name.message}</span>  
                    </div>
                    
                    <div>
                        <label htmlFor="">Tel celular</label>
                        <input type="text" placeholder="telefone celular " {...register("cel")}/>   
                        <span>{errors.cel && errors.cel.message}</span>  
                    </div>
                    <div>
                        <label htmlFor="">Nome da Mãe</label>
                        <input type="text" placeholder="nome da mae " {...register("nameMother")}/>   
                        <span>{errors.nameMother && errors.nameMother.message}</span>  
                    </div>
                    <div>
                        <label htmlFor="">Nome do pai </label>
                        <input type="text" placeholder="nome da mae " {...register("nameFather")}/>   
                        <span>{errors.nameFather && errors.nameFather.message}</span>  
                    </div>
                </fieldset>

                
                <fieldset>
                    <div>
                        <label htmlFor="">Nº do CPF </label>
                        <input type="text" placeholder="Numero do CPF" {...register("cpf")}/>   
                        <span>{errors.cpf && errors.cpf.message}</span>  
                    </div>
                    
                    <div>
                        <label htmlFor=""> Nº do RG:</label>
                        <input type="text" placeholder="Numero do RG"{...register("rg")}/>   
                        <span>{errors.rg && errors.rg.message}</span>  
                    </div>
                </fieldset>
                
                <fieldset>
                    <div>
                        <label htmlFor=""> Data de Nascimento</label>
                        <input type="date" placeholder="" {...register("birth")}/>
                        <span>{errors.birth && errors.birth.message}</span>     
                    </div>
                    
                    <div>
                        <label htmlFor=""> Email</label>
                        <input type="email" placeholder="Digite o email" {...register("email")}/>
                        <span>{errors.email && errors.email.message}</span>     
                    </div>
                </fieldset>
                
                 
                <h2>Endereço</h2>

                <fieldset className="containerAdress">
                    <div>
                        <label htmlFor=""> CEP </label>
                        <input type="text" placeholder="Digite o CEP rua onde mora" {...register("cep")} onBlur={autoCompleteAddress}/>   
                        <span>{errors.cep && errors.cep.message}</span>  
                    </div>
                    <div>
                        <label htmlFor=""> Nome da Rua</label>
                        <input type="text" placeholder="Digite o nome da rua" {...register("nameStreet")} disabled={isAddressFilled}  />   
                        <span>{errors.nameStreet && errors.nameStreet.message}</span>  
                    </div>
                    
                    <div>
                        <label htmlFor="">Nº</label>
                        <input type="text" placeholder="numero da casa" {...register("numberStreet")} />   
                        <span>{errors.numberStreet && errors.numberStreet.message}</span>  

                    </div>
                    <div>
                        <label htmlFor="">Bairro</label>
                        <input type="text" placeholder="nome do bairro" {...register("neighborhood")} disabled={isAddressFilled}/>   
                        <span>{errors.neighborhood && errors.neighborhood.message}</span>  

                    </div>
                    <div>
                        <label htmlFor="">Cidade</label>
                        <input type="text" placeholder="Cidade onde mora " {...register("city")} disabled={isAddressFilled}/>   
                        <span>{errors.city && errors.city.message}</span>  
                    </div>
                    <div>
                        <label htmlFor="">Estado</label>
                        <input type="text" placeholder="Estado onde mora " {...register("state")} disabled={isAddressFilled}/>   
                        <span>{errors.state && errors.state.message}</span>  
                    </div>
                    </fieldset>
                    <br></br>
                    
                    <fieldset className="containerData">
                        <div>
                            <label htmlFor="civilStatus">Estado Civil</label>
                            <select id="civilStatus" {...register("maritalStatus")} onBlur={desableOptions} >
                                <option value="">Selecione</option>
                                <option value="solteiro">Solteiro(a)</option>
                                <option value="casado">Casado(a)</option>
                                <option value="divorciado">Divorciado(a)</option>
                                <option value="viuvo">Viúvo(a)</option>
                                <option value="separadoJudicialmente">Separado(a) Judicialmente</option>
                                <option value="uniaoEstavel">União Estável</option>
                            </select>
                            <span>{errors.maritalStatus && errors.maritalStatus.message}</span>  

                        </div>
                        
                        <div>
                            <label htmlFor=""> Data do Casamento</label>
                            <input type="date" placeholder="" {...register("weddingDate")} disabled={isSingle}/>   
                            <span>{errors.weddingDate && errors.weddingDate.message}</span>  

                        </div>

                        <div>
                            <label htmlFor="">Nome do cônjuges </label>
                            <input type="text" placeholder="Nome do cônjuges " {...register("spousesName")} disabled={isSingle} />   
                            <span>{errors.spousesName && errors.spousesName.message}</span>  

                        </div>

                        <div>
                            <label htmlFor="educationLevel">Escolaridade</label>
                            <select id="educationLevel" {...register("educationLevel")}>
                                <option value="">Selecione</option>
                                <option value="ensinoFundamentalIncompleto">Ensino Fundamental Incompleto</option>
                                <option value="ensinoFundamentalCompleto">Ensino Fundamental Completo</option>
                                <option value="ensinoMedioIncompleto">Ensino Médio Incompleto</option>
                                <option value="ensinoMedioCompleto">Ensino Médio Completo</option>
                                <option value="ensinoTecnicoIncompleto">Ensino Técnico Incompleto</option>
                                <option value="ensinoTecnicoCompleto">Ensino Técnico Completo</option>
                                <option value="tecnologoIncompleto">Tecnólogo Incompleto</option>
                                <option value="tecnologoCompleto">Tecnólogo Completo</option>
                                <option value="ensinoSuperiorIncompleto">Ensino Superior Incompleto</option>
                                <option value="ensinoSuperiorCompleto">Ensino Superior Completo</option>
                                <option value="posGraduacao">Pós-graduação</option>
                                <option value="mestrado">Mestrado</option>
                                <option value="doutorado">Doutorado</option>
                            </select>
                            <span>{errors.educationLevel && errors.educationLevel.message}</span>  

                        </div>

                        <div>
                            <label htmlFor="">Profissão </label>
                            <input type="text" placeholder="Escreva sua profissão " {...register("profession")} />   
                            <span>{errors.profession && errors.profession.message}</span>  

                        </div>

                    

                        <div>
                            <label htmlFor="baptized">É batizado?</label>
                            <select id="baptized" {...register("baptized")} onBlur={disableOptionsBaptized}>
                                <option value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                            <span>{errors.baptized && errors.baptized.message}</span>  

                        </div>

                        <div>
                            <label htmlFor=""> Data do batismo</label>
                            <input type="date" placeholder="" {...register("dateOfBaptism")} disabled={isBaptized}/>   
                            <span>{errors.dateOfBaptism && errors.dateOfBaptism.message}</span>  

                        </div>
                        <div>
                            <label htmlFor="">Nome da igreja de batismo </label>
                            <input type="text" placeholder="Nome do cônjuges " {...register("nameChurchOfBaptism")} disabled={isBaptized}/>   
                            <span>{errors.nameChurchOfBaptism && errors.nameChurchOfBaptism.message}</span>  

                        </div>
                    

                </fieldset>

                <button type="submit">Enviar!</button>


            </FormStyle>
        </>
    )
}