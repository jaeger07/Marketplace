import React, { Component } from "react";

import Dropzone from "react-dropzone";

import { DropContainer } from "./styles";

export default class Upload extends Component {
  

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps}) => (
          <DropContainer
            {...getRootProps()}
          
          >
            <input {...getInputProps()} />
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}