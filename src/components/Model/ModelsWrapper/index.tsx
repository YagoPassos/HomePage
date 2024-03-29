import React, { useState, useCallback, useRef } from 'react';
import ModelOverlay from '../ModelOverlay'
import { Container, OverlaysRoot } from './styles';
import ModelsContext, { CarModel } from '../ModelsContext';

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, { ...model }])
  }, [])

  const unregisterModel = useCallback((modelName: String) => {
    setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
  }, [])

  const getModelByName = useCallback
    ((modelName: string) => {
      return registeredModels.find(item => item.modelName === modelName) || null
    }, [registeredModels])

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map(item => (
            <ModelOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>
        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
