const mongoose = require("mongoose");

const modelVA = new mongoose.Schema(
  {
    nomor_va: {
      type: String,
      required: [true, "Nomor VA harus diisi"],
    },
    pemilik_va: {
      type: String,
      required: [true, "Status Transaksi harus diisi"],
    },
    rekening_id: {
      type: mongoose.Types.ObjectId,
      ref: "Rekening",
      required: [true, "Rekening harus diisi"],
    },
  },
  { timestamps: true }
);

const Va = mongoose.model("Va", modelVA);
module.exports = Va;
