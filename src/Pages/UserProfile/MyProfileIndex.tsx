import { Grid, Avatar, createStyles, Box } from "@mantine/core";
import React, { useState } from "react";
import { Edit, Pencil } from "tabler-icons-react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { Flex } from "../../customComponents/Flex";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { MyProfileEdit } from "./MyProfileEdit";

const cardStyles = createStyles((theme, props: MyProfileProps) => ({
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

interface MyProfileProps {
  bgImageUrl: string;
  mainImageUrl: string;
  userName: string;
  userId: string;
  noFollowing: string;
  noFollowers: string;
  description: string;
  membershipDuration: string;
}

export const MyProfileIndex = (props: MyProfileProps) => {
  const { classes } = cardStyles(props);
  const [editStatus, setEditStatus] = useState(false);

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
          {editStatus ? (
            <>
              <Flex
                containerType="flex"
                flexDirection="row"
                gap="35px"
                my={25}
                justifyContent="space-around"
              >
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
                <LitButton
                  variant="secondary"
                  onClick={() => setEditStatus(!editStatus)}
                >
                  <Pencil size={24} strokeWidth={2} color={litColors.body} />
                </LitButton>
              </Flex>
              <LitText
                screenType="mobile"
                typographyVariant="text"
                size="md"
                align="center"
              >
                Member since 2021
              </LitText>
              <LitText
                screenType="mobile"
                typographyVariant="link"
                size="lg"
                mt={70}
                align="center"
              >
                Your collection is empty.
              </LitText>
              <LitText
                screenType="mobile"
                typographyVariant="text"
                size="md"
                align="center"
                color={litColors.label}
                mt={10}
              >
                Start building your collection by placing bids on artwork.
              </LitText>
              <LitButton
                variant="secondary"
                fullWidth={true}
                size="large"
                mt={30}
              >
                <LitText
                  screenType="mobile"
                  typographyVariant="link"
                  size="lg"
                  color={litColors.body}
                >
                  Explore OpenArt
                </LitText>{" "}
              </LitButton>
            </>
          ) : (
            <>
              <MyProfileEdit />
            </>
          )}
        </Grid.Col>
      </Grid>
    </>
  );
};
