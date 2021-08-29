import React, { Component } from 'react';
import { uniqueId } from 'lodash';

import GlobalStyle from './styles/global';

import { Formulario } from "./components/formulario";
import { Logo } from "./components/logo";

import ButtonAddPhoto from './components/ButtonAddPhoto';
import FileList from './components/FileList';

class App extends Component {
  state = {
    uploadedFiles: []
  };

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      preview: URL.createObjectURL(file),
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    
  };

  handleDelete = async id => {
    

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {

    const { uploadedFiles } = this.state;
    
  return (
    <div>
       <nav>
      <Logo/>
      </nav>
      <section>

        <h1 className="tituloPrincipal"> Você está prestes a anunciar seu produto<br/> para 1 milhão de atletas</h1>

        <div className="caixa">
          <p><strong>Você é organizador ou lojista?</strong></p>
          <p>Tenha sua loja oficial dentro da nossa plataforma</p>
        </div>

        <div className="form">

            <div className="imagens">
              
            {!!uploadedFiles.length && (
              <FileList files={uploadedFiles} onDelete={this.handleDelete} />
            )}
              <ButtonAddPhoto onUpload={this.handleUpload}/>

            <GlobalStyle/>
            </div>

        <Formulario/>     
        </div>

      </section>
      
    
    </div>
  );
}
}

export default App;
