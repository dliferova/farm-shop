import React from "react";
import { Label, VisuallyHiddenInput} from "./styles";

function Checkbox({
                      onClick,
                      labelComponent, // Компонент для отображения label
                      isChecked, // выбрано ли значение
                      name, // имя
                      value, // значение
                      text, // текст элемента
                      onChange, // событие при изменении
                      ...props
                  })  {

    const LabelComponent = labelComponent; //Компонент для отображения label

    return (
        <Label>
          <VisuallyHiddenInput
            type="checkbox"
            value={value}
            checked={isChecked}
            name={name}
            onChange={() => onChange(value)}
            {...props}
          />
            <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
                {text}
            </LabelComponent>
        </Label>
    );
}

export default Checkbox;

