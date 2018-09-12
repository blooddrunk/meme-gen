import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import CachedIcon from '@material-ui/icons/Cached';
import Collapse from '@material-ui/core/Collapse';

const rightIconStyle = {
  marginLeft: 8,
};

export class DictumEdit extends Component {
  static propTypes = {
    dictum: PropTypes.string.isRequired,
    author: PropTypes.string,
    onDictumChange: PropTypes.func.isRequired,
    onAuthorToggle: PropTypes.func.isRequired,
    onAuthorChange: PropTypes.func.isRequired,
    onDictumShuffle: PropTypes.func.isRequired,
  };

  state = {
    multiline: false,
  };

  handleToggleMultiline = ({ target }) => {
    this.setState({ multiline: target.checked });
  };

  handleDictumChange = ({ target }) => {
    this.setState({ dictum: target.value });
  };

  handle;

  render() {
    const {
      dictum,
      author,
      onDictumChange,
      onAuthorToggle,
      onAuthorChange,
      onDictumShuffle,
    } = this.props;
    const { multiline } = this.state;

    return (
      <Card>
        <CardHeader title="内容编辑" />
        <CardContent>
          <TextField
            label="文字内容"
            multiline={multiline}
            value={dictum}
            placeholder="请输入文字内容"
            helperText={multiline ? '回车进入下一行' : '使用右侧开关切换多行模式'}
            fullWidth
            margin="normal"
            onChange={onDictumChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Switch checked={multiline} onChange={this.handleToggleMultiline} />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Switch color="primary" checked={!!author} onChange={onAuthorToggle} />}
            label="显示出处"
          />
          <Collapse in={!!author}>
            <TextField
              label="出处"
              value={author}
              placeholder="请输入出处"
              fullWidth
              margin="normal"
              onChange={onAuthorChange}
            />
          </Collapse>
        </CardContent>
        <CardActions>
          <Button color="default" onClick={onDictumShuffle}>
            RANDOM
            <CachedIcon style={rightIconStyle} />
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default DictumEdit;
