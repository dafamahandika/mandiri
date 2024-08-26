const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const kode_merchant = process.env.KODE_MERCHANT;

const modelMerchant = new mongoose.Schema(
  {
    nama_merchant: {
      type: String,
      required: [true, "Merchant harus diisi"],
    },
    kode_merchant: {
      type: String,
      required: [true, "Kode Merchant harus diisi"],
      unique: true,
    },
  },
  { timestamps: true }
);

modelMerchant.pre("save", async function (next) {
  if (!this.kode_merchant) {
    const count = await mongoose.model("Merchant").countDocuments();
    this.kode_merchant = `${kode_merchant}-${new mongoose.Types.ObjectId()}-${count + 1}`;
  }
  next();
});
const Merchant = mongoose.model("Merchant", modelMerchant);
module.exports = Merchant;
