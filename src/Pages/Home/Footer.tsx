import { Grid } from '@mantine/core'
import { LitButton } from '../../customComponents/Buttons/LitButton'
import { Flex } from '../../customComponents/Flex'
import { LitText } from '../../customComponents/Text/LitText'
import { litColors } from '../../theme/theme'
import { Image } from "@mantine/core";

export const Footer = () => {
  return (
    <>
    <Grid.Col mt="85px" py="25px">
          <Flex containerType="flex" alignItems="center" flexDirection="column">
            <Image src="OpenArtLogoBigSize.svg" alt="Random unsplash image" width="180px" mb="4px" />
            <Image src="TheNewCreativeEconomy.svg" alt="Random unsplash image" />
          </Flex>
        </Grid.Col>
        <Grid.Col>
          <LitButton variant="primary" fullWidth={true} size="large">
            <LitText color={litColors.offWhite} screenType="mobile" typographyVariant="link" size="lg">
              Earn now
            </LitText>
          </LitButton>
        </Grid.Col>
        <Grid.Col mt="16px">
          <LitButton variant="secondary" fullWidth={true} size="large">
            <LitText color={litColors.label} screenType="mobile" typographyVariant="link" size="lg">
              Discover more
            </LitText>
          </LitButton>
        </Grid.Col>
        </>
  )
}
