import React, { Component } from "react"
import CurrencyInput from "./maskedinput";

export class Formulario extends Component{

    render(){
        return(
            <div class="input-form">
                <legend>Título do produto</legend>
                <input type="text" class="input-titulo" required ></input>
                <legend>Preço</legend>
                
                <CurrencyInput />

                <legend>Descrição</legend>
                <textarea rows="8"/>
                <span className="span-descricao" >0/500</span>
                
                <div className="checks">
                    <input type="radio" name="condicao" />
                    <span> Produto novo</span> &nbsp;
                    <input type="radio" name="condicao" /> 
                    <span> Produto usado </span>
                </div>
                <div className="linha"></div>
                <div class="categorias">
                    <fieldset class="categoria">
                        <legend>Departamento</legend>
                        <select  >
                            <option>Bikes</option>
                        </select>
                    </fieldset>
                    <fieldset class="categoria">
                        <legend>Categoria</legend>
                        <select >
                            <option>Mountain bike</option>
                        </select>
                    </fieldset>
                    <fieldset class="categoria">
                        <legend>Subcategoria</legend>
                        <select>
                            <option>Bikes</option>
                        </select>
                    </fieldset>
                </div>
            
                <input type="submit" value="Cadastrar produto" />
                
            </div>
        );
    }
}