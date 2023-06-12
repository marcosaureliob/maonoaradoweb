'use client'
import React from 'react'
// import { DeviceMobile, Phone, Envelope } from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo.svg'
import {
  FooterContactContainer,
  FooterContactLogoWrapper,
  FooterContainer,
  FooterInforsContainer,
  FooterSocialNetworkContainer,
  FooterWrapper,
  FooterContactAddressWrapper,
  FooterContactInforsWrapper,
  Address,
  ContactAddressText,
  InforsWrapperContent,
  InforsWrapperText,
  TitleInforContent,
  ListOptionsFooterContainer,
  ListOptionsFooter,
  SectionActionWrapper,
  SocialNetwork,
} from './styles'
import { ButtonSupport } from '@/components/ButtonSupport'
import { FacebookLogo } from '@/components/FacebookLogo'
import { InstagramLogo } from '@/components/InstagramLogo'
import { DeviceMobile, Envelope, Phone } from '@phosphor-icons/react'
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContactContainer>
          <FooterContactLogoWrapper>
            <Image src={Logo} alt="Logo Mão no Arado" />
          </FooterContactLogoWrapper>
          <FooterContactAddressWrapper>
            <Address>
              <ContactAddressText>
                R. Fraiburgo, 16 - Cidade Líder
              </ContactAddressText>
              <ContactAddressText>São Paulo - SP</ContactAddressText>
              <ContactAddressText> 08280-500</ContactAddressText>
            </Address>
          </FooterContactAddressWrapper>
          <FooterContactInforsWrapper>
            <InforsWrapperContent>
              <DeviceMobile color="#fff" size={28} />
              <InforsWrapperText>(11) 94078-3222</InforsWrapperText>
            </InforsWrapperContent>
            <InforsWrapperContent>
              <Phone color="#fff" size={28} />
              <InforsWrapperText>(11) 5198-2205</InforsWrapperText>
            </InforsWrapperContent>
            <InforsWrapperContent>
              <Envelope color="#fff" size={28} />
              <InforsWrapperText>
                associacaomaonoarado@gmail.com
              </InforsWrapperText>
            </InforsWrapperContent>
          </FooterContactInforsWrapper>
        </FooterContactContainer>

        <FooterInforsContainer>
          <TitleInforContent>Mapa do Site</TitleInforContent>
          <ListOptionsFooterContainer>
            <ListOptionsFooter>
              <Link href="/">Mão no Arado</Link>
            </ListOptionsFooter>
            <ListOptionsFooter>
              <Link href="/project">Projetos</Link>
            </ListOptionsFooter>
            <ListOptionsFooter>
              <Link href="/gallery">Galeria</Link>
            </ListOptionsFooter>
            <ListOptionsFooter>
              <Link href="/contact">Contato</Link>
            </ListOptionsFooter>
            <SectionActionWrapper>
              <ButtonSupport text={'Apoiar'} />
            </SectionActionWrapper>
          </ListOptionsFooterContainer>
        </FooterInforsContainer>
        <FooterSocialNetworkContainer>
          <TitleInforContent>Nossas Redes Sociais</TitleInforContent>
          <SocialNetwork>
            <InstagramLogo width={40} height={40} />
            <FacebookLogo width={40} height={40} />
          </SocialNetwork>
        </FooterSocialNetworkContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}
