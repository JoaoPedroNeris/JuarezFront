import { Carousel } from "antd";

const Banner = () => {
    return (
        <Carousel autoplay arrows>
            <div className="w-full h-[550px] relative">
                <img src={"https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-1173381958.jpg"} className="w-full h-full object-cover" />
                <div className="w-full h-full bg-linear-to-t from-black/80 to-black/20 absolute top-0 left-0 z-1"></div>
                <div className="absolute top-1/2 left-15 z-2 -translate-y-1/2 text-white">
                    <h2 className="text-3xl lg:text-6xl font-bold">Titulo chamativo</h2>
                    <p className="w-[250px] lg:w-[350px] mt-4 mb-8 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum optio eligendi voluptatum aspernatur ipsam.</p>
                    <a href="" className="inline-block leading-10! border-2 border-white hover:bg-white! rounded-[25px]! px-6! text-white! hover:text-black! duration-200">conheça nossos sabores</a>
                </div>
            </div>
            <div className="w-full h-[550px] bg-blue-500">
                <h3>2</h3>
            </div>
            <div className="w-full h-[550px] bg-blue-500">
                <h3>3</h3>
            </div>
            <div className="w-full h-[550px] bg-blue-500">
                <h3>4</h3>
            </div>
        </Carousel>
    );
}

export default Banner;