import { Button, createStyles, Modal, Space } from "@mantine/core";
import React, { useState } from "react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { Flex } from "../../customComponents/Flex";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";


export const PlaceBidModal = () => {
  const [opened, setOpened] = useState(false);

  const getTextContainer = (title: string, val: string) => {
    return (
      <Flex containerType="flex" justifyContent="space-between">
        <LitText
          screenType="mobile"
          typographyVariant="text"
          size="md"
          color={litColors.body}
        >
          {title}
        </LitText>
        <LitText
          screenType="desktop"
          typographyVariant="link"
          size="sm"
          color={litColors.titleActive}
        >
          {val}
        </LitText>
      </Flex>
    );
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal
      size={340}
      
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <>
            <LitText
              screenType="mobile"
              typographyVariant="display-bold"
              size="sm"
              color={litColors.body}
            >
              Place a bid
            </LitText>
            <LitText
              screenType="mobile"
              typographyVariant="text"
              size="md"
              color={litColors.label}
            >
              You must bid at least 0.825 ETH
            </LitText>
          </>
        }
      >
        <Space h={40} />
        <LitText
          screenType="desktop"
          typographyVariant="link"
          size="sm"
          color={litColors.titleActive}
          mb={10}
        >
          Your bid
        </LitText>
        <Flex containerType="flex" flexDirection="column" mb={25} gap="3px">
          {getTextContainer("Enter bid", "ETH")}
          {getTextContainer("Your balance", "4.568 ETH")}
          {getTextContainer("Enter bid", "0.001 ETH")}
          {getTextContainer("Total", "0.001 ETH")}
        </Flex> 
        <LitButton variant="primary" fullWidth={true} size="large">
          <LitText
            screenType="mobile"
            typographyVariant="link"
            size="lg"
            color={litColors.offWhite}
          >
            Place a bid
          </LitText>
        </LitButton>
        <LitButton variant="secondary" fullWidth={true} size="large" mt={16} onClick={() => setOpened(false)}>
          <LitText
            screenType="mobile"
            typographyVariant="link"
            size="lg"
            color={litColors.titleActive}
          >
            Cancel
          </LitText>
        </LitButton>
      </Modal>
    </>
  );
};
