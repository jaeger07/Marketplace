import React from "react";

import { Container, Preview } from "./styles";

const FileList = ({ files, onDelete}) => (
  <Container>
    {files.map(uploadedFile => (
        
          <Preview src={uploadedFile.preview}  >

                <button class="buttonDelete" onClick={() => onDelete(uploadedFile.id)}>
                  Excluir
                </button>
              
          </Preview>
    ))}
  </Container>
);

export default FileList;