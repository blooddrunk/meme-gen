import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Image } from 'react-konva';

class ImagePreview extends Component {
  static propTypes = {
    image: PropTypes.object,
  };

  state = {
    image: null,
    originalWidth: 0,
    originalHeight: 0,
  };

  render() {
    const { image } = this.props;

    return (
      <Stage width={600} height={400} scale={{ x: 1 / 2, y: 1 / 2 }}>
        <Layer>
          <Image image={image} />
        </Layer>
      </Stage>
    );
  }
}

export default ImagePreview;
