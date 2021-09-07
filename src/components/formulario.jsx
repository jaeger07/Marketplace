import React, { Component } from "react"
import CurrencyInput from "./maskedinput";

export default class Formulario extends Component{

    render(){
        return(
            <form className="input-form">
                <legend>Título do produto</legend>
                <input type="text" className="input-titulo" required ></input>

                <legend>Preço</legend>
                <CurrencyInput />

                <legend>Descrição</legend>
                <textarea rows="8" className="descricao-produto"/>
                <span className="span-descricao" >0/500</span>
                
                <div className="checks">
                    <input type="radio" name="condicao" />
                    <span> Produto novo</span> &nbsp;
                    <input type="radio" name="condicao" /> 
                    <span> Produto usado </span>
                </div>
                <div className="linha"></div>
                <div className="categorias">
                    <fieldset className="categoria">
                        <legend>Departamento</legend>
                        <select  >
                            <option>Bikes</option>
                        </select>
                    </fieldset>
                    <fieldset className="categoria">
                        <legend>Categoria</legend>
                        <select >
                            <option>Mountain bike</option>
                        </select>
                    </fieldset>
                    <fieldset className="categoria">
                        <legend>Subcategoria</legend>
                        <select>
                            <option>Bikes</option>
                        </select>
                    </fieldset>
                </div>
            
                <button type="submit" className="btnCadastrar">Cadastrar produto</button>
                
            </form>
        );
    }
}