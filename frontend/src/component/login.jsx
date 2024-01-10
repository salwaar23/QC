import image from "../assets/image 1.png";
import { Link } from "react-router-dom";

function login() {
    return(
        <div className="">
            <div className="flex justify-center text-6xl italic mt-32">Aplikasi Pengelolaan Kualitas Produk</div>
            <div className="inline-flex">
                <div className="mt-24 ml-[250px]">
                    <label className="font-bold">Username</label>
                    <div><input
                      type="text"
                      placeholder="username"
                      class="mb-5 w-72 bg-slate-200 rounded-xl hover:bg-slate-100 p-2"
                    /></div>
                    <label className="font-bold">Password</label>
                    <div><input
                      type="password"
                      placeholder="password"
                      class="w-72 bg-slate-200 rounded-xl hover:bg-slate-100 p-2"
                    /></div>
                    <Link to={`/admin`}>
                        <div className="bg-blue-500 w-20 mt-10 text-center rounded-md py-1 text-white ml-24">Login</div>
                    </Link>
                </div>
                <div className="ml-[250px]">
                    <img className="h-[400px] w-[400px]" src={image}/>
                </div>
            </div>
        </div>
    )
}

export default login;