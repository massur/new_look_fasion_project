import { Box, createPolymorphicComponent, DefaultProps } from "@mantine/core";

interface FlexProps extends DefaultProps {
  children?: React.ReactNode;
  containerType?: "flex" | "block" | "inline-flex" | "inline-block" ;
  /****** Container Props ********/
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
    gap?: string;
  /****** Child Props ********/
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
  flex?: string;
  /****** Common Layout Props ********/
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export const _Flex = (props: FlexProps) => {
  const {
    children,
    containerType,
    flexDirection,
    justifyContent,
    flexWrap,
    alignItems,
    flexGrow,
    flexShrink,
    flexBasis,
    gap,
    flex,
    ...others
  } = props;

  return (
    <Box
      style={{
        display: containerType,
        justifyContent: justifyContent || "flex-start",
        flexDirection: flexDirection || "row",
        flexGrow: flexGrow || 0,
        flexBasis: flexBasis || "auto",
        flexShrink: flexShrink || 1,
        flexWrap: flexWrap || "nowrap",
        flex: flex || "0 1 auto",
        alignItems: alignItems || "unset",
        gap: gap || "0px"
      }}
      {...others}
    >
      {children}
    </Box>
  );
};

export const Flex = createPolymorphicComponent<"div", FlexProps>(_Flex);
