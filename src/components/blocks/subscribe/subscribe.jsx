import React from "react";
import {
  MailingSection,
  InputWrapper,
  MailInput,
  InputError,
  MailingContent,
  StyledTitle,
  TextSubtitle,
  TextDescription,
  MailingFormWrapper
} from "./styles"
import Button from "../../ui/button/button";

const emailReg = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validateEmail: '',
      isEmailInvalid: true,
    }

    this.submitForm = this.submitForm.bind(this);
  }

  //Проверяем валидность input

  validateEmailInput(email) {
    const correctPattern = emailReg.test(email);
    if (correctPattern === true) {
      this.setState({
        validateEmail: email,
        emailInvalid: false,
      })
    } else {
      this.setState({
        emailInvalid: true,
      })
    }
  }

  //Проверяем валидность input на изменение

  onHandleChange(e) {
    this.validateEmailInput(e.target.value);
  }


  //Отправка формы

  submitForm(e) {
    console.log('Работаю')
    e.preventDefault();
    this.isButtonDisabled = true;
    const formData = {
      validateEmail: this.state.validateEmail,
    }

    console.log(formData);

    this.onSuccessForm();
  }

  onSuccessForm() {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за подписку ${this.state.validateEmail}, обещаем отправлять только полезную информацию без спама`);
  };

  render() {
    return (
      <MailingSection>
        <MailingContent>
          <StyledTitle as="h3">Подпишитесь на рассылку</StyledTitle>
          <TextSubtitle>Скидки на акции только для подписчиков</TextSubtitle>
          <form className="subscribe__form form">
            <MailingFormWrapper>
              <InputWrapper>
                <MailInput
                  id="subscribe-mail"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    this.onHandleChange(e)
                  }}
                  required
                />
                <label htmlFor="subscribe-mail"/>
                {this.state.emailInvalid ? <InputError> &#9757; Некорректный email</InputError> : ''}
              </InputWrapper>
              <Button
                type="submit"
                onClick={this.submitForm}
              >
                Подписаться
              </Button>
            </MailingFormWrapper>
          </form>

          <TextDescription>Нажимая на кнопку "Подписаться", вы соглашаетесь с <a>офертой</a> и <a>политикой
            конфиденциальности</a></TextDescription>
        </MailingContent>
      </MailingSection>
    );
  }

}

export default Subscribe;
