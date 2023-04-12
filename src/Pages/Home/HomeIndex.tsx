import { createStyles, Grid, Group, TextInput, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { Search, X } from "tabler-icons-react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { FreshNFTItem, OnGoingBidNFTItem, SoldNFTItem } from "./NFTItem";
import { StatusCircle } from "../../customComponents/OpenArtTemplate/StatusCircle";
import { HotBids } from "./HotBids";
import { HotCollection } from "./HotCollection";
import { Image } from "@mantine/core";
import { Flex } from "../../customComponents/Flex";
import { Footer } from "./Footer";

function Demo() {
  return (
    <div style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}>
      <Image
        radius="md"
        src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt="Random unsplash image"
      />
    </div>
  );
}
export const HomeIndex = () => {
  const getLiveAuctionList = () => {
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
            <StatusCircle mr="7px" width={"12px"} color={litColors.error} />
            Live auctions
          </LitText>
          <LitButton variant="subtle" size="medium">
            <LitText color={litColors.label} screenType="mobile" typographyVariant="text" size="md">
              View all
            </LitText>
          </LitButton>
        </Grid.Col>
        <Grid.Col
          span={4}
          mt="20px"
          sx={{
            gap: "40px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SoldNFTItem
            nftName="Silent Color"
            soldPrice="2.00 ETH"
            status={"SOLD"}
            nftImgUrl="NFT/SilentColor.png"
            isLiked={false}
            creator={{
              firstName: "Pawel",
              lastName: "Czerwinski",
              designation: "Creator",
              status: "ONLINE",
              imgUrl: "asd",
            }}
          />
          <SoldNFTItem
            nftName="George"
            soldPrice="2.00 ETH"
            status={"SOLD"}
            nftImgUrl="NFT/George.png"
            isLiked={false}
            creator={{
              firstName: "Pawel",
              lastName: "Czerwinski",
              designation: "Creator",
              status: "ONLINE",
              imgUrl: "asd",
            }}
          />

          <OnGoingBidNFTItem
            nftName="Mirror"
            status={"ONGOING-BID"}
            currentBidPrice={"2.00 ETH"}
            EndingIn={"27m 30s"}
            nftImgUrl="NFT/Mirror.png"
            isLiked={false}
            creator={{
              firstName: "Pawel",
              lastName: "Czerwinski",
              designation: "Creator",
              status: "ONLINE",
              imgUrl: "asd",
            }}
          />

          <OnGoingBidNFTItem
            nftName="Magic Mar"
            status={"ONGOING-BID"}
            currentBidPrice={"2.00 ETH"}
            EndingIn={"27m 30s"}
            nftImgUrl="NFT/MagicMar.png"
            isLiked={false}
            creator={{
              firstName: "Pawel",
              lastName: "Czerwinski",
              designation: "Creator",
              status: "ONLINE",
              imgUrl: "asd",
            }}
          />
          <OnGoingBidNFTItem
            nftName="Shedd Aquarium"
            status={"ONGOING-BID"}
            currentBidPrice={"2.00 ETH"}
            EndingIn={"27m 30s"}
            nftImgUrl="NFT/SheddAquarium.png"
            isLiked={false}
            creator={{
              firstName: "Pawel",
              lastName: "Czerwinski",
              designation: "Creator",
              status: "ONLINE",
              imgUrl: "asd",
            }}
          />
        </Grid.Col>
      </>
    );
  };

  const getFreshNFTItem = () => {
    return (
      <Grid.Col span={4}>
        <FreshNFTItem
          nftName="Silent Wave"
          reservePriceEth="1.50 ETH"
          reservePriceDollar="2,683.7"
          status={"FRESH"}
          nftImgUrl="NFT/SilentWave.png"
          isLiked={false}
          creator={{
            firstName: "Pawel",
            lastName: "Czerwinski",
            designation: "Creator",
            status: "ONLINE",
            imgUrl: "asd",
          }}
        />
      </Grid.Col>
    );
  };

  return (
    <>
      <Grid columns={4} mr="0" gutter={0} px="16px" py="16px">
        <Grid.Col span={4}>
          <LitText mb={"4px"} align="center" screenType="desktop" component="div" typographyVariant="link" size="md" color={litColors.label}>
            Discover, collect, and sell
          </LitText>
          <LitText screenType="desktop" align="center" component="div" typographyVariant="display-bold" size="sm" color={litColors.titleActive}>
            Your Digital Art
          </LitText>
        </Grid.Col>
        <Grid.Col span={4} mt={"25px"}>
          <SearchBar />
        </Grid.Col>
      </Grid>
      <Grid sx={{ backgroundColor: litColors.bg }} columns={4} px="16px" py="25px" gutter={0}>
        {getFreshNFTItem()}
        {getLiveAuctionList()}
        <HotBids />
        <HotCollection />
        <Footer/>
      </Grid>
    </>
  );
};

const createSearchBarStyles = createStyles((theme, focus: boolean) => ({
  input: {
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "22px",
    backgroundColor: litColors.inputBg,
    color: focus ? litColors.titleActive : litColors.placeholder,
  },
  rightSection: {
    marginRight: "8px",
  },
}));

const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const { classes } = createSearchBarStyles(value.trim().length > 0 || focused);

  return (
    <Group px="8px">
      <TextInput
        sx={{ flex: 1 }}
        size="md"
        icon={<Search size={16} strokeWidth={2} color={"black"} />}
        placeholder="Search items, collections, and accounts"
        classNames={classes}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        rightSection={
          <UnstyledButton
            sx={{
              display: `${value && value?.trim().length >= 0 ? "block" : "none"}`,
            }}
            onClick={() => setValue("")}
          >
            <X size={16} strokeWidth={2} color={"black"} />
          </UnstyledButton>
        }
      />
      {value.trim().length > 0 && (
        <LitButton variant={"text"} onClick={() => setValue("")}>
          <LitText screenType="desktop" typographyVariant="link" size="sm">
            Cancel
          </LitText>
        </LitButton>
      )}
    </Group>
  );
};
