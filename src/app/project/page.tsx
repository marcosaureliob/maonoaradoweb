'use client'

import Image from 'next/image'

import Person from '@/assets/person.svg'
import BackgroundBanner from '../../assets/background-banner.svg'
import BackgroundProjectTop from '@/assets/background-project-top.svg'
import BackgroundProjectBottom from '@/assets/background-project-bottom.svg'

import {
  ImageBox,
  ProjectBanner,
  BackgroundSection,
  ProjectBox,
  BoxTags,
  Tag,
  ProjectContainer,
  BenefitBox,
} from '@/styles/page/project'

export default function Projects() {
  return (
    <ProjectContainer>
      <ProjectBanner>
        <Image
          src={BackgroundBanner}
          alt=""
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
        />

        <ImageBox>
          <Image
            src={Person}
            alt="Pessoas agrupadas, colocando suas mãos unidas uma por cima da outra, simbolizando grupo e união."
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </ImageBox>
      </ProjectBanner>

      <BackgroundSection>
        <Image
          src={BackgroundProjectTop}
          alt=""
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </BackgroundSection>

      <ProjectBox>
        <h2>Projetos</h2>

        <BoxTags>
          <Tag color="orange">cultural copeira</Tag>
          <Tag color="turquoise">teatro</Tag>
          <Tag color="orange">alfabetização</Tag>
          <Tag color="turquoise">dança</Tag>
          <Tag color="orange">maculele</Tag>
          <Tag color="turquoise">esportes</Tag>
          <Tag color="orange">ballet</Tag>
          <Tag color="turquoise">educação física</Tag>
          <Tag color="orange">artesanato</Tag>
          <Tag color="turquoise">saúde em 1° lugar</Tag>
          <Tag color="orange">grupo da terceira idade</Tag>
          <Tag color="turquoise">reforço escolar</Tag>
        </BoxTags>
      </ProjectBox>

      <BackgroundSection>
        <Image
          src={BackgroundProjectBottom}
          alt=""
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </BackgroundSection>

      <BackgroundSection marginTop>
        <Image
          src={BackgroundProjectTop}
          alt=""
          fill={true}
          style={{
            objectFit: 'cover',
            transform: 'scaleX(-1)',
          }}
        />
      </BackgroundSection>

      <BenefitBox>
        <h2>Benefícios e Saúde</h2>

        <BoxTags>
          <Tag color="orange">psicóloga</Tag>
          <Tag color="turquoise">psicanalise</Tag>
          <Tag color="orange">Sócio emocional</Tag>
          <Tag color="turquoise">corte e costura</Tag>
          <Tag color="orange">projeto conectados</Tag>
          <Tag color="turquoise">padaria artesanal</Tag>
          <Tag color="orange">assistente social</Tag>
          <Tag color="turquoise">informática básica</Tag>
          <Tag color="orange">cabeleireiro</Tag>
          <Tag color="turquoise">palestras sobre empreendedorismo</Tag>
          <Tag color="orange">capacitação profissional</Tag>
          <Tag color="turquoise">conecta trampo</Tag>
          <Tag color="orange">Workshop do emprego</Tag>
          <Tag color="turquoise">curso manicure pedicure</Tag>
          <Tag color="orange">e muito mais</Tag>
        </BoxTags>
      </BenefitBox>

      <BackgroundSection>
        <Image
          src={BackgroundProjectBottom}
          alt=""
          fill={true}
          style={{
            objectFit: 'cover',
            transform: 'scaleX(-1)',
          }}
        />
      </BackgroundSection>
    </ProjectContainer>
  )
}
