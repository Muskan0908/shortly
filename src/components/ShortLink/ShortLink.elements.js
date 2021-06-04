import styled from 'styled-components';
import img1 from '../../images/bg-shorten-desktop.svg';

export const ShortLinkContainer=styled.div`
   
    background-color: #d7d6da;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ShortLinkWrapper=styled.div`
 background-image: url(${img1});
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0 2rem 0;
    width:80%;
    background-color: #101522;
    border-radius: 10px;
    margin-bottom: 10px;
    flex-direction: column;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 1rem 2rem;
  border-radius: 10px;
  width: 75%;
  margin-right:auto;

  outline: none;
  border: none;
  font-size: 16px;
  border: ${({ primary }) => (primary ? '1px solid #fff':'2px solid #f46262')};
  @media screen and (max-width: 981px) {
      min-width: 70%;
        margin-right: 10px;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const EmptyInput=styled.div`
  color:#f46262;
  width:75%;
  display: flex;
  justify-content: flex-start;
  margin-top:5px ;
  @media screen and (max-width: 981px) {
      min-width: 70%;
        margin-right: 10px;
        justify-content: center;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const ShortLinkHistory=styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
     flex-direction: column;
     width: 60%;
`;

export const ShortLinkItem=styled.li`
    color: black;
    padding: 1rem 2rem;
    background-color: #fff;
    width: 100%;
    border:1px solid white;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 999px) {
    flex-direction: column;
    padding: 1rem;
    width: 80%;
     margin: 10px;
     overflow-x:hidden
  }
`;

export const OriginalLink=styled.div`
  padding: 1rem;
`;
export const NewLink=styled.a`
 padding: 1rem;
 color:blue;
`;

export const CopyButton = styled.button`
  border-radius: 10px;
  background: ${({ copied }) => (copied ? '#3b3054':'#2acfcf')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ copied }) => (copied ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;