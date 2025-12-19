'use client'
import { SiteContext } from "@/contexts/siteProvider";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const Login = () => {
    const { api } = useContext(SiteContext) 
    const [logando, setLogando] = useState(false);
    const router = useRouter();

    async function logar(dados) {
        // Certifique-se de que sessionStorage só é usado no client
        setLogando(true);
        const request = await fetch("https://juarezapi.onrender.com/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });
        const response = await request.json();
        if (response.token) {
            if (typeof window !== "undefined") {
                sessionStorage.setItem("token", response.token);
                sessionStorage.setItem("usuario", JSON.stringify(response.usuario));
            }
            router.push("/admin");  
            return;
        }
        api.warning({
            description: response.mensagem
        });
        setLogando(false);
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <Form
                layout="vertical"
                onFinish={logar}
                className="w-[350px] border-slate-300 border p-4 rounded-2xl"
            >
                <Form.Item
                    label="email"
                    name={"email"}
                    rules={[{ required: true, message: "Campo obrigatório" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="senha"
                    name={"senha"}
                    rules={[{ required: true, message: "Campo obrigatório" }]}
                >
                    <Input.Password />
                </Form.Item>
                <Button type="primary"
                    htmlType="submit"
                    className="w-full"
                    shape="round"
                    loading={logando}>
                    Entrar</Button>
            </Form>


        </div >
    );
}

export default Login;