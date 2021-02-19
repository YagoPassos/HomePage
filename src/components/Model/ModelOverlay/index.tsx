import React from 'react';
import useWrapperScroll from '../useWrapperScroll'
import { Container } from './styles';
import { CarModel } from '../ModelsContext';

interface Props{
  model: CarModel;
}
const ModelOverlay: React.FC<Props> = ({ model, children}) => {
  const { scrollY }  = useWrapperScroll()

  return (
    <Container>
      {children}
    </Container>
  );
};

export default ModelOverlay;
