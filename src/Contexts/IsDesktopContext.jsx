import React, { Children, createContext, useEffect, useState } from 'react'

export const IsDeskTopContext = createContext({
    isDesktop: true,
});

function IsDesktopContextProvider({children}) {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        window.addEventListener("resize", handleResize);
    }, []);

    const contextValue = {
        isDesktop: isDesktop,
    }

    return (
        <IsDeskTopContext.Provider value={ contextValue }>
            {children}
        </IsDeskTopContext.Provider>
    )
}

export default IsDesktopContextProvider;