import React, { createContext, useState } from 'react';

export const Language = createContext(null);

export const LanguageProvider = (props) => {

    const [language, setLanguage] = useState(false)
   
    
    const contextValue = {
        language,
        setLanguage,
        
    };


    return (
        <Language.Provider value={contextValue}>
            {props.children}
        </Language.Provider>
    );
};