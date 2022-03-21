import styled from "styled-components";
import { Section } from "/src/components/styled";
import { TextInput } from "/src/components/ui/text-input/text-input";

export const StyledCatalog = styled(Section)`
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;

export const LeftColumn = styled.div`
  width: 353px;
  padding-right: 20px;
  overflow-y: scroll;
  max-height: 100%;
`;

export const Option = styled(Section)`
  display: block;
  background-color: ${(props) => props.theme.colorWhite};
  padding: 0 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
  0 0 1px rgba(0, 0, 0, 0.04);
  
  margin-bottom: 40px;
`;

export const FilterInput = styled(TextInput)`
  margin-bottom: 40px;
`;