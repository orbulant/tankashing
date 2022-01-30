import React from 'react';
import { Heading, Text } from 'theme-ui';

const NotFound = () => {
  return <div>
      <Heading as='h1'>404</Heading>
      <Heading as='h2'>Oops... what are you trying to do sneaky man/woman?</Heading>
      <Text>This page is unavailable</Text>
  </div>;
};

export default NotFound;
