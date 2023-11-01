import * as yup from "yup"

export const schemaRegister =  yup.object().shape({
    name: yup.string().required("Nome Obrigatorio"),
    cel: yup.number().required("Insira o numero para contato "),
    cpf:yup.number().max(99999999999, "CPF deve ter no máximo 11 dígitos").required("Numero obrigatorio"),
    rg:yup.number().max(999999999, "o RG deve terno maximo 9 digitos").required("Rg obrigatorio"),
    birth: yup.string().required("Data de nascimento obrigatoria "),
    nameMother: yup.string().optional(),
    nameFather: yup.string().optional(),
    email: yup.string().required("Email obrigatorio"),
    
    
    cep: yup.number().max(99999999, "CEP com no maximo 8 numeros").required("Isira o CEP por favor"),
    nameStreet: yup.string().required("Nome da rua obrigatorio"),
    numberStreet: yup.number().required("Numero da moradia obrigatorio"),
    neighborhood:yup.string().required("Insira o nome do  bairro onde mora "),
    city:yup.string().required("Insira a cidade onde mora "),
    state:yup.string().required("Insira o estado onde mora "),


    maritalStatus: yup.string().required("Isira seu estado civil"),
    weddingDate: yup.string().optional(),
    spousesName: yup.string().optional(),

    education:yup.string().required("Preencha sua escolaridade"), 
    profession:yup.string().required("Escreva sua profissão"),

    baptized: yup.string().required("Preencha este campo"),
    dateOfBaptism: yup.string().optional(),
    nameChurch:yup.string().optional()
})