import { Box, Grid } from "@mantine/core";
import { readFileSync } from "fs";
import { Image } from "@mantine/core";
import React from "react";
import { Flex } from "../../customComponents/Flex";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { ExternalLink } from "tabler-icons-react";
import { text } from "node:stream/consumers";

export const ActivityList = () => {
  return (
    <Grid.Col my={25}>
      <LitText screenType="mobile" typographyVariant="text" size="lg" mb={25}>
        Activity
      </LitText>
      <Flex flexDirection="column" containerType="flex" gap="12px">
        <Activity personId="@david" time="June 04, 2021 at 12:00 am" activityType="SOLD" priceETH="1.50 ETH" priceDollar="$2,683.73" />
        <Activity personId="@pawel09" time="June 04, 2021 at 12:00 am" activityType="BID" priceETH="1.50 ETH" priceDollar="$2,683.73" />
        <Activity personId="@han152" time="June 04, 2021 at 12:00 am" activityType="LIST" priceETH="1.50 ETH" priceDollar="$2,683.73" />
      </Flex>
    </Grid.Col>
  );
};

interface ActivityProps {
  personId: string;
  time: string;
  activityType: "LIST" | "BID" | "SOLD";
  priceETH: string;
  priceDollar: string;
}

const textMap = {

  "LIST" : "Listing by",
  "BID" : "Bid place by",
  "SOLD" : "Auction won by"

}

const Activity = (props: ActivityProps) => {
  
  const topLine = textMap[props.activityType] + " " + props.personId;
  const bottomLine = props.activityType == "SOLD" ? `Sold for ${props.priceETH}` : props.priceETH;
  


  return (
    <Flex containerType="flex" sx={{ backgroundColor: litColors.offWhite, borderRadius: "24px", padding: "12px" }}>
      <Image src="profileImg.svg" width={52} height={52} radius={26} mr={10} />
      <Flex containerType="block" flex="1">
        <LitText typographyVariant="link" screenType="mobile" size="sm" color={litColors.titleActive}>
          {topLine}
        </LitText>
        <LitText typographyVariant="text" screenType="mobile" size="sm" color={litColors.label}>{props.time}</LitText>
        <LitText component="span" mt={7} typographyVariant="link" screenType="mobile" size="md" color={litColors.titleActive}>
          {bottomLine} <LitText component="span" typographyVariant="text" screenType="mobile" size="sm" color={litColors.placeholder}>{props.priceDollar}</LitText>
        </LitText>
      </Flex>
      <ExternalLink size={24} strokeWidth={2} color={litColors.placeholder} />
    </Flex>
  );
};
