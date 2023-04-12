import { ActionIcon, Box, Grid, Group, Image, Stack } from "@mantine/core";
import React from "react";
import {
  ChartPie,
  CurrencyBitcoin,
  Heart,
  Star,
  Upload,
} from "tabler-icons-react";
import { JsxElement } from "typescript";
import {
  CreatorBadge,
  LitTags,
  LitTextLink,
} from "../../customComponents/Badges";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { Flex } from "../../customComponents/Flex";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { ActivityList } from "./ActivityList";

const getBtnIcon = (icon: React.ReactNode) => (
  <ActionIcon
    sx={{
      backgroundColor: litColors.offWhite,
      filter:
        "drop-shadow(0px 81px 106px rgba(0, 0, 0, 0.07)) drop-shadow(0px 10.1425px 13.2728px rgba(0, 0, 0, 0.0290085))",
    }}
    size={40}
    radius={20}
  >
    {icon}
  </ActionIcon>
);

const getDetailSectionSold = () => {
  return (
    <>
      <Image
        src="Icons/StarIcon.png"
        width="27px"
        height="27px"
        sx={{ position: "absolute", right: "10px", top: "10px" }}
      />
      <LitText
        mb="20px"
        color={litColors.body}
        size="lg"
        screenType="mobile"
        typographyVariant="text"
      >
        Sold for{" "}
        <LitText
          component="span"
          size="sm"
          color={litColors.titleActive}
          screenType="mobile"
          typographyVariant="display-bold"
        >
          1.50 ETH
        </LitText>{" "}
        <LitText
          component="span"
          typographyVariant="link"
          screenType="mobile"
          size="md"
          color={litColors.placeholder}
        >
          $2683.73
        </LitText>
      </LitText>
      <Group spacing={0}>
        <LitText
          component="span"
          mr={10}
          color={litColors.body}
          size="lg"
          screenType="mobile"
          typographyVariant="text"
        >
          Owned by
        </LitText>
        <CreatorBadge />
      </Group>
    </>
  );
};

const getDetailSectionFresh = () => {
  return (
    <>
      <LitText
        screenType="mobile"
        typographyVariant="text"
        size="lg"
        color={litColors.body}
        mb={4}
      >
        Reserve Price
      </LitText>
      <LitText
        component="span"
        size="sm"
        color={litColors.titleActive}
        screenType="mobile"
        typographyVariant="display-bold"
      >
        1.50 ETH{" "}
      </LitText>
      <LitText
        component="span"
        typographyVariant="link"
        screenType="mobile"
        size="md"
        color={litColors.placeholder}
      >
        $2683.73
      </LitText>
      <LitText
        screenType="mobile"
        typographyVariant="text"
        size="md"
        color={litColors.label}
        mt={16}
      >
        Once a bid has been placed and the reserve price has been met, a 24 hour
        auction for this artwork will begin.
      </LitText>
      <LitButton mt={28} fullWidth={true} variant="primary" size="medium">
        <LitText
          component="span"
          typographyVariant="link"
          screenType="mobile"
          size="md"
          color={litColors.offWhite}
        >
          Place a bid
        </LitText>
      </LitButton>
    </>
  );
};

const getDetailSectionOngoingBid = () => {
  return (
    <>
      <LitText
        screenType="mobile"
        typographyVariant="text"
        size="lg"
        color={litColors.body}
        mb={4}
      >
        Current Bid
      </LitText>
      <LitText
        component="span"
        size="sm"
        color={litColors.titleActive}
        screenType="mobile"
        typographyVariant="display-bold"
      >
        1.50 ETH{" "}
      </LitText>
      <LitText
        component="span"
        typographyVariant="link"
        screenType="mobile"
        size="md"
        color={litColors.placeholder}
      >
        $2683.73
      </LitText>
      <LitText
        screenType="mobile"
        typographyVariant="text"
        size="lg"
        color={litColors.body}
        mt={18}
        mb={4}
      >
        Auction ending in
      </LitText>
      <Flex containerType="flex" gap="40px" >
        <Stack spacing={0}>
          <LitText screenType="mobile" typographyVariant="display-bold" size="sm" color={litColors.titleActive} >12</LitText>
          <LitText screenType="mobile" typographyVariant="text" size="sm" color={litColors.label} mt={-5} >hours</LitText>
        </Stack>
        <Stack spacing={0}>
        <LitText screenType="mobile" typographyVariant="display-bold" size="sm" color={litColors.titleActive} >30</LitText>
          <LitText screenType="mobile" typographyVariant="text" size="sm" color={litColors.label} mt={-5} >minutes</LitText>
        </Stack>
        <Stack spacing={0}>
        <LitText screenType="mobile" typographyVariant="display-bold" size="sm" color={litColors.titleActive} >25</LitText>
          <LitText screenType="mobile" typographyVariant="text" size="sm" color={litColors.label} mt={-5} >seconds</LitText>
        </Stack>
      </Flex>
      <LitButton mt={35} fullWidth={true} variant="primary" size="medium">
        <LitText
          component="span"
          typographyVariant="link"
          screenType="mobile"
          size="md"
          color={litColors.offWhite}
        >
          Place a bid
        </LitText>
      </LitButton>
    </>
  );
};

interface DetailSectionProps{
  status: "SOLD" | "FRESH" | "ONGOING-BID" 
}

const DetailSection = (props: DetailSectionProps)  => {

  switch(props.status){

    case "SOLD":
      return getDetailSectionSold();
    case "FRESH":
      return getDetailSectionFresh();
    case "ONGOING-BID" :
      return getDetailSectionOngoingBid();
    default:
      return <></>

  }
};




export const DetailIndex = () => {
  return (
    <Grid
      columns={4}
      mr="0"
      gutter={0}
      px="16px"
      py="50px"
      sx={{ backgroundColor: litColors.bg }}
    >
      <Grid.Col span={4}>
        <Image src="NFT/CrowdHug.svg" />
      </Grid.Col>
      <Grid.Col px="16px">
        <Flex
          my="10px"
          containerType="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <LitText
            component="span"
            screenType="mobile"
            typographyVariant="display-bold"
            size="sm"
          >
            Crowd Hug
          </LitText>
          <Flex containerType="inline-flex" gap="22px">
            {getBtnIcon(<Heart color={litColors.body} size={20} />)}
            {getBtnIcon(<Upload color={litColors.body} size={20} />)}
          </Flex>
        </Flex>
        <CreatorBadge />
        <LitText
          mt="10px"
          component="p"
          color={litColors.label}
          screenType="mobile"
          typographyVariant="text"
          size="sm"
        >
          Together with my design team, we designed this futuristic Cyberyacht
          concept artwork. We wanted to create something that has not been
          created yet, so we started to collect ideas of how we imagine the
          Cyberyacht could look like in the future.
        </LitText>
        <Flex containerType="flex" gap="2px" mb="20px">
          <LitTags text={"#color"} />
          <LitTags text={"#circle"} />
          <LitTags text={"#black"} />
          <LitTags text={"#art"} />
        </Flex>
        <Flex containerType="flex" flexDirection="column" gap="16px" mb="35px">
          <LitTextLink
            leftIcon={<CurrencyBitcoin />}
            text={"View on Etherscan"}
          />
          <LitTextLink leftIcon={<Star />} text={"View on IPFS"} />
          <LitTextLink leftIcon={<ChartPie />} text={"View on IPFS Metadata"} />
        </Flex>
        <Flex
          sx={{
            borderRadius: "24px",
            backgroundColor: litColors.offWhite,
            padding: "25px 16px",
            position: "relative",
          }}
        >
          <DetailSection status={"SOLD"} />
        </Flex>
      </Grid.Col>
      {<ActivityList />}
    </Grid>
  );
};
