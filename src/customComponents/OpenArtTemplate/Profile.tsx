import {
  Avatar,
  Box,
  Indicator,
  Stack,
  useComponentDefaultProps,
} from "@mantine/core";
import { litColors } from "../../theme/theme";
import { Flex } from "../Flex";
import { LitText } from "../Text/LitText";

export interface ProfileProps {
  firstName: string;
  lastName?: string;
  status: "ONLINE" | "OFFLINE";
  designation?: string;
  imgUrl: string;
}

const defaultProps: Partial<ProfileProps> = {
  lastName: "",
  designation: "",
};

const getLength = (val: string | undefined) => (val ? val.length : 0);

export const Profile = (props: ProfileProps) => {
  const { firstName, lastName, status, designation, imgUrl } =
    useComponentDefaultProps("Profile", defaultProps, props);

  const statusCircleColor = {
    ONLINE: litColors.success,
    OFFLINE: litColors.placeholder,
  }[props.status];

  const flexDirection =
    getLength(lastName) > 0 || getLength(designation) > 0 ? "row" : "column";
  const gap = flexDirection === "row" ? "10px" : "0";

  return (
    <Flex flexDirection={flexDirection} gap={gap} containerType="inline-flex">
      <Indicator
        size={12}
        color={statusCircleColor}
        position="top-end"
        offset={8}
      >
        <Avatar src="profileImg.svg" alt="Creator Name" radius="xl" size={48} />
      </Indicator>
      <Stack spacing={0} justify="center">
        <LitText
          screenType="desktop"
          typographyVariant="link"
          size="md"
          color={litColors.body}
        >
          {firstName + " " + lastName}
        </LitText>
        {getLength(designation) > 0 && (
          <LitText
            mt={"-5px"}
            screenType="desktop"
            size="xs"
            variant="text"
            color={litColors.label}
          >
            {designation}
          </LitText>
        )}
      </Stack>
    </Flex>
  );
};

interface ProfileContainerProps {
  children: React.ReactNode;
  status: "ONLINE" | "OFFLINE";
  imgUrl: string;
  direction: "row" | "column";
  gap: string;
}

export const ProfileContainer = (props: ProfileContainerProps) => {
  const statusCircleColor = {
    ONLINE: litColors.success,
    OFFLINE: litColors.placeholder,
  }[props.status];

  return (
    <Flex
      flexDirection={props.direction}
      gap={props.gap}
      containerType="inline-flex"
    >
      <Indicator
        size={12}
        color={statusCircleColor}
        position="top-end"
        offset={8}
      >
        <Avatar src="profileImg.svg" alt="Creator Name" radius="xl" size={48} />
      </Indicator>
      <Stack spacing={0} justify="center">
        {props.children}
      </Stack>
    </Flex>
  );
};
