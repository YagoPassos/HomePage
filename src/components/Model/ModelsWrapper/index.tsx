import React, { useState, useCallback } from 'react';

import { Container } from './styles';
import { CarModel } from '../ModelsContext';

const ModelsWrapper: React.FC = ({children}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [registeredModels, setRegisteredModels] = useState<CarModel>([])
  const registerModel = useCallback( (model: CarModel)=> {
    setRegisteredModels(state => [...state, {...model}])
  }, [])
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ModelsWrapper;
