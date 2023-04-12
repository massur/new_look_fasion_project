import { DefaultProps, Divider } from '@mantine/core'
import React from 'react'
import { litColors } from '../theme/theme';

interface LitDividerProps extends DefaultProps {
    type :"NORMAL" | "THIN" ;
    padded?: boolean;
    darkMode? : boolean;
    orientation?: 'horizontal' | 'vertical';
}

const sizeMap = {

    "NORMAL" : 8,
    "THIN" : 1,
}


export const LitDivider = (props: LitDividerProps) => {

  const {type, padded, ...others } = props;

  return (
   <Divider size={sizeMap[type]} color={litColors.line} mx={padded ? "6.5%" : "0%"} {...others} />
  )
}
