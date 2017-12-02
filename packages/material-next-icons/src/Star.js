import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '@material-next/core/SvgIcon';

let Star = props =>
  <SvgIcon {...props}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </SvgIcon>;

Star = pure(Star);
Star.muiName = 'SvgIcon';

export default Star;
