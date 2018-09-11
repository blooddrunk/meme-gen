import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Image, Text } from 'react-konva';
import memoize from 'memoize-one';

class ImagePreview extends PureComponent {
  static propTypes = {
    image: PropTypes.object,
    dictum: PropTypes.string.isRequired,
    containerWidth: PropTypes.number,
    containerHeight: PropTypes.number,
  };

  static defaultProps = {
    containerWidth: 600,
    containerHeight: 600,
  };

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
    const { image, dictum, containerWidth, containerHeight, forwardRef } = this.props;
    const scale = this._computeScale(containerWidth, containerHeight, image);
    const { width, height } = this._computeSize(image, scale, containerWidth, containerWidth);
    const dictumLineNum = dictum.split('\n').length;

    return (
      <Stage ref={forwardRef} width={width} height={height} scale={{ x: scale, y: scale }}>
        <Layer>
          <Image image={image} listening />
          {image && (
            <Fragment>
              <Text
                width={width / scale}
                y={(height - (dictumLineNum + 1) * 36) / scale}
                fill="white"
                text={dictum}
                fontSize={36}
                align="center"
                verticalAlign="bottom"
              />
              <Text
                width={width / scale}
                y={(height - 52) / scale}
                fill="white"
                text="——鲁迅"
                padding={16}
                fontSize={36}
                align="right"
                verticalAlign="bottom"
              />
            </Fragment>
          )}
        </Layer>
      </Stage>
    );
  }
}

export default ImagePreview;
