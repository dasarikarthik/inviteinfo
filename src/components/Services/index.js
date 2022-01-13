import { ServicesContainer,ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesWrapper,ServicesCard } from "./ServicesElements"
import Icon1 from "../../images/svg-1.svg"
import Icon2 from "../../images/svg-2.svg"
import Icon3 from "../../images/svg-3.svg"

const Services = () => {
    return (
        <>
          <ServicesContainer id="services">
              <ServicesH1>Our Services</ServicesH1>
              <ServicesWrapper>
                  <ServicesCard>
                      <ServicesIcon src={Icon1} />
                          <ServicesH2>Automatic messages</ServicesH2>
                          <ServicesP>We will send invitations through whatsapp to all your relatives as a remainder.</ServicesP>
                      
                  </ServicesCard>
                  <ServicesCard>
                      <ServicesIcon src={Icon2} />
                          <ServicesH2>Page in our website</ServicesH2>
                          <ServicesP>We will add a page in our webiste with all details of the ceremony to help visitors </ServicesP>
                  </ServicesCard>
                  <ServicesCard>
                      <ServicesIcon src={Icon3} />
                          <ServicesH2>Active Support</ServicesH2>
                          <ServicesP>We will help all your relatives to reach their destination on time without any hassle.</ServicesP>
                  </ServicesCard>
              </ServicesWrapper>
          </ServicesContainer>  
        </>
    )
}

export default Services
