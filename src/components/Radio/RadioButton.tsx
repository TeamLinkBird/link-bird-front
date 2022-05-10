import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

interface RadioButtonProps {
  style?: any;
  onChange?: (folder: string) => void;
  checked?: boolean;
  value: string;
}

function RadioButton({
  style,
  onChange,
  checked: _checked,
  value,
}: RadioButtonProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Styled.Container
      style={style}
      onPress={() => {
        onChange?.(value);
        setChecked(!checked);
      }}
    >
      <Styled.RadioButton>
        {(checked || _checked) && (
          <View
            style={{
              backgroundColor: 'black',
              width: 16,
              height: 16,
              borderRadius: 8,
            }}
          />
        )}
      </Styled.RadioButton>
      <Styled.Text>{value}</Styled.Text>
    </Styled.Container>
  );
}

export default RadioButton;

const Styled = {
  Container: styled.TouchableOpacity`
    flex-direction: row;
  `,

  RadioButton: styled.View`
    width: 24px;
    height: 24px;
    margin-right: 6px;
    border: 1px solid black;
    border-radius: 12px;
    background-color: white;
    justify-content: center;
    align-items: center;
  `,
  Text: styled(Text)``,
};
