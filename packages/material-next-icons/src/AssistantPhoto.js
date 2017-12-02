import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '@material-next/core/SvgIcon';

let AssistantPhoto = props =>
  <SvgIcon {...props}>
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
  </SvgIcon>;

AssistantPhoto = pure(AssistantPhoto);
AssistantPhoto.muiName = 'SvgIcon';

export default AssistantPhoto;
