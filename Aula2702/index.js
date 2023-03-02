const calculadora = require('./calculadora')
const avalia = require('./avalia')
const inquirer = require('inquirer')
const fs = require('fs')
const { Console } = require('console')

inquirer.prompt([
    {
        name: 'nomeAluno',
        message: 'Nome do aluno:'

    },
    {
        name: 't1',
        massage: 'Nota do 1º Trabalho: '
    },
    {
        name: 't2',
        massage: 'Nota do 2º Trabalho: '
    },
    {
        name: 'p3',
        massage: 'Nota da 3º Prova: '
    },
    {
        name: 'p4',
        massage: 'Nota da 4º Prova: '
    }
]).then((answers)=>{
    console.log(`Sua nota no 1º Trabalho foi: ${answers.t1}`)
    console.log(`Sua nota no 2º Trabalho foi: ${answers.t2}`)
    console.log(`Sua nota no 3º Prova foi: ${answers.p3}`)
    console.log(`Sua nota no 4º prova foi: ${answers.p4}`)
    let media = calculadora.media(answers.t1, answers.t2, answers.p3, answers.p4) 
    console.log(`Sua média foi: ${media}`)
    avalia.mensagem(media)
    
})
.catch((erro) => (console.log('Xiiii, deu erro!')))