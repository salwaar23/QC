import img from "../img/addre.png";

function stafreports(){
    return(
        <div>
            <div className="mt-10 flex justify-center text-2xl">Form Pengujian Kualitas Produk</div>
            <div className="inline-flex ml-[200px] mt-20">
                <div>
                    <div className="inline-flex">
                        <label className="text-xl">Kode Produk</label>
                        <div className="ml-5">
                            <input type="text"
                            placeholder="Kode Produk"
                            className="ml-[22px] rounded-md border border-black w-[300px] h-[30px] pl-3"/>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kualitas Kain</label>
                        <div className="ml-5">
                            <select className="ml-[23px] rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kualitas Jahitan</label>
                        <div className="ml-5">
                            <select className="rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kualitas Print</label>
                        <div className="ml-5">
                            <select className="ml-[21px] rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kualitas Warna</label>
                        <div className="ml-5">
                            <select className="ml-[5px] rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>
                    </div><br/>
                    <div className="inline-flex mt-5">
                        <label className="text-xl">Kelayakan</label>
                        <div className="ml-5">
                            <select className="ml-[47px] rounded-md border border-black w-[300px] h-[30px] pl-3">
                                <option></option>
                                <option>Layak</option>
                                <option>Belum Layak</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="-mt-[70px] ml-[100px]">
                    <img className="h-[400px] w-[400px]" src={img}/>
                </div>
            </div><br/>
            <div className="inline-flex ml-[480px]">
                <div className="bg-blue-500 w-[80px] h-[30px] text-center rounded-md pt-[3px] text-white">Submit</div>
                <div className="bg-red-500 w-[80px] text-center ml-3 rounded-md pt-[3px] text-white">Kembali</div>
            </div>
        </div>
        
    )
}

export default stafreports;