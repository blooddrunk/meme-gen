import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
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
import RestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Collapse from '@material-ui/core/Collapse';

const rightIconStyle = {
  marginLeft: 8,
};

@inject(({ store }) => ({
  builder: store.builder,
}))
@observer
export class DictumEdit extends Component {
  static propTypes = {
    builder: PropTypes.object.isRequired,
  };

  handleMultilineToggle = ({ target }) => {
    this.props.builder.toggleMultiline(target.checked);
  };

  handleDictumChange = ({ target }) => {
    this.props.builder.changeDictum(target.value);
  };

  handleAuthorToggle = ({ target }) => {
    this.props.builder.changeAuthor(target.checked ? '鲁迅' : '');
  };

  handleAuthorChange = ({ target }) => {
    this.props.builder.changeAuthor(target.value);
  };

  render() {
    const {
      builder: { dictum, author, authorVisible, multiline, drawDictum, reset },
    } = this.props;

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
            onChange={this.handleDictumChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Switch checked={multiline} onChange={this.handleMultilineToggle} />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
        <CardActions>
          <Button color="default" onClick={drawDictum}>
            RANDOM
            <CachedIcon style={rightIconStyle} />
          </Button>
        </CardActions>

        <CardContent>
          <FormControlLabel
            control={
              <Switch color="primary" checked={authorVisible} onChange={this.handleAuthorToggle} />
            }
            label="显示出处"
          />
          <Collapse in={authorVisible}>
            <TextField
              label="出处"
              value={author}
              placeholder="请输入出处"
              fullWidth
              margin="normal"
              onChange={this.handleAuthorChange}
            />
          </Collapse>
        </CardContent>
        <CardActions>
          <Button color="default" onClick={reset}>
            RESET
            <RestoreIcon style={rightIconStyle} />
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default DictumEdit;
