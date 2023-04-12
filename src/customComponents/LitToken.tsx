import { Chip, ChipProps, createStyles } from "@mantine/core";
import React from "react";
import { linearGradients, litColors } from "../theme/theme";
import { LitText } from "./Text/LitText";

const useStyles = createStyles((theme, _params, getRef) => ({
  input: {
    height: 0,
    width: 0,
  },
  label: {
    cursor: "pointer",
    backgroundColor: litColors.inputBg,
    padding: "12px 20px",
    borderRadius: "30px",

    "&[data-checked]": {
      "&, &:hover": {
        background: theme.fn.gradient(linearGradients.accent),
        color: theme.white,
      },

      [`& .${getRef("iconWrapper")}`]: {
        color: theme.white,
      },
    },
    "&[data-disabled] > *": {
      opacity: 0.5,
    },
  },

  iconWrapper: {
    display: "none",
  },
}));

export const LitToken = (props: ChipProps) => {
  const { classes } = useStyles();

  return (
    <Chip classNames={classes} {...props} unstyled>
      <LitText
        component="span"
        screenType="mobile"
        typographyVariant="text"
        size="md"
      >
        {props.children}
      </LitText>
    </Chip>
  );
};
