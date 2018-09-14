import React, { Component, Fragment } from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Tooltip from '@material-ui/core/Tooltip';

import ImagePreview from './ImagePreview';

const CenteredCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const rightIconStyle = {
  marginLeft: 8,
};

@inject(({ store }) => ({
  builder: store.builder,
}))
export class ImageCard extends Component {
  static propTypes = {
    builder: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  handleFileUpload = ({ target }) => {
    const file = target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.props.builder.changeImage(fileReader.result);
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

  render() {
    return (
      <Card>
        <CardHeader title="图片预览" />
        <CenteredCardContent>
          <ImagePreview forwardRef={this.canvasRef} />
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
        <CardContent>
          <Typography component="p" color="textSecondary" gutterBottom>
            Image might overflow with insufficient space, click Save button to preview whole
          </Typography>
          <Typography component="p" color="textSecondary">
            Failed to find a clipboard api to programmatically copy canvas/image, right click and
            select 'Copy image' works though
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default ImageCard;
