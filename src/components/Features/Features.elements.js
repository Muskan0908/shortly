import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #d7d6da;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #242424;
  font-size: 48px;
  margin-bottom: 24px;
  display: flex;
    text-align: center;
`;

export const PricingSubHeading=styled.h3`
    font-size: 28px;
    font-family: 'Poppins';
    font-weight: 200;
    color:gray;
    width:70%;
    display: flex;
    text-align: center;
    margin-bottom: 20px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: #fff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    height:auto;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 24px;
  align-items: center;
  color: #242424;
  font-weight: 300;
  font-family: 'Poppins';
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
  padding:2rem;
  border-radius: 50%;
  background-color: #35323e;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;


export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 5px;
  font-family: 'Poppins';
`;