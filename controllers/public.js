import usuario from '../models/usuario.js'
import Produto from '../models/produto.js'

export async function abrecadastro(req, res){
    res.render('cadastro')
}

export async function cadastro(req, res){
    //esse comando equivale a um if
    const admin = req.body.admin=="on" ? true : false;

    const novousuario = new usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        endereco: req.body.endereco,
        foto: req.file.filename,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        admin: admin
    })

    await novousuario.save();
    res.send("Cadastrado com sucesso!")
}

export async function abrelogin(req, res){
    res.render('login')
}

export async function login(req, res){
    res.redirect('/admin/usuarios/lst')
}

export async function abreindex(req, res){
    const produtos = await Produto.find({})
    res.render('public/index.ejs', {Produtos:produtos})
}