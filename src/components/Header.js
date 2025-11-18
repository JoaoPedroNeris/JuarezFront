import { BiPhone } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";


const Header = () => {
    return (
        <header className="">
            <div className="flex justify-between px-15 py-4">
                <div className="flex gap-10 *:flex *:items-center *:gap-2">
                    <div><BiPhone className="text-2xl" />Telefone</div>
                    <div><BiEnvelope className="text-2xl" />EmailSorveteria</div>
                    <div><BiTime className="text-2xl" />Seg - Dom: 12h - 21h</div>
                </div>
                <div className="flex gap-10">
                    <a><BiLogoInstagram className="text-2xl" /></a>
                    <a><BiLogoFacebookCircle className="text-2xl" /></a>
                </div>
            </div>
            <div className="flex justify-between px-15 py-4">
            <div>
                <a href="/"></a>
            </div>
            <nav className="flex gap-10">
                <a href="">Sobre nós</a>
                <a href="">Sabores</a>
                <a href="">Na mídia</a>
                <a href="">Localização</a>
            </nav>
            </div>
        </header>
    );
}

export default Header;