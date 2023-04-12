import {
  useMantineTheme,
  AppShell,
  Navbar,
  MediaQuery,
  Text,
  Aside,
  Header,
  Burger,
  Box,
  Stack,
} from "@mantine/core";
import { useState } from "react";
import { LitButton } from "./customComponents/Buttons/LitButton";
import { LitText } from "./customComponents/Text/LitText";
import { HomeIndex } from "./Pages/Home/HomeIndex";
import { litColors } from "./theme/theme";
import { Routes, Route } from "react-router-dom";
import { DetailIndex } from "./Pages/Detail/DetailIndex";
import { DiscoverCreatorIndex } from "./Pages/DiscoverCreator/DiscoverCreatorIndex";
import { UserProfileIndex } from "./Pages/UserProfile/UserProfileIndex";
import { Flex } from "./customComponents/Flex";
import { ProfileMenu } from "./Pages/Home/ProfileMenu";
import { NotificationMenu } from "./Pages/Home/NotificationMenu";
import { MyProfileIndex } from "./Pages/UserProfile/MyProfileIndex";
import { TestPageIndex } from "./Pages/TestPage/TestPageIndex";
import { JoinCommunity } from "./Pages/JoinCommunity/JoinCommunity";
import { AboutOpenArt } from "./Pages/AboutOpenArt/AboutOpenArt";

export const AppSkeleton = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : litColors.offWhite,
          /* THis needs to be corrected ( due to below css the application is not looking good on large screen ) */
          paddingLeft: 0,
          paddingRight: "0 !important",
          paddingTop: "calc(var(--mantine-header-height))",
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          sx={{ justifyContent: "space-around" }}
        >
          <Stack spacing="xl" align="center">
            <LitText
              component="a"
              screenType="desktop"
              size="sm"
              typographyVariant="display-bold"
              href="https://google.com"
            >
              About OpenArt
            </LitText>
            <LitText
              component="a"
              screenType="desktop"
              size="sm"
              typographyVariant="display-bold"
              href="https://google.com"
            >
              Blog
            </LitText>
            <LitText
              component="a"
              screenType="desktop"
              size="sm"
              typographyVariant="display-bold"
              href="https://google.com"
            >
              Help
            </LitText>
            <LitText
              component="a"
              screenType="desktop"
              size="sm"
              typographyVariant="display-bold"
              href="https://google.com"
            >
              Contact
            </LitText>
          </Stack>
          <LitButton fullWidth={true} variant="primary" size="large">
            <LitText
              color="white"
              typographyVariant="link"
              screenType="mobile"
              size="lg"
            >
              Connect wallet
            </LitText>
          </LitButton>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img src="OpenArtLogo.svg" alt="" />
            </Box>
            <Flex containerType="flex" gap="15px">
              <NotificationMenu />
              <ProfileMenu />
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.other.colors.titleActive}
                />
              </MediaQuery>
            </Flex>
          </div>
        </Header>
      }
    >
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/test" element={<TestPageIndex />} />
        <Route path="/detail" element={<DetailIndex />} />
        <Route path="/discover" element={<DiscoverCreatorIndex />} />
        <Route path="/join" element={<JoinCommunity />} />
        <Route path="/about" element={<AboutOpenArt />} />
        <Route
          path="/user-profile"
          element={
            <UserProfileIndex
              bgImageUrl="Creators/HabeshawBg.png"
              mainImageUrl="Creators/HabeshawMain.png"
              userName="Gift Habeshaw"
              userId="52fs5ge5g45sov45a"
              noFollowing="150"
              noFollowers="2024"
              description="Trevor Jackson is a multi-disciplinary artist exploring analog + digital realms since 1988. Collaborators inc Apple, BMW, Comme Des Garçons, ICA, NTS, Sonos,  Stone Island, Tate Modern + Warp."
              membershipDuration="2021"
            />
          }
        />
        <Route
          path="/my-profile"
          element={
            <MyProfileIndex
              bgImageUrl="Creators/LisaHabeshawBg.png"
              mainImageUrl="Creators/LisaHabeshawMain.png"
              userName="Gift Habeshaw"
              userId="52fs5ge5g45sov45a"
              noFollowing="150"
              noFollowers="2024"
              description="Trevor Jackson is a multi-disciplinary artist exploring analog + digital realms since 1988. Collaborators inc Apple, BMW, Comme Des Garçons, ICA, NTS, Sonos,  Stone Island, Tate Modern + Warp."
              membershipDuration="2021"
            />
          }
        />
      </Routes>
    </AppShell>
  );
};
