import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Tooltip from '@material-ui/core/Tooltip';

import ImagePreview from './ImagePreview';
import defaultImage from './luxun_1.jpg';

const CenteredCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const rightIconStyle = {
  marginLeft: 8,
};

export class ImageCard extends Component {
  static propTypes = {
    dictum: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

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

  handleFileDownload = async file => {
    const { saveAs } = await import('file-saver');
    const canvas = this.canvasRef.current.getStage().toCanvas();
    canvas.toBlob(blob => {
      saveAs(blob, 'pretty image.png');
    });
  };

  handleFileCopy = () => {};

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
    const { dictum } = this.props;
    const { uploadedImage } = this.state;

    return (
      <Card>
        <CardHeader title="图片预览" />
        <CenteredCardContent>
          <ImagePreview forwardRef={this.canvasRef} image={uploadedImage} dictum={dictum} />
        </CenteredCardContent>
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
          <Button color="secondary" onClick={this.handleFileDownload}>
            Save
            <SaveIcon style={rightIconStyle} />
          </Button>
          <Fragment>
            <Tooltip disableTouchListener title="Not supported yet!">
              <Button color="default" onClick={this.handleFileCopy}>
                Copy
                <FileCopyIcon style={rightIconStyle} />
              </Button>
            </Tooltip>
          </Fragment>
        </CardActions>
      </Card>
    );
  }
}

export default ImageCard;
