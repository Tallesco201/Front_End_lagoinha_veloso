import * as yup from "yup"

export const schemaRegister =  yup.object().shape({
    name: yup.string().required("Nome Obrigatorio"),
    cel: yup.string().matches(/^\(\d{2}\)\d{5}-\d{4}$/, "O telefone deve estar no formato (99)99999-9999").required("Insira o número para contato"),
    cpf:yup.number().max(99999999999, "CPF deve ter no máximo 11 dígitos").required("Numero obrigatorio"),
    rg:yup.number().max(999999999, "o RG deve terno maximo 9 digitos").required("Rg obrigatorio"),
    birth: yup.string().required("Data de nascimento obrigatoria "),
    nameMother: yup.string().optional(),
    nameFather: yup.string().optional(),
    email: yup.string().required("Email obrigatorio"),
    
    
    cep: yup.string().required("Isira o CEP por favor"),
    nameStreet: yup.string().required("Nome da rua obrigatorio"),
    numberStreet: yup.number().required("Numero da moradia obrigatorio"),
    neighborhood:yup.string().required("Insira o nome do  bairro onde mora "),
    city:yup.string().required("Insira a cidade onde mora "),
    state:yup.string().required("Insira o estado onde mora "),


    maritalStatus: yup.string().required("Insira seu estado civil"),
    weddingDate: yup.string().optional(),
    spousesName: yup.string().optional(),

    educationLevel:yup.string().required("Preencha sua escolaridade"), 
    profession:yup.string().required("Escreva sua profissão"),

    baptized: yup.string().required("Preencha este campo"),
    dateOfBaptism: yup.string().optional(),
    nameChurchOfBaptism:yup.string().optional()
})