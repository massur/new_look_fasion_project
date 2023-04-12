import { AvatarProps, MantineGradient, createStyles, Avatar } from "@mantine/core";
import { litColors } from "../theme/theme";
import { LitText } from "./Text/LitText";

interface LitAvatarProps extends AvatarProps {
    gradient?: MantineGradient;
    text?: string;
  }
  
  const avatarStyles = createStyles((theme, props: LitAvatarProps) => ({
    placeholder: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "23px",
      letterSpacing: "0.62969px",
    },
    gradientClass: {
      background: theme.fn.gradient(props.gradient),
    },
    bgColorClass: {
      backgroundColor: props.color,
    },
  }));
  
export  const LitAvatar = (props: LitAvatarProps) => {
    const { classes, theme, cx } = avatarStyles(props);
    const { gradient, color, ...others } = props;
  
    if (props.gradient) {
      return (
        <Avatar
          classNames={{
            placeholder: cx(classes.placeholder, classes.gradientClass),
          }}
          {...others}
        >
          {props.text ? (
            <LitText
              component="span"
              color={litColors.offWhite}
              screenType="desktop"
              typographyVariant="display-bold"
              size="sm"
            >
              {props.text}
            </LitText>
          ) : (
            props.children
          )}
        </Avatar>
      );
    } else {
      return (
        <Avatar
          classNames={{
            placeholder: cx(classes.placeholder, classes.bgColorClass),
          }}
          {...others}
        >
         {props.text ? (
            <LitText
              component="span"
              color={litColors.offWhite}
              screenType="desktop"
              typographyVariant="display-bold"
              size="sm"
            >
              {props.text}
            </LitText>
          ) : (
            props.children
          )}
        </Avatar>
      );
    }
  };
  