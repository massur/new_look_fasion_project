import { Box, Textarea, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import React from "react";
import {
  BrandDiscord,
  BrandFacebook,
  BrandInstagram,
  BrandTiktok,
  BrandTwitter,
  BrandYoutube,
  Link,
} from "tabler-icons-react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { LitDivider } from "../../customComponents/LitDivider";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { z } from 'zod';

const schema = z.object({
    name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
    email: z.string().email({ message: 'Invalid email' }),
    userName: z.string().min(2, { message: 'UserName should have at least 2 letters' }),
    bio: z.string().min(10,{message: "Bio should be of minimum 10 characters "}),
    websiteLink: z.string().url({message: "Please enter correct url "}),
    discordLink: z.string().url({message: "Please enter correct url "}),
    facebookLink: z.string().url({message: "Please enter correct url "}),
    instagramLink: z.string().url({message: "Please enter correct url "}),
    youtubeLink: z.string().url({message: "Please enter correct url "}),
    tiktokLink: z.string().url({message: "Please enter correct url "})
  });
  

  

export const MyProfileEdit = () => {

    const form = useForm({
        initialValues:{
            name: "",
            userName: "",
            email: "",
            bio: "",
            websiteLink: "",
            discordLink: "",
            instagramLink: "",
            youtubeLink: "",
            facebookLink: "",
            tiktokLink: ""
        },
        validate: zodResolver(schema),

    });

    const a= console.log(form.values);
    const b = console.log(form.errors);

  return (
    <>
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Box my={40}>
      
        <LitText
          screenType="mobile"
          typographyVariant="text"
          size="lg"
          mb={16}
          color={litColors.body}
        >
          Enter your details
        </LitText>
        <TextInput size="lg" placeholder="Name" mb={12} {...form.getInputProps('name')} />
        <TextInput size="lg" placeholder="User Name" {...form.getInputProps('userName')} />
      </Box>
      <Box mb={40}>
        <LitText
          screenType="mobile"
          typographyVariant="text"
          size="lg"
          mb={16}
          color={litColors.body}
        >
          Enter your email
        </LitText>
        <TextInput size="lg" placeholder="Email" mb={12} {...form.getInputProps('email')}  />
        <LitText
          screenType="mobile"
          typographyVariant="text"
          size="sm"
          color={litColors.placeholder}
        >
          Add your email address to receive notifications about your activity on
          Foundation. This will not be shown on your profile.
        </LitText>
      </Box>
      <Box mb={40}>
        <LitText
          screenType="mobile"
          typographyVariant="text"
          size="lg"
          mb={16}
          color={litColors.body}
        >
          Enter your bio
        </LitText>
        <Textarea placeholder="Enter your bio here" {...form.getInputProps('bio')} />
      </Box>
      <Box mb={40}>
        <LitText
          screenType="mobile"
          typographyVariant="text"
          size="md"
          mb={16}
          color={litColors.label}
        >
          Show the Foundation community that your profile is authentic.
        </LitText>
        <LitButton
          leftIcon={<BrandTwitter />}
          fullWidth
          size="large"
          variant="subtle"
          mb={12}
        >
          Verify via Twitter
        </LitButton>
        <LitButton
          leftIcon={<BrandInstagram />}
          fullWidth
          size="large"
          variant="subtle"
        >
          Verify via Instagram
        </LitButton>
      </Box>
      <Box mb={40}>
        <LitText
          screenType="mobile"
          typographyVariant="text"
          size="md"
          mb={16}
          color={litColors.label}
        >
          Add links to your social media profiles.
        </LitText>
        <TextInput size="lg" icon={<Link />} placeholder="Website" mb={12} {...form.getInputProps('websiteLink')} />
        <TextInput
          size="lg"
          icon={<BrandDiscord />}
          placeholder="Discord"
          mb={12}
          {...form.getInputProps('discordLink')}
        />
        <TextInput
          size="lg"
          icon={<BrandInstagram />}
          placeholder="Instagram"
          mb={12}
          {...form.getInputProps('instagramLink')}
        />
        <TextInput
          size="lg"
          icon={<BrandYoutube />}
          placeholder="Youtube"
          mb={12}
          {...form.getInputProps('youtubeLink')}
        />
        <TextInput
          size="lg"
          icon={<BrandFacebook />}
          placeholder="Facebook"
          mb={12}
          {...form.getInputProps('facebookLink')}
        />
        <TextInput
          size="lg"
          icon={<BrandTiktok />}
          placeholder="TikTok"
          mb={12}
          {...form.getInputProps('tiktokLink')}
        />
        <LitButton variant="primary" mt={44} mb={28} fullWidth={true} size="large" type="submit" >
          <LitText
            screenType="mobile"
            typographyVariant="link"
            size="lg"
            color={litColors.offWhite}
          >
            Save
          </LitText>
        </LitButton>
        <LitDivider type="THIN" />
      </Box>
      </form>
    </>
  );
};
