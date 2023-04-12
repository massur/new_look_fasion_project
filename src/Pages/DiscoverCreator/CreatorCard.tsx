import { createStyles, Card, Avatar } from "@mantine/core";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { Flex } from "../../customComponents/Flex";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";

const cardStyles = createStyles((theme,props: CreatorCardProps) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: "4px solid white",
  },
  section: {
    backgroundImage: `url(${props.bgImageUrl})`,
    height: 140,
    backgroundSize: "cover",
    backgroundPositionY: "center"
  }
}));

interface CreatorCardProps {
  bgImageUrl: string;
  mainImageUrl: string;
  artistName: string;
  artistDescription: string;
  noFollowers: string;
  /* TODO: Add new Prop to show follow button only when artist is not followed  */
}

export const CreatorCard = (props: CreatorCardProps) => {
  const { classes } = cardStyles(props);

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section
        className={classes.section}
      />
      <Avatar
        src={props.mainImageUrl}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
        /* className={classes.avatar} */
      />
      <Flex containerType="flex" flexDirection="column" alignItems="center">
        <LitText
          typographyVariant="display-bold"
          size="sm"
          screenType="mobile"
          my={10}
        >
          {props.artistName}
        </LitText>
        <LitText
          typographyVariant="text"
          size="md"
          screenType="mobile"
          align="center"
        >
          {props.artistDescription}
        </LitText>
      </Flex>
      <Flex containerType="flex" justifyContent="space-between" mt={20}>
        <LitText
          typographyVariant="display-bold"
          screenType="mobile"
          size="md"
          color={litColors.titleActive}
        >
          {props.noFollowers} {" "}
          <LitText
            component="span"
            typographyVariant="text"
            screenType="desktop"
            size="sm"
            color={litColors.label}
          >
            Followers
          </LitText>
        </LitText>
        <LitButton variant="subtle">Follow</LitButton>
      </Flex>
    </Card>
  );
};
