const chalk = require("chalk")
module.exports = {
    mensagem(media){
        if(media >=6){
            console.log(chalk.green("O Aluno foi aprovado: ")+chalk.black.bgGreen(media))
        }else if(media >=5){
            console.log(chalk.yellow("O Alunoesta de recuperação: ")+chalk.black.bgYellow(media))
        }else{
            console.log(chalk.red("O Aluno está reprovado: ")+chalk.black.bgRed(media))
        }
    }
}