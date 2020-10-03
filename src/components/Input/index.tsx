import React from 'react';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type="text" {...rest} />
    </Container>
  );
};

export default Input;
