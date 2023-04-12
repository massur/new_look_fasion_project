import { Box, Card, Image, Paper } from "@mantine/core";
import React from "react";
import { Flex } from "../../customComponents/Flex";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";

export const AboutOpenArt = () => {
  return (
    <>
      <Box px={16}>
        <Flex
          flexDirection="column"
          containerType="flex"
          alignItems="center"
          mt={30}
        >
          <LitText typographyVariant="link" size="lg" screenType="mobile">
            About OpenArt
          </LitText>
          <Image src="processor.png" width={192} height={192} />
          <LitText
            typographyVariant="text"
            size="md"
            screenType="mobile"
            align="center"
            px={32}
          >
            OpenArt help anyone create a beautiful website, landing page, app to
            collect NFTs digital art
          </LitText>
        </Flex>
        <LitText typographyVariant="link" size="lg" screenType="mobile" mt={30}>
          Crypto for Creative Communities
        </LitText>
        <LitText
          typographyVariant="text"
          size="md"
          screenType="mobile"
          px={16}
          mt={12}
        >
          NFTs—non-fungible tokens—are empowering artists, musicians, and all
          kinds of genre-defying digital creators to invent a new cultural
          paradigm. How this emerging culture of digital art ownership looks is
          up to all of us.
        </LitText>

        <Box>
          <LitText
            typographyVariant="link"
            size="lg"
            screenType="mobile"
            mt={28}
            color={litColors.titleActive}
          >
            How it work
          </LitText>
          <Flex flexDirection="row" gap="10px" containerType="flex" mt={40}>
            <Paper shadow="md" p="xl" radius="xl" >
                <Image src="BuildTogether.png" width={114} height={114} />
                <LitText screenType="mobile" typographyVariant="link" size="md" align="center">Build together</LitText>
            </Paper>
              
            <Paper shadow="md" p="xl" radius="xl" > 
                <Image src="Trust.png"  width={114} height={114}  />
                <LitText screenType="mobile" typographyVariant="link" size="md" align="center" >Trust</LitText>
            </Paper>
            </Flex>
        </Box>
        <Box px={16}>
          <LitText
            typographyVariant="link"
            size="md"
            screenType="mobile"
            mt={28}
            color={litColors.titleActive}
          >
            For Creators
          </LitText>
          <LitText typographyVariant="text" size="md" screenType="mobile">
            Creators are invited to join Foundation by members of the community.
            Once you’ve received an invite, you’ll need to set up a MetaMask
            wallet with ETH before you can create an artist profile and mint an
            NFT—which means uploading your JPG, PNG, or video file to IPFS, a
            decentralized peer-to-peer storage network. It will then be an NFT
            you can price in ETH and put up for auction on Foundation.
          </LitText>

          <LitText
            typographyVariant="link"
            size="md"
            screenType="mobile"
            mt={28}
            color={litColors.titleActive}
          >
            For Collectors
          </LitText>
          <LitText typographyVariant="text" size="md" screenType="mobile">
            On Foundation, anyone can create a profile to start collecting NFTs.
            All you’ll need is a MetaMask wallet and ETH, the cryptocurrency
            used to pay for all transactions on Ethereum. Artists list NFTs for
            auction at a reserve price, and once the first bid is placed, a
            24-hour auction countdown begins. If a bid is placed within the last
            15 minutes, the auction extends for another 15 minutes.
          </LitText>
        </Box>
      </Box>
    </>
  );
};
