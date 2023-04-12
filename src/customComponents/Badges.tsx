import { Avatar, Box, ThemeIcon, useMantineTheme } from "@mantine/core";
import React from "react";
import { linearGradients, litColors } from "../theme/theme";
import { LitText } from "./Text/LitText";
import { CurrencyEthereum, ExternalLink } from "tabler-icons-react";
import { Flex } from "./Flex";

export const CreatorBadge = () => {
  const theme = useMantineTheme();

  return (
    <Flex
      sx={{ backgroundColor: litColors.offWhite, borderRadius: "52px", padding: "5px 16px 5px 5px" }}
      containerType="inline-flex"
      alignItems="center"
      gap="10px"
    >
      <Avatar
        size={32}
        color={litColors.offWhite}
        sx={{
          ".mantine-Avatar-placeholder": {
            background: theme.fn.gradient(linearGradients.secondary),
            color: theme.other.colors.offWhite,
          },
        }}
        radius="xl"
      >
        <LitText color={litColors.offWhite} typographyVariant="link" size="md">
          H
        </LitText>
      </Avatar>
      <LitText screenType="desktop" typographyVariant="link" size="sm">
        @openart
      </LitText>
    </Flex>
  );
};

interface LitTagsPropTypes {
  text: string;
}

export const LitTags = (props: LitTagsPropTypes) => (
  <Box sx={{ border: `1px solid ${litColors.line}`, display: "inline-block", borderRadius: "27px", padding: "4px 10px" }}>
    <LitText screenType="mobile" typographyVariant="text" size="sm" color={litColors.placeholder}>
      {props.text}
    </LitText>
  </Box>
);

interface LitTextLink {
  leftIcon: React.ReactNode;
  text: string;
}

export const LitTextLink = (props: LitTextLink) => {
  return (
    <Flex
      sx={{
        backgroundColor: litColors.offWhite,
        padding: "14px 16px",
        borderRadius: "16px",
        /* boxShadow: "0px 81px 106px rgba(0, 0, 0, 0.07), 0px 10.1425px 13.2728px rgba(0, 0, 0, 0.0290085)", */
      }}
      containerType="flex"
      flexDirection="row"
      gap="30px"
      alignItems="center"
    >
      {props.leftIcon}
      <LitText typographyVariant="link" screenType="mobile" size="md" sx={{ flex: 1 }}>
        {props.text}
      </LitText>
      <ExternalLink size={30} strokeWidth={2} color={litColors.placeholder} />
    </Flex>
  );
};
