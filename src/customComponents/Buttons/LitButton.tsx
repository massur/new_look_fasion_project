import {
  Button,
  ButtonProps,
  createPolymorphicComponent,
  createStyles,
  useComponentDefaultProps,
} from "@mantine/core";

interface LitButtonProps extends Omit<ButtonProps, "size" | "variant"> {
  variant: "primary" | "secondary" | "subtle" | "text";
  size?: "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  type?: "submit" | "button" | "reset";
}

const defaultProps: Partial<LitButtonProps> = {
  variant: "primary",
};

const _LitButton = (props: LitButtonProps) => {
  const {
    variant,
    size,
    disabled,
    loading,
    type,
    
    leftIcon,
    children,
    ...others
  } = useComponentDefaultProps("LitText", defaultProps, props);
  const { classes, cx } = createButtonStyles(props?.size);

  return (
    <Button
      {...others}
      variant="default"
      classNames={{
        root: cx(classes.common, classes[props.variant]),
      }}
      leftIcon={props.leftIcon}
      disabled={props.disabled}
      loading={props.loading}
    >
      {props.children}
    </Button>
  );
};

const createButtonStyles = createStyles(
  (theme, size?: "medium" | "large" | undefined) => ({
    common: {
      height: size == "large" ? "56px" : "40px",
      borderRadius: "8px",
    },
    primary: {
      background: theme.fn.linearGradient(
        theme.other.litGradients.accent.deg,
        theme.other.litGradients.accent.from,
        theme.other.litGradients.accent.to
      ),
      "&:focus": {
        outline: "3px solid #DCDCDC",
        outlineOffset: 0,
      },
      "&:hover": {
        background: theme.fn.linearGradient(                                                                               
          theme.other.litGradients.accent.deg,
          theme.other.litGradients.accent.from,
          theme.other.litGradients.accent.to
        ),
      },

      "&.mantine-Button-loading": {
        outline: "3px solid #DCDCDC",
        outlineOffset: 0,
        "::before": {
          background: "none",
        },
        ".mantine-Button-icon svg": {
          stroke: "white",
        },
      },
      "&:not(mantine-Button-loading):disabled": {
        border: "none",
        backgroundColor: "unset",
        opacity: 0.5,
      },
    },
    secondary: {
      background:
        "linear-gradient(white, white) padding-box,linear-gradient(114.44deg,  #0038F5, #9F03FF) border-box",
      border: "1px solid transparent",
      "&:hover": {
        background:
          "linear-gradient(white, white) padding-box,linear-gradient(114.44deg,  #0038F5, #9F03FF) border-box",
      },

      "&:focus": {
        outline: "none",
        background:
          "linear-gradient(#F0F0F0, #F0F0F0) padding-box,linear-gradient(114.44deg,  #0038F5, #9F03FF) border-box",
      },
      "&.mantine-Button-loading": {
        outline: "none",
        background:
          "linear-gradient(#F0F0F0, #F0F0F0) padding-box,linear-gradient(114.44deg,  #0038F5, #9F03FF) border-box",
        "::before": {
          background: "none",
        },
        ".mantine-Button-icon svg": {
          stroke: "#0038F5",
        },
      },
      "&:not(mantine-Button-loading):disabled": {
        background:
          "linear-gradient(#F0F0F0, #F0F0F0) padding-box,linear-gradient(114.44deg,  #0038F5, #9F03FF) border-box",
        opacity: 0.5,
      },
    },
    subtle: {
      backgroundColor: "white",
      border: "1px solid #888888",
      "&:hover": {
        background: "white",
      },
      "&:focus": {
        outline: "none",
        background: "#F0F0F0",
      },
      "&.mantine-Button-loading": {
        outline: "none",
        background: "white",
        "::before": {
          background: "none",
        },
        ".mantine-Button-icon svg": {
          stroke: "#0038F5",
        },
      },
      "&:not(mantine-Button-loading):disabled": {
        background: "#F0F0F0",
        opacity: 0.5,
      },
    },
    text: {
      background: "none",
      border: "none",
      "&:hover": {
        background: "none",
      },
      "&:focus": {
        outline: "none",
      },
      "&:not(mantine-Button-loading):disabled": {
        opacity: 0.5,
        background: "none",
        backgroundColor: "white !important",
      },
    },
  })
);

export const LitButton = createPolymorphicComponent<"button", LitButtonProps>(
  _LitButton
);

/*
  Confuion : whether to keep the height of the button as static or make it 
  depend on the padding ? 

  We will be be going with the height approach since the mantine button is built around it 

   xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60,
    "&.mantine-Button-loading::before": {
      color: "green !important",
      background: "none",
    },
*/
