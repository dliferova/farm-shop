import React, {useState} from "react";

import { MailingSection, MailInput, MailingContent, StyledTitle, TextSubtitle, TextDescription, ButtonsGroup } from "./styles"
import Button from "../../ui/button/button";

function Mailing(){
  const [email, setEmail] = useState();

  return (
    <MailingSection>
      <MailingContent>
        <StyledTitle as="h3">Подпишитесь на рассылку</StyledTitle>
        <TextSubtitle>Скидки на акции только для подписчиков</TextSubtitle>
          <ButtonsGroup>
            <MailInput
              value={email}
              onChange={((e) => setEmail(e.target.value))}
              placeholder="Email"
            />
            <Button>Подписаться</Button>
          </ButtonsGroup>
        <TextDescription>Нажимая на кнопку "Подписаться", вы соглашаетесь с <a>офертой</a> и <a>политикой конфиденциальности</a></TextDescription>
      </MailingContent>
    </MailingSection>
  );
}

export default Mailing;
