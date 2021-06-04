import React from 'react';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingSubHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature
} from './Features.elements';

import img1 from '../../images/icon-brand-recognition.svg';
import img2 from '../../images/icon-detailed-records.svg';
import img3 from '../../images/icon-fully-customizable.svg';

function Features() {
  return (
    <PricingSection>
        <PricingWrapper>
          <PricingHeading>Advanced Statistics</PricingHeading>
          <PricingSubHeading>
              Track how your links are performing across the web with our advanced statistics dashboard.
          </PricingSubHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                 <img src={img1} alt="1"/>
                </PricingCardIcon>
                <PricingCardPlan>Brand Recognition</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>
                      Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                </PricingCardFeature>
                </PricingCardFeatures>
               </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                 <img src={img2} alt="1"/>
                </PricingCardIcon>
                <PricingCardPlan>Detailed Records</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>
                      Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                </PricingCardFeature>
                </PricingCardFeatures>
               </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                 <img src={img3} alt="1"/>
                </PricingCardIcon>
                <PricingCardPlan>Fully Customizable</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>
                      Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                </PricingCardFeature>
                </PricingCardFeatures>
               </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    
  );
}
export default Features;