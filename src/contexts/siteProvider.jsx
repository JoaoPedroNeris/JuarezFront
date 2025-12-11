'use client'
import { API } from "@/services";
import { notification } from "antd";
import { useRouter } from "next/navigation";
import { createContext } from "react";


export const SiteContext = createContext();

const SiteProvider = ({ children }) => {
    const [api, contextHolder] = notification.useNotification({
        placement: "bottomRight",
        showProgress: true,
        duration: 2
    })
    const router = useRouter();
    
    let token = sessionStorage.getItem("token")
    API.defaults.headers.common.Authorization = `Bearer ${token}`
    // Adiciona um interceptador na requisição
    API.interceptors.request.use(function (config) {
        // Faz alguma coisa antes da requisição ser enviada
        return config;
    }, function (error) {
        // Faz alguma coisa com o erro da requisição
        if (error.status == 401) {
            router.push("/login")
        }
        return Promise.reject(error);
    });

    // Adiciona um interceptador na resposta
    API.interceptors.response.use(function (response) {
        // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
        // Faz alguma coisa com os dados de resposta
        return response;
    }, function (error) {
        // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
        // Faz alguma coisa com o erro da resposta
        if (error.status == 401) {
            router.push("/login")
        }
        return Promise.reject(error);
        ;
    })


    return (

        <SiteContext.Provider value={{ api }}>
            {contextHolder}
            {children}

        </SiteContext.Provider>
    )
}
export default SiteProvider;
