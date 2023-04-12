import { Avatar, Box, Popover } from "@mantine/core";
import React, { useId } from "react";
import { Bell, User } from "tabler-icons-react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { Flex } from "../../customComponents/Flex";
import { LitDivider } from "../../customComponents/LitDivider";
import { LitPopover } from "../../customComponents/LitPopover";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";

interface Notification {
  imgUrl: string;
  title: string;
  description: string;
  time: string;
}

const notificationStaticData: Notification[] = [
  {
    imgUrl: "Notifications/EthReceived.png",
    title: "ETH received",
    description: "1.05 ETH received",
    time: "1 day ago",
  },
  {
    imgUrl: "Notifications/UploadSuccess.png",
    title: "Upload success",
    description: "ready to sell",
    time: "1 day ago",
  },
  {
    imgUrl: "Notifications/FollowCollection.png",
    title: "Eric follow your collection",
    description: "Supper wave collection",
    time: "1 day ago",
  },
  {
    imgUrl: "Notifications/EthReceived2.png",
    title: "ETH received",
    description: "1.05 ETH recived",
    time: "1 day ago",
  },
];

export const NotificationMenu = () => {
  return (
    <>
      <LitPopover>
        <Popover.Target>
          <Box component="span">
            <Bell size={24} strokeWidth={1.5} color={"black"} />
          </Box>
        </Popover.Target>
        <Popover.Dropdown px={20}>
          <LitText typographyVariant="display-bold" screenType="mobile" size="sm">
            Notification
          </LitText>
          {notificationList(notificationStaticData)}
          <LitButton variant="primary" fullWidth={true} my={20}>
            <LitText color={litColors.offWhite} typographyVariant="link" screenType="mobile" size="md">
              View all
            </LitText>
          </LitButton>
          <LitButton variant="secondary" fullWidth={true} my={16}>
            <LitText color={litColors.label} typographyVariant="link" screenType="mobile" size="md">
              Mark as all read
            </LitText>
          </LitButton>
        </Popover.Dropdown>
      </LitPopover>
    </>
  );
};

const notificationList = (notificationList: Notification[]) => {
  return (
    <Flex mt={15}>
      {notificationList.map((notification,index) => (
        <div  key={index}>
        <Flex containerType="flex" gap="16px">
          <Avatar src={notification.imgUrl} size={70} radius={16} />
          <Box>
            <LitText color={litColors.titleActive} typographyVariant="link" screenType="mobile" size="md">
              {notification.title}
            </LitText>
            <LitText color={litColors.label} typographyVariant="text" screenType="mobile" size="md">
              {notification.description}
            </LitText>
            <LitText color={litColors.placeholder} typographyVariant="text" screenType="mobile" size="sm">
              {notification.time}
            </LitText>
          </Box>
        </Flex>
          {  index < notificationList.length -1 && <LitDivider type="THIN" my={10} /> }
          </div>
      ))}
      
     
    </Flex>
  );
};
