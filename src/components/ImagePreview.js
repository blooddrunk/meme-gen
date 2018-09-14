import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { autorun, reaction } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Stage, Layer, Image, Text } from 'react-konva';
import memoize from 'memoize-one';

@inject(({ store }) => ({
  builder: store.builder,
}))
@observer
class ImagePreview extends Component {
  static propTypes = {
    image: PropTypes.object,
    builder: PropTypes.object.isRequired,
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number,
  };

  static defaultProps = {
    containerWidth: 600,
    containerHeight: 600,
  };

  constructor(props) {
    super(props);

    this.state = {
      image: null,
    };

    this.authorTextRef = React.createRef();
    this.dictumTextRef = React.createRef();
  }

  componentDidMount = () => {
    autorun(() => {
      this._createImage(this.props.builder.imageSrc);
    });

    reaction(
      () => ({
        dictum: this.props.builder.dictum,
        author: this.props.builder.author,
      }),
      props => {
        this.shouldAdjustText = true;
      }
    );
  };

  componentDidUpdate = (prevProps, { image }) => {
    if (image !== this.state.image || this.shouldAdjustText) {
      this._adjustText();
      this.shouldAdjustText = false;
    }
  };

  _createImage(src) {
    const { builder } = this.props;
    builder.toggleLoading(true);

    const image = new window.Image();
    image.src = src;
    image.onload = () => {
      builder.toggleLoading(false);

      this.setState({
        image,
      });
    };
    image.onerror = () => {
      builder.toggleLoading(false);
    };
  }

  _adjustText() {
    const stageRef = this.props.forwardRef.current;
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

  _computeScale = memoize((containerWidth, containerHeight, image) => {
    if (!image) {
      return 1;
    }

    const widthScale = Math.min(containerWidth, image.width) / image.width;
    const heightScale = Math.min(containerHeight, image.height) / image.height;
    return Math.min(widthScale, heightScale, 1);
  });

  _computeSize = (image, scale, containerWidth, containerHeight) => {
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
    const { builder, containerWidth, containerHeight, forwardRef } = this.props;
    const { image } = this.state;
    const scale = this._computeScale(containerWidth, containerHeight, image);
    const { width, height } = this._computeSize(image, scale, containerWidth, containerWidth);

    return (
      <Stage ref={forwardRef} width={width} height={height}>
        <Layer>
          <Image image={image} preventDefault={false} scale={{ x: scale, y: scale }} />
          {image && (
            <Fragment>
              <Text
                ref={this.dictumTextRef}
                width={width}
                y={height}
                fill="white"
                text={builder.dictum}
                fontSize={36}
                align="center"
                verticalAlign="bottom"
                preventDefault={false}
              />
              <Text
                ref={this.authorTextRef}
                width={width}
                y={height}
                fill="white"
                text={builder.author && `——${builder.author}`}
                padding={16}
                fontSize={30}
                align="right"
                verticalAlign="bottom"
                preventDefault={false}
              />
            </Fragment>
          )}
        </Layer>
      </Stage>
    );
  }
}

export default ImagePreview;
