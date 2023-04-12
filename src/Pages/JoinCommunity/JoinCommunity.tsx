import { Box } from "@mantine/core";
import React from "react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { Image } from '@mantine/core';
import { Flex } from "../../customComponents/Flex";

export const JoinCommunity = () => {
  return (
    <>
    <Box px={16} my={30} >
      <LitText screenType="mobile" typographyVariant="link" size="lg" align="center">
        Join the Community Upvote to access creator tools.
      </LitText>
      <LitText screenType="mobile" typographyVariant="text" size="md" align="center" my={20} >
        With the Community Upvote, artists are encouraged to support other
        artists and to set the stage for a model of community-led curation that
        puts power in the hands of creators.
      </LitText>
      <LitButton variant="primary" fullWidth={true} size="large" my={20}>
        <LitText screenType="mobile" typographyVariant="link" size="lg" color={litColors.offWhite}>
          Join Community Upvote
        </LitText>
      </LitButton>
      <Flex containerType="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Image src="globe.png" width={165} height={165}  />
      <LitText screenType="mobile" typographyVariant="text" size="md" color={litColors.body} align="center">
      Current number of profiles on the Community Upvote:
        </LitText>
        <LitText screenType="mobile" typographyVariant="display-bold" size="sm" color={litColors.body} align="center">
      52.000
        </LitText>
      </Flex>
      </Box>
    </>
  );
};
