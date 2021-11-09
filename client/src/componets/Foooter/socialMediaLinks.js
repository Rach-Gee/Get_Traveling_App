import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://www.linkedin.com/feed/?trk=AUS-SEM_google-adwords_acq-brand-sign-up" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="https://github.com/Rach-Gee/Get_Traveling_App" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
  </ButtonGroup>
)
