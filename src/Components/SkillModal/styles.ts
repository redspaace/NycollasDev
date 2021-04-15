import styled from 'styled-components';
import { MdDateRange } from 'react-icons/md';

export const Container = styled.button`
  display: flex;
  align-items: center;
  position: fixed;

  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  @media (min-width: 700px) {
    justify-content: center;
  }
`;

export const Modal = styled.div`
  border-radius: 10px;
  background-color: var(--darkerGrey);
  padding: 30px;
  width: 90%;

  @media (min-width: 700px) {
    width: 40%;
    padding: 50px 30px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  color: var(--darkWhite);
  font-size: 16px;
  margin-bottom: 3px;
`;

export const DataContact = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  
  font-size: 24px;
  color: var(--secundary);
  font-weight: bold;
`;

export const CalendarIcon = styled(MdDateRange)`
  width: 23px;
  height: 23px;
  margin-right: 2px;

  @media (min-width: 900px) {
    width: 25px;
    height: 25px;
  }
`

export const MotivationText = styled.span`
  color: var(--grey);
  text-align: left;
  font-weight: bold;
  margin-top: 3px;
  font-size: 16px;

  padding-left: 7px;
  border-left: 3px solid var(--secundary);

  @media (min-width: 900px) {
    border-left: 4px solid var(--secundary);
  }
`;
