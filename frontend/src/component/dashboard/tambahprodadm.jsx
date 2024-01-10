import { Link } from "react-router-dom";
import imgg from "../img/add.png";
import { IoIosArrowBack } from "react-icons/io";

function Addprodadmin(){
    return(
        <div>
            <div className="text-center mt-10 text-2xl">Tambah Data Produk PT. MDS Textile</div>
            <Link to={`/prodadmin`}><div className="mt-[40px] inline-flex bg-red-400 w-24 h-10 rounded-md ml-10">
                <div className="pt-[14px] text-white pl-[9px]"><IoIosArrowBack /></div>
                <div className="pt-[10px] text-white">Kembali</div>
            </div></Link><br />
            <div className="inline-flex mt-[40px] ml-[80px]">
                <div className="">
                    <label>Kode Produk</label>
                    <div className="mt-2">
                        <input
                        type="text"
                        placeholder="Kode Produk"
                        className="h-8 w-72 bg-slate-300 rounded-md pl-2" />
                    </div>
                    <div className="mt-4">
                        <label>Jenis Produk</label>
                        <div className="mt-2">
                            <select className="bg-slate-300 h-8 w-72 rounded-md">
                                <option></option>
                                <option>Baju Anak</option>
                                <option>Celana</option>
                                <option>Kemeja</option>
                                <option>Piyama Anak</option>
                                <option>Piyama dewasa</option>
                                <option>Kaos</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label>Jenis Kain</label>
                        <div className="mt-2">
                            <select className="bg-slate-300 w-72 h-8 rounded-md">
                                <option></option>
                                <option>Katun</option>
                                <option>Wol</option>
                                <option>Linen</option>
                                <option>Jersey</option>
                                <option>fleece</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label>Ukuran</label>
                        <div className="mt-2">
                            <select className="bg-slate-300 w-72 h-8 rounded-md">
                                <option></option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="ml-20">
                    <label>Warna</label>
                    <div className="mt-2">
                        <input type="text"
                        placeholder="Warna"
                        className="bg-slate-300 w-72 h-8 rounded-md pl-2" />
                    </div>
                    <div className="mt-4">
                        <label>Motif</label>
                        <div className="mt-2">
                            <input type="text"
                            placeholder="Motif"
                            className="bg-slate-300 w-72 h-8 rounded-md pl-2" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label>Harga</label>
                            <div className="mt-2">
                                <input type="text"
                                placeholder="Harga" 
                                className="bg-slate-300 w-72 h-8 rounded-md pl-2" />
                            </div>
                    </div>
                    <div className="mt-4">
                        <label>Jumlah</label>
                        <div className="mt-2">
                            <input type="text"
                            placeholder="Jumlah"
                            className="bg-slate-300 w-72 h-8 rounded-md pl-2" />
                        </div>
                    </div>
                </div>
                <div className="-mt-[30px] ml-[150px]">
                    <img className="w-[360px] h-[330px]" src={imgg}/>
                </div>
            </div>
            <div className="bg-blue-500 w-24 h-10 text-xl text-white text-center rounded-md pt-[6px] ml-[360px] mt-10">Tambah</div>
        </div>
        
    )   
}

export default Addprodadmin;