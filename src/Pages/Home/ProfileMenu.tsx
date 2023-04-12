import { Avatar, Box, Button, Divider, Group, Popover, Radio, Switch, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { ArrowNarrowLeft, Bell, BorderRadius, FileInvoice, Photo, User, Wallet } from "tabler-icons-react";
import { LitPopover } from "../../customComponents/LitPopover";
import { Image } from "@mantine/core";
import { Flex } from "../../customComponents/Flex";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { LitDivider } from "../../customComponents/LitDivider";

export const ProfileMenu = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <LitPopover>
        <Popover.Target>
          <Box component="span">
            <User size={24} strokeWidth={1.5} color={"black"} />
          </Box>
        </Popover.Target>
        <Popover.Dropdown>
          <Flex pl={20} flexDirection="row" containerType="flex" alignItems="center" gap="18px">
            <Avatar src="./habeshaw.png" size={80} />
            <Box>
              <LitText color={litColors.titleActive} screenType="desktop" typographyVariant="link" size="md">
                Gift Habeshaw
              </LitText>
              <LitText color={litColors.label} screenType="mobile" typographyVariant="text" size="sm" mt={-5}>
                52fs5ge5g45sov45a
              </LitText>
            </Box>
          </Flex>
          <Group spacing="md" sx={{ backgroundColor: litColors.inputBg, borderRadius: "32px" }} p={16} mt={30}>
            <Wallet size={24} strokeWidth={1.5} color={"black"} />
            <Box>
              <LitText color={litColors.label} screenType="mobile" typographyVariant="text" size="md">
                Balance
              </LitText>
              <LitText mt={-2} color={litColors.titleActive} screenType="mobile" typographyVariant="display-bold" size="sm">
                5.000 ETH
              </LitText>
            </Box>
          </Group>
          <Flex pl={20} containerType="flex" flexDirection="column" gap="22px" my={25}>
            <Box className="vertical-text-bottom">
              <User size={24} strokeWidth={2} color={litColors.label} />
              <LitText ml={14} component="span" screenType="mobile" typographyVariant="text" size="md">
                My account
              </LitText>
            </Box>
            <Box className="vertical-text-bottom">
              <Photo size={24} strokeWidth={2} color={litColors.label} />
              <LitText ml={14} component="span" screenType="mobile" typographyVariant="text" size="md">
                My items
              </LitText>
            </Box>
            <Box className="vertical-text-bottom">
              <FileInvoice size={24} strokeWidth={2} color={litColors.label} />
              <LitText ml={14} component="span" screenType="mobile" typographyVariant="text" size="md">
                My invoice
              </LitText>
            </Box>
            <Box className="vertical-text-bottom">
              <ArrowNarrowLeft size={24} strokeWidth={2} color={litColors.label} />
              <LitText ml={14} component="span" screenType="mobile" typographyVariant="text" size="md">
                Sign out
              </LitText>
            </Box>
          </Flex>
          <LitDivider ml={-8} mr={-8} padded={false} type="THIN" />
          <Flex containerType="flex" flexDirection="row" justifyContent="space-between" px={15} py={15}>
            <LitText color={litColors.label} screenType="mobile" typographyVariant="link" size="md">
              Dark mode
            </LitText>
            <Switch size="sm" checked={darkMode} onChange={(event) => setDarkMode(event.currentTarget.checked)} />
          </Flex>
        </Popover.Dropdown>
      </LitPopover>
    </>
  );
};
