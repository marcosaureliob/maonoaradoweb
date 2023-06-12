import React from 'react'

import {
  Contact,
  ContactInformations,
  ContactPageContainer,
  ContactPageHowToFind,
  ContactPageInfors,
  InforMationsWrapper,
  ParagraphPageContact,
  TitleInformationWrapper,
  TitlePageContact,
  TextContact,
  ContainerInformations,
  TitleHowToFind,
  SectionMap,
  AddressContainer,
  Address,
  AddressText,
} from './styles'
import { InstagramLogo } from '@/components/InstagramLogo'
import { FacebookLogo } from '@/components/FacebookLogo'
import MapContainer from '@/components/Map'
import { DeviceMobile, Envelope, Phone } from '@phosphor-icons/react'

export const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactPageInfors>
        <TitlePageContact>Entre em Contato</TitlePageContact>
        <ParagraphPageContact>
          Se você tiver alguma dúvida sobre a Associação Mão no Arado, entre em
          contato conosco, será um prazer poder ajudar.
        </ParagraphPageContact>
        <ContactInformations>
          <InforMationsWrapper>
            <TitleInformationWrapper>Ligue para nós</TitleInformationWrapper>
            <ContainerInformations>
              <Contact>
                <DeviceMobile size={40} />
                <TextContact>(11) 94078-3222</TextContact>
              </Contact>
              <Contact>
                <Phone size={40} />
                <TextContact>(11) 5198-2205</TextContact>
              </Contact>
            </ContainerInformations>
          </InforMationsWrapper>
          <InforMationsWrapper>
            <TitleInformationWrapper>
              Nos envie um e-mail
            </TitleInformationWrapper>
            <ContainerInformations>
              <Contact>
                <Envelope size={40} />
                <TextContact>associacaomaonoarado@gmail.com</TextContact>
              </Contact>
            </ContainerInformations>
          </InforMationsWrapper>
          <InforMationsWrapper>
            <TitleInformationWrapper>
              Nossas Redes Sociais
            </TitleInformationWrapper>
            <ContainerInformations>
              <Contact socialMedia>
                <InstagramLogo width={40} height={40} fill="#4F4F4F" />
                <FacebookLogo width={40} height={40} fill="#4F4F4F" />
              </Contact>
            </ContainerInformations>
          </InforMationsWrapper>
        </ContactInformations>
      </ContactPageInfors>
      <ContactPageHowToFind>
        <TitleHowToFind>Onde estamos</TitleHowToFind>
        <SectionMap>
          <MapContainer />
          <AddressContainer>
            <Address>
              <AddressText>R. Fraiburgo, 16 - Cidade Líder</AddressText>
              <AddressText>São Paulo - SP</AddressText>
              <AddressText>08280-500</AddressText>
            </Address>
          </AddressContainer>
        </SectionMap>
      </ContactPageHowToFind>
    </ContactPageContainer>
  )
}
