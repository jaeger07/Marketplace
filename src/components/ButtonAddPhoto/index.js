import React, { Component } from "react";
import Dropzone from "react-dropzone";


export default class ButtonAddPhoto extends Component {
  

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps}) => (
          <div className="buttonAddPhoto"
            {...getRootProps()}
          
          >
            <input {...getInputProps()} />
          </div >
        )}
      </Dropzone>
    );
  }
}