  const mongoose = require("mongoose");

const modelRekening = new mongoose.Schema(
  {
    merchant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Merchant",
      required: [true, "Merchant wajib diisi"], 
    },
    no_rekening: {
      type: String,
      required: [true, "No rekening wajib diisi"],
    },
    pemilik_rekening: {
      type: String,
      required: [true, "Pemilik rekening wajib diisi"],
    },
    jenis_rekening: {
      type: String,
      enum: ["rekening tabungan", "rekening escrow"],
      required: [true, "Jenis rekening wajib diisi"],
    },
    saldo: {
      type: Number,
      default: 0,
      required: [true, "Saldo wajib diisi"],
    }
  },
  { timestamps: true }
);

const Rekening = mongoose.model('Rekening', modelRekening);

module.exports = Rekening;
