import React, { Component, Fragment } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import * as Konva from 'konva';
import * as ReactKonva from 'react-konva';
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

import { StoreContext, RootStoreType } from '../stores';
import { ImagePreview } from './ImagePreview';

const CenteredCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const rightIconStyle = {
  marginLeft: 8,
};

@observer
export class ImageCard extends Component {
  static contextType = StoreContext;
  context!: RootStoreType;

  @observable error = null;

  canvasRef: ReactKonva.Stage | null = null;

  handleFileUpload = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const file = target.files && target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.context.builder.changeImage(fileReader.result as string);
      });
      fileReader.readAsDataURL(file);
    }
  };

  handleFileDownload = async () => {
    const { saveAs } = await import('file-saver');
    const stage = this.canvasRef;
    if (stage) {
      const canvas = stage.getStage().toCanvas({} as Konva.ToCanvasConfig);
      try {
        canvas.toBlob(blob => {
          if (blob) {
            saveAs(blob, 'pretty image.png');
          }
        });
      } catch (error) {
        this.error = error;
      }
    }
  };

  handleFileCopy = () => {};

  handleExternalImageSrcChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    this.context.builder.changeExternalImage(target.value);
  };

  handleExternalImageLoad = () => {
    const { builder } = this.context;
    builder.changeImage(builder.externalImageSrc);
  };

  handleSnackbarClose = () => {
    this.error = null;
  };

  handleExternalImagePick = () => {
    this.context.builder.pickExternalImage();
  };

  render() {
    const {
      builder: { externalImageSrc, externalImageFetching },
    } = this.context;

    return (
      <Fragment>
        <Card>
          <CardHeader title="图片预览" />
          <CenteredCardContent>
            <ImagePreview innerRef={(el: ReactKonva.Stage) => (this.canvasRef = el)} />
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
            <ul>
              <li>
                <Typography color="textSecondary" gutterBottom>
                  Text supports drag & drop
                </Typography>
              </li>
              <li>
                <Typography color="textSecondary" gutterBottom>
                  Image might overflow with insufficient space, click Save button to preview whole
                </Typography>
              </li>
              <li>
                <Typography color="textSecondary">
                  Failed to find a clipboard api to programmatically copy canvas/image, right click
                  and select 'Copy image' works though
                </Typography>
              </li>
            </ul>
          </CardContent>

          <CardContent>
            <TextField
              label="External source"
              value={externalImageSrc}
              placeholder="Use external image source"
              helperText={`Enter an valid image source and click 'APPLY'`}
              fullWidth
              disabled={externalImageFetching}
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
          <CardActions>
            <Button onClick={this.handleExternalImagePick}>I'm Feeling Lucky</Button>
          </CardActions>
        </Card>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={!!this.error}
          autoHideDuration={3000}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <span id="message-id">
              External image may not be downloaded this way. Right click and select 'Save image
              as...' instead
            </span>
          }
          action={[
            <Button key="close" color="secondary" size="small" onClick={this.handleSnackbarClose}>
              CLOSE
            </Button>,
          ]}
        />
      </Fragment>
    );
  }
}
