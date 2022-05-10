import React, { Children, cloneElement, ReactElement } from 'react';
import { Control, Controller } from 'react-hook-form';

interface RadioGroupProps {
  children: ReactElement;
  onChange: (folder: string) => void;
  control: Control;
}

function RadioGroup({
  children,
  onChange: _onChange,
  control,
}: RadioGroupProps) {
  return (
    <Controller
      control={control}
      name="group"
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <>
          {Children.map(children, (element: ReactElement, index) => {
            return cloneElement(element, {
              key: index,
              onChange: _onChange,
            });
          })}
        </>
      )}
    />
  );
}

export default RadioGroup;
