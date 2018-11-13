import React, { Component } from 'react';
import { observer } from 'mobx-react';
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
import Typography from '@material-ui/core/Typography';
import { TwitterPicker, ColorResult } from 'react-color';

import { StoreContext, RootStoreType } from '../stores';

export type DictumEditInjectProps = {
  store: RootStoreType;
};

const rightIconStyle = {
  marginLeft: 8,
};

@observer
export class DictumEdit extends Component {
  static contextType = StoreContext;
  context!: RootStoreType;

  handleMultilineToggle = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    this.context.builder.toggleMultiline(target.checked);
  };

  handleDictumChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    this.context.builder.changeDictum(target.value);
  };

  handleAuthorToggle = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    this.context.builder.changeAuthor(target.checked ? '鲁迅' : '');
  };

  handleAuthorChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    this.context.builder.changeAuthor(target.value);
  };

  handleColorChange = ({ hex }: ColorResult) => {
    this.context.builder.changeTextColor(hex);
  };

  render() {
    const {
      builder: { dictum, author, authorVisible, multiline, textColor, drawDictum, reset },
    } = this.context;

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
          <Button color="default" variant="contained" onClick={drawDictum}>
            RANDOM
            <CachedIcon style={rightIconStyle} />
          </Button>
        </CardActions>

        <CardContent>
          <Typography component="p" color="textSecondary" gutterBottom>
            设置文字颜色
          </Typography>
          <TwitterPicker
            triangle="hide"
            width="280px"
            color={textColor}
            colors={[
              '#000',
              '#f3f3f3',
              '#f44336',
              '#9c27b0',
              '#673ab7',
              '#3f51b5',
              '#03a9f4',
              '#009688',
              '#ffc107',
              '#cddc39',
            ]}
            onChangeComplete={this.handleColorChange}
          />
        </CardContent>

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
          <Button color="secondary" variant="contained" onClick={reset}>
            RESET
            <RestoreIcon style={rightIconStyle} />
          </Button>
        </CardActions>
      </Card>
    );
  }
}
