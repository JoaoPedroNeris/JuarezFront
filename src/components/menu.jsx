import { BiPopsicle, BiSolidDashboard, BiTag, BiUser } from "react-icons/bi";

const Menu = () => {
    return (
        <div className="h-screen w-[250px] bg-slate-300">
            <h1>LOGO</h1>
            <ul>
                <li>
                    <a href="/admin" className="flex items-center gap-3 leading-8"><BiSolidDashboard /> Dashboard</a> 
                </li>
                <li>
                    <a href="/admin/niveis" className="flex gap-3 items-center leading-8"><BiTag/>níveis</a>
                </li>
                <li>
                    <a href="/admin/usuarios" className="flex gap-3 items-center leading-8"><BiUser/>Usuários</a>
                </li>
                <li>
                    <a href="/admin/sorvetes" className="flex gap-3 items-center leading-8"><BiPopsicle/>Sorvetes</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;