import React, { useState } from 'react';

import TextWidget from './widgets/text';

const Widget = ({data, type, title}) => {
  switch(type){
    default:
      return <TextWidget data={data} title={title} />;
  }
};

export default Widget;
