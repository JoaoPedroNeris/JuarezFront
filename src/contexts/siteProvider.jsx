'use client'
import { notification } from "antd";
import { createContext } from "react";

export const SiteContext = createContext();

const SiteProvider = ({ children }) => {
    const [api, contextHolder] = notification.useNotification({
        placement: "bottomRight",
        showProgress: true,
        duration: 2
    })

    return (

        <SiteContext.Provider value= {{ api }}>
            {contextHolder}
                {children}
            
        </SiteContext.Provider>
    )
}
export default SiteProvider;
