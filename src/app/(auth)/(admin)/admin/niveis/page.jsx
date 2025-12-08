'use client'
import { Button, Table } from "antd";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const Niveis = () => {

const [niveis, setNiveis] = useState([]);

    return ( 
        <div>
        <div className="flex items-center justify-between mb-6">
            <h6>niveis</h6>
            <Button type="primary"
            shape="round"
            icon={<BiPlus/>}
            onClick={()=>{}}>
                Novo nível
            </Button>
        </div>
        <Table 
        dataSource={niveis  || []}
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
        </Table>
        </div>
     );
}
 
export default Niveis;