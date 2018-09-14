import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
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
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

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
@observer
export class ImageCard extends Component {
  static propTypes = {
    builder: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      externalImageSrc: '',
      error: null,
    };

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
    try {
      canvas.toBlob(blob => {
        saveAs(blob, 'pretty image.png');
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  handleFileCopy = () => {};

  handleExternalImageSrcChange = ({ target }) => {
    this.setState({ externalImageSrc: target.value });
  };

  handleExternalImageLoad = () => {
    this.props.builder.changeImage(this.state.externalImageSrc);
  };

  handleSnackbarClose = () => {
    this.setState({ error: null });
  };

  render() {
    const { externalImageSrc, error } = this.state;

    return (
      <Fragment>
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

          <CardContent>
            <TextField
              label="External source"
              value={externalImageSrc}
              placeholder="Use external image source"
              helperText={`Enter an valid image source and click 'APPLY'`}
              fullWidth
              margin="normal"
              onChange={this.handleExternalImageSrcChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip disableTouchListener title="Apply">
                      <div>
                        <IconButton
                          disabled={!externalImageSrc}
                          onClick={this.handleExternalImageLoad}
                        >
                          <SendIcon />
                        </IconButton>
                      </div>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </CardContent>
        </Card>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={!!error}
          autoHideDuration={3000}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <span id="message-id">
              External image may not be download this way. Right click and select 'Copy image'
              instead
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Fragment>
    );
  }
}

export default ImageCard;
