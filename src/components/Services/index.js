import React from "react";

import Icon1 from "../../images/svg1.svg";
import Icon2 from "../../images/svg2.svg";
import Icon3 from "../../images/svg3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>TOKENOMICS</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>TOKEN VALUE</ServicesH2>
          <ServicesP>
          $0.000004862
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>HOLDERS</ServicesH2>
          <ServicesP>
          1,028,046
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Liquidity(USD)</ServicesH2>
          <ServicesP>
          218,055,070.52
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
