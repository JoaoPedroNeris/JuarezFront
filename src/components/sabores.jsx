'use client'
import { SiteContext } from "@/contexts/siteProvider";
import { API } from "@/services";
import { useContext, useEffect, useState } from "react";

const Sabores = () => {

    const [sorvetes, setSorvetes] = useState();
    const {api} = useContext(SiteContext)

    async function buscar() {
        try {
            const response = await API.get("/sorvetes");
            setSorvetes(response.data);
        } catch (error) {
            api[error.response.data.tipo]({
                description: error.response.data.mensagem
            })
        }
    }

    useEffect(() => {
        buscar();
    }, [])

    return (
        <div className="bg-azul overflow-hidden px-15 pb-15">
            <h2 className="text-center text-3xl font-bold my-15">Nossos Sabores</h2>
            <div className="grid grid-cols-4">
                {
                    (sorvetes || []).map(sorvete => (
                        <div key={sorvete.id} className="flex items-center justify-center gap-2">
                            {sorvete.nome}
                            { sorvete.status == "inativo" && (<div className="w-2 h-2 rounded-full bg-red-500"></div>)}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Sabores;