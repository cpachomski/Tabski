import React, { memo } from 'react';
import { connect } from 'react-redux';

import { SET_SHEET_NAME } from 'actions';

import { Input } from './atoms';

const SheetHeader = memo(({ dispatch, sheetName }) => (
  <Input
    value={sheetName}
    placeholder="Song Name"
    onChange={e =>
      dispatch({ type: SET_SHEET_NAME, sheetName: e.target.value })
    }
  />
));

export default connect(({ present }) => ({ sheetName: present.sheetName }))(
  SheetHeader
);
