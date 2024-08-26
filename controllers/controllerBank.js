const Merchant = require("../models/Merchant");
const Rekening = require("../models/Rekening");
const Va = require("../models/Va");
const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();

const kode_bank = process.env.KODE_BANK;

function generateRekeningNumber() {
  const buffer = crypto.randomBytes(5); 
  const number = parseInt(buffer.toString("hex"), 16);
  return number.toString().slice(0, 10);
}

module.exports = {
  createMerchant: async (req, res) => {
    try {
      const { name, phone } = req.body;
      if (!name || !phone) {
        return res.status(500).json({
          message: "Payload yang kirimkan kurang lengkap",
        });
      }
      const createMerchant = await Merchant.create({
        nama_merchant: name,
      });

      const createRekening = await Rekening.create({
        merchant_id: createMerchant.id,
        no_rek: `${kode_bank}${generateRekeningNumber()}`,
        pemilik_rekening: name, 
        jenis_rekening: "rekening tabungan",
      });
      const createVa = await Va.create({
          nomor_va: `${kode_bank}${generateVaNumber()}`,
      })
    } catch (error) {
      console.log();
    }
  },
};
