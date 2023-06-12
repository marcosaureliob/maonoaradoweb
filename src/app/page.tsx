'use client'

import {
  HomeContainer,
  ImageBox,
  ContainerBanner,
  FirstContainer,
  ImageBolt,
  SecondContainer,
  ImageKids,
  PartnerList,
  ImagePartner,
  DonateSectionContainer,
  DonateBox,
  MaxWidthBox,
  BannerInfo,
  BoxInfo,
  BackgroundSection,
  ContainerTwins,
  PictureBox,
  BoxContentTwins,
  BoxInfoTwins,
  DonateBoxContainer,
} from '@/styles/page/home'

import BackgroundBanner from '@/assets/background-banner.svg'
import BackgroundProjectTop from '@/assets/background-project-top.svg'
import BackgroundProjectBottom from '@/assets/background-project-bottom.svg'

import { imagePartners } from '../database/index'

import Banner from '../assets/img-banner.svg'
import Lightning from '../assets/lightning.svg'
import Kids from '../assets/kids.svg'
import Employers from '../assets/employers.svg'
import People from '../assets/peoples.svg'
import Hands from '../assets/hands.svg'

import Image from 'next/image'
import {
  HashStraight,
  GlobeSimple,
  Handshake,
  UsersFour,
} from '@phosphor-icons/react'
import { ButtonSupport } from '@/components/ButtonSupport'

export default function Home() {
  return (
    <HomeContainer>
      <ContainerBanner>
        <Image
          src={BackgroundBanner}
          alt=""
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
        />

        <MaxWidthBox responsiveBanner>
          <BannerInfo>
            <h2>
              Promovemos proteção básica, por meio do serviço de convivência e
              fortalecimento de vínculo as famílias
            </h2>
            <p>
              Além de promover a preparação para o mundo do trabalho e inclusão
              produtiva, para o desenvolvimento da autonomia, do protagonismo
              social e da formação cidadã.
            </p>
          </BannerInfo>

          <ImageBox>
            <Image
              src={Banner}
              alt="Na primeira imagem uma garota branca e loira de cabelos curtos, regando plantas com um regador azul. Na segunda imagem, uma criança esta com um brinquedo de fotografia, brincando de fotografar"
              fill
              // style={{ objectFit: 'contain' }}
            />
          </ImageBox>
        </MaxWidthBox>
      </ContainerBanner>

      <FirstContainer>
        <ImageBolt>
          <Image
            src={Lightning}
            alt="Bolt"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageBolt>

        <div>
          <h2>
            Buscamos ser referência no atendimento social, visando mudar a
            realidade individual, familiar e consequentemente a comunidade a
            qual atendemos.
          </h2>
          <p>
            Praticamos valores como amor, acolhimento, solidariedade, ética,
            respeito, valorização da vida e da família.
          </p>
        </div>
      </FirstContainer>

      <SecondContainer>
        <ImageKids>
          <Image src={Kids} alt="Kids" fill style={{ objectFit: 'cover' }} />
        </ImageKids>

        <BoxInfo>
          <h2>Mão no Arado possui funções importantes na sociedade</h2>
          <p>
            Buscamos interagir e ajudar as famílias, por meio do atendimento
            social com atividades, ações solidárias e projetos de promoção da
            cultura, esporte, lazer, educação e emprego que visam a superação de
            de todo o tipo de desigualdade social, proteção, combate à fome e
            promoção da cidadania. Hoje somos reconhecidos com certificado de
            utilidade Pública.
          </p>
        </BoxInfo>
      </SecondContainer>

      <SecondContainer>
        <BoxInfo>
          <h2>
            A associação tem seu eixo de atuação no atendimento ao serviço de
            convivência
          </h2>
          <p>
            No fortalecimento de vínculos, com amparo nas Resoluções CNAS
            109/2009 – CNAS 13/2014 a CNAS 33/2012, que define a promoção da
            integração ao mercado de trabalho no campo da assistência social,
            desenvolve atividades de capacitação para integração ao mundo do
            trabalho.
          </p>
        </BoxInfo>
        <ImageKids heightEmployers>
          <Image
            src={Employers}
            alt="Kids"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageKids>
      </SecondContainer>

      <BackgroundSection marginTop>
        <Image
          src={BackgroundProjectTop}
          alt=""
          fill={true}
          style={{ objectFit: 'cover', transform: 'scaleX(-1)' }}
        />
      </BackgroundSection>

      <ContainerTwins>
        <h2>Solução</h2>

        <BoxContentTwins>
          <PictureBox>
            <Image
              src={People}
              alt="Peoples"
              style={{ objectFit: 'cover', objectPosition: '50% -50px' }}
            />
          </PictureBox>

          <BoxInfoTwins>
            <h3>
              O suprimento de carências relacionadas ao nível de escolaridade,
              qualidade da educação, qualificação profissional potencializa as
              oportunidades profissionais
            </h3>

            <p>
              Além de impactar com a redução de diversos problemas como a
              inserção ao uso e tráfico de entorpecentes, prostituição,
              exploração infantil, entre outras.
            </p>
          </BoxInfoTwins>
        </BoxContentTwins>
      </ContainerTwins>

      <BackgroundSection>
        <Image
          src={BackgroundProjectBottom}
          alt=""
          fill={true}
          style={{ objectFit: 'cover', transform: 'scaleX(-1)' }}
        />
      </BackgroundSection>

      <BackgroundSection marginTop>
        <Image
          src={BackgroundProjectTop}
          alt=""
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </BackgroundSection>

      <ContainerTwins>
        <h2>Impacto social</h2>

        <BoxContentTwins>
          <BoxInfoTwins widthSocial>
            <h3>
              A oferta de cursos de capacitação tem sido uma iniciativa
              primordial e relevante na Associação
            </h3>

            <p>
              Promovemos a ampliação do processo participativo, a integração,
              emancipação e protagonismo das famílias.
            </p>
          </BoxInfoTwins>

          <PictureBox order objectPosition>
            <Image src={Hands} alt="Peoples" style={{ objectFit: 'cover' }} />
          </PictureBox>
        </BoxContentTwins>
      </ContainerTwins>

      <BackgroundSection>
        <Image
          src={BackgroundProjectBottom}
          alt=""
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </BackgroundSection>

      <DonateSectionContainer>
        <h2>Doações</h2>

        <DonateBoxContainer>
          <DonateBox>
            <HashStraight size={40} />
            <h3>Fundo social</h3>
            <div></div>
          </DonateBox>

          <DonateBox>
            <GlobeSimple size={40} />
            <h3>Cidade Solidária</h3>
            <div></div>
          </DonateBox>

          <DonateBox>
            <Handshake size={40} />
            <h3>Parceiros</h3>
            <div></div>
          </DonateBox>

          <DonateBox>
            <UsersFour size={40} />
            <h3>Amigos</h3>
            <div></div>
          </DonateBox>
        </DonateBoxContainer>

        <ButtonSupport text={'Como Apoiar'} />
      </DonateSectionContainer>

      <PartnerList>
        <h2>Parceiros que fazem parte deste projeto </h2>

        <MaxWidthBox wrap>
          {imagePartners.map((partner) => {
            return (
              <ImagePartner key={partner.title}>
                <Image src={partner.src} alt={partner.title} fill />
              </ImagePartner>
            )
          })}
        </MaxWidthBox>
      </PartnerList>
    </HomeContainer>
  )
}
