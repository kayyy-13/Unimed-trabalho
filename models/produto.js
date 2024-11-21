import conexao from '../config/conexao.js'

const Produto = conexao.Schema({
    nome: {type:String, required:true},
    valor: {type:Number},
    categoria: {type:String},
    quantidade: {type:Number},
    fotos: [{type:String}],
})

export default conexao.model('Produto',Produto)