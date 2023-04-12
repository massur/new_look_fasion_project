import { Box, createPolymorphicComponent , DefaultProps } from '@mantine/core';
import React from 'react'
/*
TODO: Add type to the color ( making it to accept only LitColors)

*/

interface StatusCircleProps extends DefaultProps {

    width: string;
    color: string;

}

export const StatusCircle = (props : StatusCircleProps) => {

  const {width, color, ...others} = props;

  return (
    <Box sx = {{
      backgroundColor: color,
      width: width,
      height: width,
      borderRadius: "50%",
      display: "inline-block",
    }} {...others} />
  )
}