import React, { useState } from "react";
import {
  FaTimes,
  FaMoneyBillWave,
  FaMobileAlt,
  FaUniversity,
  FaCheckCircle,
} from "react-icons/fa";

const DonateModal = ({ open, setOpen }) => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirm = () => {
    if (!amount || !method) return;

    // Show success alert
    setShowSuccess(true);

    // Close modal instantly
    setOpen(false);

    // RESET form
    setAmount("");
    setMethod("");

    // Hide success after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <>
      {/* DONATE MODAL */}
      <dialog className={`modal ${open ? "modal-open" : ""}`}>
        <div
          className="
            modal-box max-w-md relative 
            bg-white/20 backdrop-blur-2xl
            border border-white/30 
            shadow-[0_0_40px_rgba(34,197,195,0.25)]
            rounded-2xl
            animate-modalPopPremium
          "
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.35), rgba(255,255,255,0.15))",
          }}
        >
          {/* Close */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-white hover:text-red-400 text-xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* Heading */}
          <h3 className="text-3xl font-extrabold text-center text-white drop-shadow-lg">
            Donate & Save Lives
          </h3>
          <p className="text-gray-100 text-center mt-2 text-sm opacity-90">
            Your contribution brings free medical care to the vulnerable.
          </p>

          {/* Glow Orb */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-teal-300/40 rounded-full blur-[120px] -z-10"></div>

          {/* Amount Input */}
          <div className="mt-7">
            <label className="font-semibold text-white/90 flex items-center gap-2">
              <FaMoneyBillWave className="text-teal-200" /> Amount (BDT)
            </label>
            <input
              type="number"
              placeholder="৳ Enter Amount"
              className="
                input input-bordered w-full mt-2 
                bg-white/30 border-white/40 text-white placeholder-white/60
                focus:ring-2 focus:ring-teal-300
              "
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Payment Methods */}
          <div className="mt-7">
            <label className="font-semibold text-white/90 mb-2 flex items-center gap-2">
              <FaMobileAlt className="text-teal-200" />
              Payment Method
            </label>

            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "bkash", label: "bKash" },
                { name: "nagad", label: "Nagad" },
                { name: "bank", label: "Bank" },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`
                    py-2 rounded-lg text-sm font-semibold
                    bg-white/20 backdrop-blur-lg border
                    transition-all duration-300
                    ${
                      method === item.name
                        ? "border-teal-300 text-white shadow-[0_0_15px_rgba(45,188,166,0.6)] scale-[1.05]"
                        : "border-white/30 text-white/70 hover:text-white hover:border-teal-200"
                    }
                  `}
                  onClick={() => setMethod(item.name)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Payment Info */}
          {method && (
            <div
              className="
                mt-7 p-4 rounded-xl 
                bg-white/10 border border-white/20
                text-white animate-fadeIn
              "
            >
              {method === "bkash" && (
                <p className="text-sm opacity-90">
                  Send to: <strong>013XXXXXXXX</strong> (bKash Personal)
                </p>
              )}

              {method === "nagad" && (
                <p className="text-sm opacity-90">
                  Send to: <strong>017XXXXXXXX</strong> (Nagad Personal)
                </p>
              )}

              {method === "bank" && (
                <p className="text-sm flex items-center gap-2 opacity-90">
                  <FaUniversity className="text-teal-200" />
                  Islami Bank • Acc <strong>123456789</strong>
                </p>
              )}

              <input
                type="text"
                placeholder="Transaction ID"
                className="
                  input input-bordered w-full mt-3 
                  bg-white/20 text-white placeholder-white/60
                  border-white/30
                "
              />
            </div>
          )}

          {/* Confirm Button */}
          <button
            className="
              mt-8 w-full py-3 rounded-xl 
              bg-gradient-to-r from-teal-400 to-teal-300 
              text-gray-900 font-extrabold text-lg
              shadow-[0_5px_20px_rgba(45,188,166,0.5)]
              hover:shadow-[0_10px_28px_rgba(45,188,166,0.7)]
              transition-all duration-300 hover:opacity-95
            "
            onClick={handleConfirm}
          >
            Confirm Donation
          </button>
        </div>
      </dialog>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 flex justify-center items-center z-[5000] animate-fadeIn">
          <div
            className="
              relative bg-white rounded-2xl shadow-2xl text-center 
              p-10 w-[330px] animate-successPop border border-teal-200
            "
          >
            {/* Floating Glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-teal-200/40 rounded-full blur-2xl"></div>

            <FaCheckCircle className="text-teal-600 text-6xl mx-auto drop-shadow-xl" />

            <h3 className="text-3xl font-bold text-gray-800 mt-5">
              Thank You!
            </h3>

            <p className="text-gray-600 mt-3 text-[16px] leading-relaxed">
              Your donation has been received successfully.
            </p>

            <p className="text-teal-600 font-semibold mt-3 text-[16px]">
              You have successfully donated for humanity.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DonateModal;
