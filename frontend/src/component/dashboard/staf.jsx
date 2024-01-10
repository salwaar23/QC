import { Link } from "react-router-dom";
import img from "../img/reportss.png";

function staf(){
    return(
        <div>
        <div className="text-3xl flex justify-center mt-10">Selamat Datang, Staf!</div>
        <div className="flex justify-center">
            <div className="inline-flex mt-[120px]">
                <Link to={`/stafrep`}><img className="w-[130px] h-[180px]" src={img}/></Link>
            </div>
        </div>
        <div className="flex justify-center mt-24">
            <div className="bg-blue-500 w-[100px] text-center rounded-xl py-1 text-white">Logout</div>
        </div>
    </div>
    )
}

export default staf;