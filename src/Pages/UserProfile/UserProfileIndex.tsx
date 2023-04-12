import { Avatar, createStyles, Box, Grid } from "@mantine/core";
import React from "react";
import { BrandInstagram, BrandTwitter, Link } from "tabler-icons-react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { Flex } from "../../customComponents/Flex";
import { LitAvatar } from "../../customComponents/LitAvatar";
import { LitText } from "../../customComponents/Text/LitText";
import { linearGradients, litColors } from "../../theme/theme";
import { Image } from "@mantine/core";
import { NFTItem, SoldNFTItem } from "../Home/NFTItem";

const cardStyles = createStyles((theme, props: UserProfileProps) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  profileImage: {
    border: "4px solid white",
  },
  section: {
    backgroundImage: `url(${props.bgImageUrl})`,
    height: 160,
    backgroundSize: "cover",
    backgroundPositionY: "center",
  },
}));

interface UserProfileProps {
  bgImageUrl: string;
  mainImageUrl: string;
  userName: string;
  userId: string;
  noFollowing: string;
  noFollowers: string;
  description: string;
  membershipDuration: string;
}

export const UserProfileIndex = (props: UserProfileProps) => {
  const { classes } = cardStyles(props);
  /* const avatarStyles = avatarStyles(); */

  const getAvatarList = () => {
    return (
      <Avatar.Group spacing="sm" mt={9}>
        <LitAvatar gradient={linearGradients.secondary} radius="xl">
          <LitText
            screenType="mobile"
            typographyVariant="link"
            size="lg"
            color={litColors.offWhite}
          >
            A
          </LitText>
        </LitAvatar>
        <LitAvatar src="profileImg.svg" radius="xl" />
        <LitAvatar gradient={linearGradients.accent} radius="xl">
          <LitText
            screenType="mobile"
            typographyVariant="link"
            size="lg"
            color={litColors.offWhite}
          >
            C
          </LitText>
        </LitAvatar>
        <LitAvatar gradient={linearGradients.black} radius="xl">
          <LitText
            screenType="mobile"
            typographyVariant="link"
            size="lg"
            color={litColors.offWhite}
          >
            B
          </LitText>
        </LitAvatar>
        <LitAvatar src="profileImg.svg" radius="xl" />
      </Avatar.Group>
    );
  };

  return (
    <>
      <Grid
        columns={4}
        mr="0"
        gutter={0}
        sx={{ backgroundColor: litColors.bg, flexDirection: "column" }}
      >
        <Box className={classes.section} />
        <Avatar
          src={props.mainImageUrl}
          size={130}
          radius={80}
          mx="auto"
          mt={-65}
          className={classes.profileImage}
        />
        <Flex containerType="flex" flexDirection="column" alignItems="center">
          <LitText
            screenType="desktop"
            typographyVariant="link"
            size="md"
            color={litColors.body}
          >
            {props.userName}
          </LitText>
          <LitText
            screenType="mobile"
            typographyVariant="text"
            size="sm"
            color={litColors.label}
          >
            {props.userId}
          </LitText>
        </Flex>

        <Grid.Col px="16px">
          <Flex containerType="flex" flexDirection="row" gap="35px" my={25}>
            <div>
              <LitText
                screenType="mobile"
                typographyVariant="display-bold"
                size="md"
                color={litColors.body}
              >
                150
              </LitText>
              <LitText
                screenType="desktop"
                typographyVariant="link"
                size="md"
                color={litColors.label}
              >
                Following
              </LitText>
            </div>
            <div>
              <LitText
                screenType="mobile"
                typographyVariant="display-bold"
                size="md"
                color={litColors.body}
              >
                2024
              </LitText>
              <LitText
                screenType="desktop"
                typographyVariant="link"
                size="md"
                color={litColors.label}
              >
                Followers
              </LitText>
            </div>
            <LitButton variant="secondary" fullWidth={true}>
              Follow
            </LitButton>
          </Flex>
          <LitText screenType="mobile" typographyVariant="text" size="lg">
            Followed by
          </LitText>
          {getAvatarList()}
          <LitText
            color={litColors.label}
            typographyVariant="text"
            screenType="mobile"
            size="sm"
            mt={30}
          >
            Trevor Jackson is a multi-disciplinary artist exploring analog +
            digital realms since 1988. Collaborators inc Apple, BMW, Comme Des
            Garçons, ICA, NTS, Sonos, Stone Island, Tate Modern + Warp.
          </LitText>
          <LitText
            color={litColors.titleActive}
            typographyVariant="text"
            screenType="mobile"
            size="md"
            mt={20}
          >
            Member since 2021
          </LitText>
          <Flex
            containerType="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap="10px"
            mt={16}
          >
            <Flex
              containerType="flex"
              flexDirection="row"
              sx={{
                padding: "10px",
                borderRadius: "32px",
                background: litColors.offWhite,
              }}
            >
              <Image src="Icons/twitterFill.png" width={20} height={20} />
              <LitText
                ml={5}
                screenType="mobile"
                typographyVariant="link"
                size="md"
              >
                @openart
              </LitText>
            </Flex>
            <Flex
              containerType="flex"
              flexDirection="row"
              sx={{
                padding: "10px",
                borderRadius: "32px",
                background: litColors.offWhite,
              }}
            >
              <BrandInstagram size={20} />
              <LitText
                ml={5}
                screenType="mobile"
                typographyVariant="link"
                size="md"
              >
                @openart.design
              </LitText>
            </Flex>
            <Flex
              containerType="flex"
              flexDirection="row"
              sx={{
                padding: "10px",
                borderRadius: "32px",
                background: litColors.offWhite,
              }}
            >
              <Link size={20} />
              <LitText
                ml={5}
                screenType="mobile"
                typographyVariant="link"
                size="md"
              >
                Openart.design
              </LitText>
            </Flex>
          </Flex>

          <Flex mt={40} containerType="flex" gap="40px" flexDirection="column">
            <SoldNFTItem
            status="SOLD"
            soldPrice="2.00 ETH"
              nftName="Robo Brothers"
              nftImgUrl="NFT/Robo.png"
              isLiked={false}
              creator={{
                firstName: "Ashish",
                status: "ONLINE",
                lastName: "Kumar",
                imgUrl: "",
                designation: "Creator",
              }}
            />
                <SoldNFTItem
                 status="SOLD"
                 soldPrice="2.00 ETH"
              nftName="George"
              nftImgUrl="NFT/RoofTop.png"
              isLiked={false}
              creator={{
                firstName: "Piyush",
                status: "ONLINE",
                lastName: "Yadav",
                imgUrl: "",
                designation: "Creator",
              }}
            />
                <SoldNFTItem
                 status="SOLD"
                 soldPrice="2.00 ETH"
              nftName="Robo Brothers"
              nftImgUrl="NFT/Robo.png"
              isLiked={false}
              creator={{
                firstName: "Ashish",
                status: "ONLINE",
                lastName: "Kumar",
                imgUrl: "",
                designation: "Creator",
              }}
            />
                <SoldNFTItem
                status="SOLD"
                soldPrice="2.00 ETH"
              nftName="Ocean"
              nftImgUrl="NFT/Tortoise.png"
              isLiked={false}
              creator={{
                firstName: "Ashish",
                status: "ONLINE",
                lastName: "Kumar",
                imgUrl: "",
                designation: "Creator",
              }}
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </>
  );
};
