import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-4.svg'
import { 
  ServicesContainer, 
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
 } from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services      </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2> </ServicesH2>
            <ServicesP>We help reduces fesss and increas ,,,  </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Virtual Offices </ServicesH2>
            <ServicesP>You can acccess our plataform reduces fesss and increas ,,,  </ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2> Premium benefits</ServicesH2>
            <ServicesP>Unlock our special cards 
                 reduces fesss and increas  </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
