import conexao from '../config/conexao.js'

const Categoria = conexao.Schema({
    nome: {type:String, required:true},
})

export default conexao.model('Categoria',Categoria)