import React from 'react';

import TextWidget from './widgets/text';

const Widget = (type, title) => {
  switch(type){
    default:
      return <TextWidget title={title} />;
  }
};

export default Widget;
