import Footer from "@/components/Footer";
import Header from "@/components/Header";

const siteLayout = ({children}) => {
    return ( 
        <>
         <Header />
        {children}
        <Footer />
        </>
     );
}
 
export default siteLayout;