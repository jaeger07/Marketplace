import React from "react";

import { Container, Preview } from "./styles";

const FileList = ({ files}) => (
  <Container>
    {files.map(uploadedFile => (
        
          <Preview src={uploadedFile.preview}  />
      
    ))}
  </Container>
);

export default FileList;