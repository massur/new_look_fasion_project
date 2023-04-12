import { ActionIcon, Avatar, Box, Group, Paper, Stack } from "@mantine/core";
import { Image } from "@mantine/core";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { Heart } from "tabler-icons-react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { ReactNode } from "react";
import { ProfileProps, Profile } from "../../customComponents/OpenArtTemplate/Profile";
import { StatusCircle } from "../../customComponents/OpenArtTemplate/StatusCircle";

interface NFTItemProps {
  nftName: string;
  nftImgUrl: string;
  isLiked: boolean;
  creator: ProfileProps;
  children?: ReactNode;
}

interface FreshNFTItemProps extends Omit<NFTItemProps, "children"> {
  status: "FRESH";
  reservePriceEth: string;
  reservePriceDollar: string;
}

interface SoldNFTItemProps extends Omit<NFTItemProps, "children"> {
  status: "SOLD";
  soldPrice: string;
}

interface OnGoingBidNFTItemProps extends Omit<NFTItemProps, "children"> {
  status: "ONGOING-BID";
  currentBidPrice: string;
  EndingIn: string;
}

export const SoldNFTItem = (props: SoldNFTItemProps) => {
  return (
    <NFTItem {...props}>
      <Box
        sx={{
          backgroundColor: "white",
          height: "64px",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #333333",
          boxShadow: "0px 8px 24px rgba(69, 69, 69, 0.06)"
        }}
      >
        <LitText component="span" color={litColors.label} size="lg" typographyVariant="text" screenType="mobile">
          Sold For{" "}
          <LitText component="span" color={litColors.label} size="sm" typographyVariant="display-bold" screenType="mobile">
            2.00 ETH
          </LitText>
        </LitText>
      </Box>
    </NFTItem>
  );
};

export const FreshNFTItem = (props: FreshNFTItemProps) => {
  return (
    <NFTItem {...props}>
      <>
        <LitText mt="20px" color={litColors.titleActive} size="md" screenType="mobile" typographyVariant="text">
          Reserve Price{" "}
          <LitText component="span" size="sm" color={litColors.titleActive} screenType="mobile" typographyVariant="display-bold">
            {props.reservePriceEth}
          </LitText>{" "}
          <LitText component="span" typographyVariant="link" screenType="mobile" size="md" color={litColors.placeholder}>
            ${props.reservePriceDollar}{" "}
          </LitText>
        </LitText>
        <LitButton mt="15px" variant="primary" size="large" fullWidth={true}>
          <LitText screenType="mobile" typographyVariant="link" size="lg" color={litColors.offWhite}>
            Place a bid
          </LitText>
        </LitButton>
        <LitButton mt="15px" variant="secondary" size="large" fullWidth={true}>
          <LitText screenType="mobile" typographyVariant="link" size="lg" color={litColors.titleActive}>
            View artwork
          </LitText>
        </LitButton>
      </>
    </NFTItem>
  );
};

export const OnGoingBidNFTItem = (props: OnGoingBidNFTItemProps) => {
  return (
    <NFTItem {...props}>
      <Box
        sx={{
          backgroundColor: "white",
          height: "64px",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 40px",
          border: "1px solid #333333",
          boxShadow: "0px 8px 24px rgba(69, 69, 69, 0.06)"
        }}
      >
        <Box>
          <LitText component="div" screenType="mobile" typographyVariant="text" size="md" color={litColors.label}>
            <StatusCircle width="7px" ml="-13px" color={litColors.success} /> Current bid
          </LitText>
          <LitText component="div" screenType="mobile" typographyVariant="link" size="lg" color={litColors.titleActive}>
            {props.currentBidPrice}
          </LitText>
        </Box>
        <Box>
          <LitText component="div" screenType="mobile" typographyVariant="text" size="md" color={litColors.label}>
            Ending in
          </LitText>
          <LitText component="div" screenType="mobile" typographyVariant="link" size="lg" color={litColors.titleActive}>
            {props.EndingIn}
          </LitText>
        </Box>
      </Box>
    </NFTItem>
  );
};

export const NFTItem = (props: NFTItemProps) => {
  return (
    <>
      <div>
        <Paper p="md" radius={32} sx={{ filter: "drop-shadow(0px 10px 24px rgba(0, 0, 0, 0.08))" }} mb="12px">
          <Image src={props.nftImgUrl} alt="Silent Wave Image" height={400} width={320} radius={24} />
          <LitText mt="12px" color={litColors.titleActive} screenType="mobile" typographyVariant="display-bold" size="sm">
            {props.nftName}
          </LitText>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3px",
            }}
          >
            <Profile firstName="Pawel" lastName="Czerwinski" status="ONLINE" imgUrl="" designation="Creator" />
            <ActionIcon variant="transparent">
              <Heart size={24} strokeWidth={2} color={litColors.placeholder} style={{ alignSelf: "center" }} />
            </ActionIcon>
          </Box>
        </Paper>
        {props.children}
      </div>
    </>
  );
};
