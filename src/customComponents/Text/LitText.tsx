import {
  Text,
  CSSObject,
  MantineColor,
  TextProps,
  createPolymorphicComponent,
} from "@mantine/core";
import litTypography from "../../theme/litTypography";
import {
  ScreenType,
  SizeVariants,
  TypographyVariants,
} from "../../theme/litTypography";
import { linearGradients } from "../../theme/theme";
import { useComponentDefaultProps } from "@mantine/core";

interface LitTextProps extends TextProps {
  size?: SizeVariants;
  typographyVariant?: TypographyVariants;
  screenType?: ScreenType;
  gradientType?: "primary" | "secondary" | "accent";
  color?: MantineColor;
  href?: string;
}

const defaultProps: Partial<LitTextProps> = {
  size: "md",
};

const _LitText = (props: LitTextProps) => {
  const {
    size,
    typographyVariant,
    screenType,
    gradientType,
    color,
    children,
    sx,
    ...others
  } = useComponentDefaultProps("LitText", defaultProps, props);

  const gradient = gradientType ? linearGradients[gradientType] : undefined;
  const variantType = gradientType ? "gradient" : "text";

  let cssProps = getCSSProps(typographyVariant, size, screenType);

  return (
    <Text
      {...others}
      gradient={gradient}
      sx={{...cssProps,...sx}}
      color={color}
      variant={variantType}
    >
      {children}
    </Text>
  );
};

const getCSSProps = (
  typographyVariant: TypographyVariants = "text",
  size: SizeVariants = "md",
  screenType: ScreenType = "desktop"
): CSSObject => {
  return litTypography[screenType][typographyVariant][size];
};

export const LitText = createPolymorphicComponent<"div", LitTextProps>(
  _LitText
);
/*
TODO : 
- Need to support alignment in the LitText


*/
