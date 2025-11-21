import React, { useState } from "react";

const DonateModal = ({ open, setOpen }) => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  return (
    <dialog className={`modal ${open ? "modal-open" : ""}`}>
      <div className="modal-box max-w-md animate-scaleIn">

        {/* Close Button */}
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </form>

        <h3 className="font-bold text-2xl text-gray-800 text-center">
          Complete Your Donation
        </h3>
        <p className="text-gray-600 text-center mt-2">
          Your gift makes free medical treatment possible.
        </p>

        {/* Amount Input */}
        <div className="mt-6">
          <label className="font-medium">Amount (BDT)</label>
          <input
            type="number"
            placeholder="৳ Enter Amount"
            className="input input-bordered w-full mt-2"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Payment Method */}
        <div className="mt-6">
          <label className="font-medium mb-2 block">Payment Method</label>

          <div className="grid grid-cols-3 gap-3">
            {["bkash", "nagad", "bank"].map((m) => (
              <button
                key={m}
                className={`btn btn-outline capitalize ${
                  method === m && "btn-active border-teal-600"
                }`}
                onClick={() => setMethod(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Info */}
        {method && (
          <div className="mt-5 bg-gray-50 p-4 rounded-lg border">
            {method === "bkash" && (
              <p className="text-sm">
                Send money to **013XXXXXXXX** via bKash.
              </p>
            )}
            {method === "nagad" && (
              <p className="text-sm">
                Send money to **017XXXXXXXX** via Nagad.
              </p>
            )}
            {method === "bank" && (
              <p className="text-sm">
                Islami Bank • Acc: 123456789 • Branch: Dhaka.
              </p>
            )}

            <input
              type="text"
              placeholder="Transaction ID"
              className="input input-bordered w-full mt-3"
            />
          </div>
        )}

        <button className="btn bg-teal-600 text-white w-full mt-7 hover:bg-teal-700">
          Confirm Donation
        </button>
      </div>
    </dialog>
  );
};

export default DonateModal;
