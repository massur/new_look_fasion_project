import {
  createStyles,
  MantineTheme,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { LitText } from "../Text/LitText";
import { X } from "tabler-icons-react";
import { ChangeEventHandler, ReactNode, useRef, useState } from "react";

interface TextInputProps {
  value?: string;
  onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
  icon?: ReactNode;
  iconWidth?: number;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  caption?: string;
  successMsg?: string;
  errorMsg?: string;
  status?: "DEFAULT" | "SUCCESS" | "ERROR";
  resetHandler?: Function;
}

export const LitTextInput = (props: TextInputProps) => {
  const [focused, setFocused] = useState(false);
  let description;

  if (props.status == "ERROR") {
    description = props?.errorMsg;
  } else if (props.status == "SUCCESS") {
    description = props?.successMsg;
  } else {
    description = props?.caption;
  }

  const { classes, cx, theme } = useStyles({
    floating: (props.value && props.value?.trim().length >= 0) || focused,
    disabled: props.disabled ? props.disabled : false,
    inputStatus: props.status ? props.status : "DEFAULT",
  });

  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      label={
        <LitText
          screenType="desktop"
          color={getDescColor(theme, props.status ? props.status : "DEFAULT")}
          size="xs"
          typographyVariant="text"
        >
          {props?.label}
        </LitText>
      }
      rightSection={
        <UnstyledButton
          onClick={() => {
            props.resetHandler && props.resetHandler("");
          }}
          sx={{
            display: `${
              props.value && props.value?.trim().length >= 0 ? "block" : "none"
            }`,
          }}
        >
          <X size={24} strokeWidth={2} color={"black"} />
        </UnstyledButton>
      }
      placeholder={props?.placeholder}
      classNames={classes}
      value={props.value}
      onChange={props.onChangeHandler}
      disabled={props.disabled}
      description={description}
      required={props.required}
      inputWrapperOrder={["label", "input", "description", "error"]}
    />
  );
};

const useStyles = createStyles(
  (
    theme,
    {
      floating,
      disabled,
      inputStatus,
    }: {
      floating: boolean;
      disabled?: boolean;
      inputStatus: "DEFAULT" | "SUCCESS" | "ERROR";
    }
  ) => ({
    root: {
      position: "relative",
      borderRadius: theme.radius.md,
      height: "80px",
      opacity: disabled ? 0.5 : 1,
    },
    input: {
      height: "56px",
      backgroundColor: theme.other.colors.inputBg,
      paddingTop: floating ? "20px" : "1px" /* Because of the placeholder */,
      paddingLeft: theme.spacing.xl,
      "&:focus": {
        outline: "none",
        border: `1px solid ${getDescColor(theme, inputStatus)}`,
        backgroundColor: "white",
      },
      "&::placeholder": {
        color: theme.other.colors.label,
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    label: {
      display: floating ? "inline-block" : "none",
      position: "absolute",
      pointerEvents: "none",
      paddingLeft: theme.spacing.xl,
      paddingTop: theme.spacing.sm / 2,
      zIndex: 1,
      lineHeight: "14px",
    },
    rightSection: {
      width: "56px",
    },
    description: {
      paddingLeft: theme.spacing.xl,
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: "20px",
      color: getDescColor(theme, inputStatus),
    },
    wrapper: {
      marginBottom: 0,
    },
  })
);

const getDescColor = (
  theme: MantineTheme,
  status: "DEFAULT" | "SUCCESS" | "ERROR"
) => {
  if (status == "ERROR") {
    return theme.other.colors.error;
  } else if (status == "SUCCESS") {
    return theme.other.colors.success;
  } else {
    return theme.other.colors.placeholder;
  }
};

/*
We are going with the ideology of getting all the messages from the user initially not
providing him flexibility of changing the messages : 

Success 
Error
Caption

Getting input state from the user : depending on that we will show the relevant
message using description 

*/
