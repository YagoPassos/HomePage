import React from 'react'

interface CarModel {}

interface ModelsContext{
    wrapperRef: React.RefObject<HTMLElement>;
    registeredModels: CarModel[];
    registerModel: (model: CarModel) => void
    unregisterModel: (modelName: String) => void
}

export default React.createContext<ModelsContext>({} as ModelsContext);