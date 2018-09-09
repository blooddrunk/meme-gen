import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import ReactResizeDetector from 'react-resize-detector';

import ImagePreview from './ImagePreview';
import defaultImage from './luxun_1.jpg';

const rightIconStyle = {
  marginLeft: 8,
};

export class ImageCard extends Component {
  state = {
    uploadedImage: null,
  };

  componentDidMount = () => {
    this._createImage(defaultImage);
  };

  handleFileUpload = ({ target }) => {
    const file = target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this._createImage(fileReader.result);
      });
      fileReader.readAsDataURL(file);
    }
  };

  _createImage(src) {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      this.setState({
        uploadedImage: image,
      });
    };
  }

  render() {
    const { uploadedImage } = this.state;

    return (
      <ReactResizeDetector handleWidth handleHeight refreshMode="debounce" refreshRate={300}>
        {(width, height) => {
          return (
            <Card>
              <CardHeader title="图片预览" />
              <CardContent>
                <ImagePreview image={uploadedImage} />
              </CardContent>
              <CardActions>
                <input
                  onChange={this.handleFileUpload}
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="upload-image"
                  type="file"
                />
                <label htmlFor="upload-image">
                  <Button component="span" color="primary">
                    Upload
                    <CloudUploadIcon style={rightIconStyle} />
                  </Button>
                </label>
                <Button color="default">
                  Save
                  <SaveIcon style={rightIconStyle} />
                </Button>
              </CardActions>
            </Card>
          );
        }}
      </ReactResizeDetector>
    );
  }
}

export default ImageCard;
