import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Reports = db.define('reports',{
    kode_produk: DataTypes.STRING,
    kualitas_kain: DataTypes.STRING,
    kualitas_jahitan: DataTypes.STRING,
    kualitas_print: DataTypes.STRING,
    kualitas_warna: DataTypes.STRING,
    kualitas_bordir: DataTypes.STRING,
    keterangan: DataTypes.STRING
}, {
    freezeTableName: true
})

export default Reports;