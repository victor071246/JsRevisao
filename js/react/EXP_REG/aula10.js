// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g;

// Não números
const naoNumerosRegEx = /\D/;

// Valida IP
const ipRegExp =
    /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Checar se tem o formato de um CPF
const cpfRegExp = /(\d{3}.){2}\d{3}\d{2}/g;

// Valida telefones
const validaTelefone = /^(\*(\d{2})\s*)?(9\s*)?(\d{4})-(\d{4})$/g;

// Validar senhas fortes
const validaSenhasFortes =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]\)).{8,}$/;

// Validar e-mails

const validarEmails = /[^\s]+@[^\s]+\.[^\s]+(\w+)*/;
