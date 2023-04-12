import { Button, Modal, Space } from "@mantine/core";
import { useState } from "react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { Image } from "@mantine/core";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { Flex } from "../../customComponents/Flex";

export const ConnectWalletModal = () => {
  const [opened, setOpened] = useState(false);

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
              Connect wallet
            </LitText>
          </>
        }
      >
        <Flex
          containerType="flex"
          alignItems="center"
          flexDirection="column"
          mt={12}
          mb={20}
        >
          <Image src="Icons/ConnectWallet.svg" width={160} height={160} />
          <LitText
            screenType="mobile"
            typographyVariant="text"
            size="md"
            color={litColors.body}
            align="center"
          >
            By connecting your wallet, you agree to our <b>Terms of Service</b>{" "}
            and our
            <b> Privacy Policy</b>
          </LitText>
        </Flex>

        <Flex
          containerType="flex"
          flexDirection="column"
          alignItems="center"
          px={20}
        >
          <LitButton variant="primary" fullWidth={true} size="large" mb={20}>
            <LitText
              screenType="mobile"
              typographyVariant="link"
              size="lg"
              color={litColors.offWhite}
            >
              Connect wallet
            </LitText>
          </LitButton>
          {/* Create a Link COmponent Here  */}
          <LitText
            screenType="mobile"
            typographyVariant="text"
            size="md"
            color={litColors.body}
          >
            Learn more about wallets
          </LitText>
        </Flex>
      </Modal>
    </>
  );
};
