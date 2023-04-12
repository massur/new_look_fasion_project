import { Chip, createStyles, Grid } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { Flex } from "../../customComponents/Flex";
import { LitToken } from "../../customComponents/LitToken";
import { LitText } from "../../customComponents/Text/LitText";
import { linearGradients, litColors } from "../../theme/theme";
import { CreatorCard } from "./CreatorCard";

export const DiscoverCreatorIndex = () => {

  return (
    <Grid columns={4} sx={{ backgroundColor: litColors.bg }} m={0}>
      <Grid.Col span={4} py={25} px={16}>
        <Flex
          containerType="flex"
          flexDirection="column"
          alignItems="center"
          mb={40}
        >
          <LitText
            screenType="mobile"
            typographyVariant="link"
            size="lg"
            color={litColors.titleActive}
          >
            Discover creator
          </LitText>
          <LitText
            screenType="mobile"
            typographyVariant="text"
            size="md"
            color={litColors.body}
            align="center"
            sx={{ inlineSize: "230px" }}
            mt={15}
          >
            Follow at least five creators to build your feed…
          </LitText>
        </Flex>
        <Flex containerType="flex" flexDirection="row">
          <Chip.Group position="center" multiple={false} defaultValue={"react"}>
           <LitToken>Feature Creator</LitToken>
           <LitToken>All Creator</LitToken>
          </Chip.Group>
        </Flex>
        <Flex containerType="flex" flexDirection="column" gap="40px" my={25}>
          <CreatorCard
            bgImageUrl={"Creators/KennedyBg.png"}
            mainImageUrl={"Creators/KennedyMain.png"}
            artistName={"Kennedy Yanko"}
            artistDescription="Kennedy Yanko is an artist working in found metal and paint skin. Her methods reflect a dual abstract expressionist-surr…"
            noFollowers="2024"
          />
          <CreatorCard
            bgImageUrl={"Creators/HoolyBg.png"}
            mainImageUrl={"Creators/HoolyBg.png"}
            artistName={"Holly Herndon"}
            artistDescription="A family of artists in Ethiopia making art in the style of tizita- nostalgia and longing for the past.📍"
            noFollowers="2024"
          />
          <CreatorCard
            bgImageUrl={"Creators/AddieBg.png"}
            mainImageUrl={"Creators/AddieMain.png"}
            artistName={"Addie Wagenknecht"}
            artistDescription="Addie Wagenknecht and Aiala Hernando. Documentation of the End of the Worlds."
            noFollowers="2024"
          />
          <CreatorCard
            bgImageUrl={"Creators/KinlawBg.png"}
            mainImageUrl={"Creators/KinlawMain.png"}
            artistName={"Kinlaw"}
            artistDescription="Audio Composer, Choreographer,Vocalist + Scientist
            ~Sigh of My Hand (1/3) is listed now ~
            made in partnersh…"
            noFollowers="2024"
          />
          <CreatorCard
            bgImageUrl={"Creators/JenniferBg.png"}
            mainImageUrl={"Creators/JenniferMain.png"}
            artistName={"Jennifer Mehigan"}
            artistDescription="LOW POLY GODDESS / Jennifer Mehigan is an interdisciplinary artist whose work engages with abstract manifestations of de…"
            noFollowers="1099"
          />
        </Flex>
        <LitButton
          variant="secondary"
          fullWidth={true}
          size="large"
          leftIcon={<Plus size={22} strokeWidth={2} color={"black"} />}
        >
          Load More
        </LitButton>
      </Grid.Col>
    </Grid>
  );
};
