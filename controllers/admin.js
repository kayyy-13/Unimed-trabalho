import Usuario from '../models/usuario.js';
import Categoria from '../models/categoria.js';
import Produto from '../models/produto.js';

export async function listarusuarios(req, res){
    const usuarios = await Usuario.find({}).catch(function(err){console.log(err)});
    res.render('admin/usuarios/lst', {usuarios: usuarios});
}

export async function detalhe(req, res) {
    const usuario = await Usuario.findById(req.params.id);
    res.render('admin/usuarios/detalhe', {usuario: usuario});
}

export async function abreaddcategoria(req, res) {
    res.render('admin/categoria/add')
}

export async function addcategoria(req, res) {
    await Categoria.create({
        nome:req.body.nome
    })
    res.redirect('/admin/categoria/add')
}

export async function listarcategoria(req, res) {
    const categorias = await Categoria.find({})
    res.render('admin/categoria/lst',{Categorias: categorias});
}

export async function filtrarcategoria(req, res) {
    const categorias = await Categoria.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/categoria/lst',{Categorias: categorias});
}

export async function deletacategoria(req, res) {
    await Categoria.findByIdAndDelete(req.params.id)
    res.redirect('/admin/categoria/lst')
}

export async function abreedtcategoria(req, res){
    const categoria = await Categoria.findById(req.params.id)
    res.render('admin/categoria/edt.ejs',{Categoria: categoria})
}

export async function edtcategoria(req, res){
    await Categoria.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/categoria/lst')
}

export async function abreaddproduto(req, res) {
    res.render('admin/produto/add')
}

export async function addproduto(req, res) {
    console.log(req.files)
    let fotos = [];
    for (var i = 0; i < req.files.length; i++) {
        fotos[i] = req.files[i].filename;
    }
    await Produto.create({
        nome:req.body.nome,
        valor: req.body.valor,
        categoria: req.body.categoria,
        quantidade: req.body.quantidade,
        fotos: fotos,
    })
    res.redirect('/admin/produto/add')
}

export async function listarproduto(req, res) {
    const produtos = await Produto.find({})
    res.render('admin/produto/lst',{Produtos: produtos});
}

export async function filtrarproduto(req, res) {
    const produtos = await Produto.find({nome: new RegExp(req.body.pesquisar,"i")})
    res.render('admin/produto/lst',{Produtos: produtos});
}

export async function deletaproduto(req, res) {
    await Produto.findByIdAndDelete(req.params.id)
    res.redirect('/admin/produto/lst')
}

export async function abreedtproduto(req, res){
    const produto = await Produto.findById(req.params.id)
    res.render('admin/produto/edt.ejs',{Produto: produto})
}

export async function edtproduto(req, res){
    await Produto.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/admin/produto/lst')
}