import { Carousel, Embla } from "@mantine/carousel";
import { Grid, Group, ActionIcon, Box } from "@mantine/core";
import React, { useState } from "react";
import { ArrowNarrowLeft, ArrowNarrowRight } from "tabler-icons-react";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { Image } from "@mantine/core";

interface BidProps {
    nftName: string;
    highestBid: string;
    nextBid: string;
    nftImgUrl: string;
  }
  
  const BidItem = (props: BidProps) => {
    return (
      <Box sx={{ width: "max-content" }}>
        <Image src={props.nftImgUrl} width="250px" height="300px" radius="lg" />
        <Group spacing="xs" grow={false} noWrap={false}>
          <Box mt="12px">
            <LitText component="span" typographyVariant="link" screenType="mobile" size="md" color={litColors.titleActive}>
              Inside Kings Cross
            </LitText>
            <LitText component="div" typographyVariant="text" screenType="mobile" size="sm" color={litColors.label}>
              Highest bid{" "}
              <LitText component="span" typographyVariant="link" screenType="mobile" size="sm" color={litColors.titleActive}>
                {props.highestBid}
              </LitText>
            </LitText>
          </Box>
          <Box sx={{ border: "1px solid #DCDCDC", borderRadius: "34px" }} p="5px 8px 2px 8px">
            <LitText component="span" typographyVariant="link" screenType="mobile" size="md" color={litColors.titleActive}>
              {props.nextBid}
            </LitText>
          </Box>
        </Group>
      </Box>
    );
  };

/**
 * TODO: Add profile icons ( list of people who have plaecd on that NFT )
 * @returns 
 */
export const HotBids = () => {

    const [embla, setEmbla] = useState<Embla | null>(null);

  return (
    <>
      <Grid.Col
        span={4}
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
        mt="85px"
      >
        <LitText color={litColors.titleActive} screenType="mobile" typographyVariant="display-bold" size="sm">
          <Image sx={{ display: "inline-block" }} src="Icons/fire.png" width="20px" height="20px" mr="6px" alt="Fire Icon" />
          Hot bid
        </LitText>
        <Group>
          <ActionIcon variant="subtle">
            <ArrowNarrowLeft
              size={24}
              strokeWidth={2}
              color={litColors.label}
              onClick={() => {
                embla?.scrollPrev();
              }}
            />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <ArrowNarrowRight
              size={24}
              strokeWidth={2}
              color={litColors.label}
              onClick={() => {
                embla?.scrollNext();
              }}
            />
          </ActionIcon>
        </Group>
      </Grid.Col>
      <Grid.Col my="25px">
        <Carousel slideGap="lg" withControls={false} align="start" getEmblaApi={setEmbla} slideSize="250px" initialSlide={0}>
          <Carousel.Slide>
            <BidItem nftImgUrl="NFT/InsideKingsCross.png" nftName={"Inside Kings Cross"} highestBid={"1.00 ETH"} nextBid={"2.3 ETH"} />
          </Carousel.Slide>
          <Carousel.Slide>
            <BidItem nftImgUrl="NFT/InsideKingsCross2.png" nftName={"Inside Kings Cross"} highestBid={"1.00 ETH"} nextBid={"2.3 ETH"} />
          </Carousel.Slide>
          <Carousel.Slide>
            <BidItem nftImgUrl="NFT/InsideKingsCross2.png" nftName={"Inside Kings Cross"} highestBid={"1.00 ETH"} nextBid={"2.3 ETH"} />
          </Carousel.Slide>
          <Carousel.Slide>
            <BidItem nftImgUrl="NFT/InsideKingsCross2.png" nftName={"Inside Kings Cross"} highestBid={"1.00 ETH"} nextBid={"2.3 ETH"} />
          </Carousel.Slide>
        </Carousel>
      </Grid.Col>
    </>
  );
};
