'use client'
import { SiteContext } from "@/contexts/siteProvider";
import { API } from "@/services";
import { Button, Drawer, Form, Input, Popconfirm, Select, Table } from "antd";
import { useContext, useEffect, useState } from "react";
import { BiPencil, BiPlus, BiTrash } from "react-icons/bi";

const Sorvetes = () => {

    const [sorvetes, setSorvetes] = useState([]);
    const [verCriar, setVerCriar] = useState(false);
    const [verEditar, setVerEditar] = useState(false);
    const [formEditar] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const { api } = useContext(SiteContext);

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
    async function editar(dados) {
        try {
            setLoading(true)
            const response = await API.put(`/sorvetes/${dados.id}`, dados);
            api[response.data.tipo]({
                description: response.data.mensagem,
                onClose: () => {
                    setVerEditar(false);
                    buscar();
                }
            });
        } catch (error) {
            api[error.response.data.tipo]({
                description: error.response.data.mensagem
            })
        } finally {
            setLoading(false)
        }
    }
    async function deletar(id) {
        try {
            setLoading(true)
            const response = await API.delete(`/sorvetes/${id}`);
            api[response.data.tipo]({
                description: response.data.mensagem,
                onClose: () => {
                    buscar();
                }
            });
        } catch (error) {
            api[error.response.data.tipo]({
                description: error.response.data.mensagem
            })
        } finally {
            setLoading(false)
        }
    }
    async function criar(dados) {
        try {
            setLoading(true)
            const response = await API.post("/sorvetes", dados);
            api[response.data.tipo]({
                description: response.data.mensagem,
                onClose: () => {
                    setVerCriar(false);
                    buscar();
                }
            });
        } catch (error) {
            api[error.response.data.tipo]({
                description: error.response.data.mensagem
            })
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        buscar();
    }, [])

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h6>Sorvetes</h6>
                <Button type="primary"
                    shape="round"
                    icon={<BiPlus />}
                    onClick={() => { setVerCriar(true) }}>
                    Novo Sabor
                </Button>
            </div>
            <Table
                dataSource={sorvetes || []}
                rowKey={"id"}
            >
                <Table.Column
                    title="ID"
                    dataIndex={"id"}
                    key={"id"}
                    className="w-[50px]"
                />
                <Table.Column
                    title="Nome"
                    dataIndex={"nome"}
                    key={"nome"}
                />
                <Table.Column
                    title="Status"
                    dataIndex={"status"}
                    key={"status"}
                />
                <Table.Column
                    title="Ações"
                    className="w-[100px]"
                    render={(_, linha) => (
                        <div className="flex gap-3 ">
                            <Button icon={<BiPencil />} shape="circle" type="primary" onClick={() => {
                                formEditar.setFieldsValue(linha);
                                setVerEditar(true);
                            }} />

                            <Popconfirm title="aviso"
                                description="Deseja realmente apagar?"
                                okText="Sim"
                                cancelText="Não"
                                onConfirm={() => deletar(linha.id)}>
                                <Button
                                    icon={<BiTrash />}
                                    shape="circle"
                                    type="primary" />
                            </Popconfirm>
                        </div>
                    )} />
            </Table>
            <Drawer
                title="Criar Registro"
                open={verCriar}
                onClose={() => setVerCriar(false)}>
                <Form
                    layout="vertical"
                    onFinish={criar}
                >
                    <Form.Item
                        label="Nome"
                        name="nome"
                        rules={[{ required: true, message: "Campo obrigatorio" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Status"
                        name="status"
                        rules={[{ required: true, message: "Campo obrigatorio" }]}
                    >
                        <Select
                            placeholder="Escolha o sabor"
                            options={[
                                {
                                    label: "Ativo",
                                    value: "Ativo"
                                },
                                {
                                    label: "Inativo",
                                    value: "inativo"
                                }
                            ]}
                        />
                    </Form.Item>
                    <Button htmlType="submit"
                        type="primary"
                        loading={loading}
                    >Enviar</Button>
                </Form>
            </Drawer>
            <Drawer
                title="Editar registro"
                open={verEditar}
                onClose={() => setVerEditar(false)}>
                <Form
                    layout="vertical"
                    form={formEditar}
                    onFinish={editar}
                >
                    <Form.Item
                        name="id"
                        hidden >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Nome"
                        name="nome"
                        rules={[{ required: true, message: "Campo obrigatorio" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Status"
                        name="status"
                        rules={[{ required: true, message: "Campo obrigatorio" }]}
                    >
                        <Select
                            placeholder="Escolha o sabor"
                            options={[
                                {
                                    label: "Ativo",
                                    value: "Ativo"
                                },
                                {
                                    label: "Inativo",
                                    value: "inativo"
                                }
                            ]}
                        />
                    </Form.Item>
                    <Button htmlType="submit"
                        type="primary"
                        loading={loading}
                    >Enviar</Button>
                </Form>
            </Drawer>
        </div>
    );
}

export default Sorvetes;