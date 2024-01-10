import { Link } from "react-router-dom";


function masuk(){
    return(
        <div>
        <div className="text-2xl text-center mt-10">Data Barang Masuk Produk PT.MDS Textile</div>
        <div className="inline-flex">
            <Link to={`/addprodadmin`}><div className="bg-green-400 w-24 h-8 pt-1 text-center text-white rounded-lg mt-10 ml-10">Tambah</div></Link>
            <div className="bg-yellow-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-5">Print</div>
            <div className="bg-blue-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-5">Download</div>
            <Link to={`/barang`}><div className="bg-red-400 w-24 pt-1 text-center text-white rounded-lg mt-10 ml-[850px]">Kembali</div></Link>
        </div>
        <div className="flex justify-center mt-10">
            <table className="">
                <thead className="">
                    <tr className="">
                        <th className="border border-black px-4 text-xl">No.</th>
                        <th className="border border-black px-7 text-xl">Kode Barang</th>
                        <th className="border border-black px-7 text-xl">Nama Barang</th>
                        <th className="border border-black px-4 text-xl">Jumlah</th>
                        <th className="border border-black px-4 text-xl">Kualitas</th>
                        <th className="border border-black px-7 text-xl">Tanggal Masuk</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
    )
}

export default masuk;