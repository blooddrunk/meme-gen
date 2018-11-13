import React, { Component, Fragment, Ref } from 'react';
import { autorun, reaction } from 'mobx';
import { observer } from 'mobx-react';
import * as ReactKonva from 'react-konva';
import * as Konva from 'konva';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import { StoreContext, RootStoreType } from '../stores';

export interface ImagePreviewProps {
  innerRef: (el: ReactKonva.Stage) => void;
  containerHeight: number;
  containerWidth: number;
}
export interface ImagePreviewState {
  image: HTMLImageElement | null;
  error: Error | null;
}

@observer
export class ImagePreview extends Component<ImagePreviewProps, ImagePreviewState> {
  static contextType = StoreContext;
  context!: RootStoreType;

  static defaultProps: Partial<ImagePreviewProps> = {
    containerWidth: 600,
    containerHeight: 600,
  };

  authorTextRef = React.createRef<Konva.Text>();
  dictumTextRef = React.createRef<Konva.Text>();

  stageRef: ReactKonva.Stage | null = null;
  setStageRef = (el: ReactKonva.Stage) => {
    this.stageRef = el;
    this.props.innerRef(el);
  };

  shouldAdjustText: boolean = false;

  state: ImagePreviewState = {
    image: null,
    error: null,
  };

  componentDidMount = () => {
    autorun(() => {
      this._createImage(this.context.builder.imageSrc);
    });

    reaction(
      () => ({
        dictum: this.context.builder.dictum,
        author: this.context.builder.author,
        textColor: this.context.builder.textColor,
      }),
      () => {
        this.shouldAdjustText = true;
      }
    );
  };

  componentDidUpdate = (prevProps: ImagePreviewProps, { image }: ImagePreviewState) => {
    if (image !== this.state.image || this.shouldAdjustText) {
      this._adjustText();
      this.shouldAdjustText = false;
    }
  };

  handleImageReload = () => {
    this._createImage(this.context.builder.imageSrc);
  };

  handleSnackbarClose = () => {
    this.setState({ error: null });
  };

  _createImage(src: string) {
    if (!src) {
      return;
    }

    const { builder } = this.context;
    builder.toggleLoading(true);

    const image = new window.Image();
    image.src = src;
    image.onload = () => {
      builder.toggleLoading(false);

      this.setState({
        image,
      });
    };
    image.onerror = (error: Error) => {
      builder.toggleLoading(false);
      builder.changeImage('');

      this.setState({ error });
    };
  }

  _adjustText() {
    const stageRef = this.stageRef;
    const authorText = this.authorTextRef.current;
    const dictumText = this.dictumTextRef.current;

    if (!stageRef || !authorText || !dictumText) {
      return;
    }

    const stage = stageRef.getStage();
    const authorTextY = stage.getHeight() - authorText.getHeight();
    authorText.y(authorTextY);
    dictumText.y(authorTextY - dictumText.getHeight());
  }

  _computeScale = (
    containerWidth: number,
    containerHeight: number,
    image: HTMLImageElement | null
  ) => {
    if (!image) {
      return 1;
    }

    const widthScale = Math.min(containerWidth, image.width) / image.width;
    const heightScale = Math.min(containerHeight, image.height) / image.height;
    return Math.min(widthScale, heightScale, 1);
  };

  _computeSize = (
    image: HTMLImageElement | null,
    scale: number,
    containerWidth: number,
    containerHeight: number
  ) => {
    if (!image) {
      return {
        width: containerWidth,
        height: containerHeight,
      };
    }

    return {
      width: image.width * scale,
      height: image.height * scale,
    };
  };

  render() {
    const {
      builder: { dictum, author, textColor },
    } = this.context;
    const { innerRef, containerWidth, containerHeight } = this.props;
    const { image, error } = this.state;
    const scale = this._computeScale(containerWidth, containerHeight, image);
    const { width, height } = this._computeSize(image, scale, containerWidth, containerWidth);

    return (
      <Fragment>
        <ReactKonva.Stage ref={this.setStageRef} width={width} height={height}>
          <ReactKonva.Layer>
            {image && (
              <Fragment>
                <ReactKonva.Image
                  image={image!}
                  preventDefault={false}
                  scale={{ x: scale, y: scale }}
                />
                <ReactKonva.Text
                  ref={this.dictumTextRef}
                  width={width}
                  x={0}
                  y={height}
                  fill={textColor}
                  text={dictum}
                  fontSize={36}
                  align="center"
                  verticalAlign="bottom"
                  preventDefault={false}
                  draggable
                />
                <ReactKonva.Text
                  ref={this.authorTextRef}
                  width={width}
                  x={0}
                  y={height}
                  fill={textColor}
                  text={author && `——${author}`}
                  padding={16}
                  fontSize={30}
                  align="right"
                  verticalAlign="bottom"
                  preventDefault={false}
                  draggable
                />
              </Fragment>
            )}
          </ReactKonva.Layer>
        </ReactKonva.Stage>
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
          message={<span id="message-id">Failed to loading image, please check the URL</span>}
          action={[
            <Button key="reload" color="secondary" size="small" onClick={this.handleImageReload}>
              RETRY
            </Button>,
          ]}
        />
      </Fragment>
    );
  }
}
