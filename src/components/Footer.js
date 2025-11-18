import { BiMap } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";

const Footer = () => {
    return ( 
        <footer>
            <h2 className="text-center text-3xl font-bold mb-10">Conheça nossas unidades</h2>
          <div className="flex gap-10 justify-center">
            <div>
                <h2 className="justify-center text-2xl font-semibold mb-5 flex gap-4 items-center"><BiMap/>Unidade Vila Pita</h2>  
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3330756309606!2d-38.50376062540461!3d-3.737405796236499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74970b0e0a8fb%3A0x51d39cfa5a6e6bb4!2sSorveteria%20Juarez%20-%20Vila%20Pita!5e0!3m2!1spt-BR!2sbr!4v1763491357260!5m2!1spt-BR!2sbr" 
            width="350"
             height="250"
            
               allowFullScreen="" 
               loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
            <div>
                <h2 className="justify-center text-2xl font-semibold mb-5 flex gap-4 items-center"><BiMap/> Unidade Barão De Studart</h2>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3330756309606!2d-38.50376062540461!3d-3.737405796236499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74970b0e0a8fb%3A0x51d39cfa5a6e6bb4!2sSorveteria%20Juarez%20-%20Vila%20Pita!5e0!3m2!1spt-BR!2sbr!4v1763491357260!5m2!1spt-BR!2sbr" 
            width="350"
             height="250"
              
               allowFullScreen=""
                loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade">

                 </iframe>
            </div>
          </div>
          <div className="px-15 flex justify-between items-center">
            <h6 className="flex gap-1 items-center">Feito com <BiSolidHeart className="animate-bounce"/>para você.</h6>
          <h6 className=" text-center font-semibold py-10">&copy; {new Date().getFullYear()} Todos os direitos reservados.</h6>
            
          </div>
        </footer>
     );
}
 
export default Footer;