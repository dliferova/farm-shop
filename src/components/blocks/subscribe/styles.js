import styled from "styled-components";
import {TextInput} from "/src/components/ui/text-input/text-input";
import Title from "../../ui/title/title";
import {P , Input} from "/src/components/styled";

//StyledEmailInput

export const MailInput = styled(Input).attrs({
  type: "email"
})`
  padding: 15px;
  min-width: 198px;
  background-color: transparent;
  margin-right: 20px;
`;

export const MailingSection = styled.section`
  background-image: url("https://i.ibb.co/TH8s0Xz/markus-spiske-vrb-ZVy-X2k4-I-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;
  min-height: 240px;
  padding: 20px;
`;

export const MailingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(251, 251, 251, 0.6);
  padding: 30px 10px;
`;

export const MailingFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputError = styled.span`
  color: red;
  font-size: 12px;
  font-weight: lighter;
`;

export const StyledTitle = styled(Title)`
  max-width: 280px;
  margin-bottom: 18px;
  text-align: center;
`;

export const TextSubtitle = styled(P)`
  font-size: 16px;
  margin-bottom: 24px;
  font-weight: normal;
`;

export const TextDescription = styled(P)`
  font-size: 13px;
`;
