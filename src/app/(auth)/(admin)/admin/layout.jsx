import Menu from "@/components/menu";

const AdminLayout = ( {children }) => {
    return ( 
        <div className="flex">
            <Menu/>
            <div className="flex-1 h-screen overflow-auto p-15">
                { children }
            </div>
        </div>
     );
}
 
export default AdminLayout;