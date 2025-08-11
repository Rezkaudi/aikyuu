import React, { useState } from 'react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  pricePerPackage?: number;
  creditsPerPackage?: number;
}

export function PurchaseModal({ 
  isOpen, 
  onClose, 
  planName = "Growth Mode",
  pricePerPackage = 10.00,
  creditsPerPackage = 50
}: PurchaseModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const totalCredits = creditsPerPackage * quantity;
  const totalPrice = pricePerPackage * quantity;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const handlePurchase = () => {
    // Handle purchase logic here
    console.log(`Purchasing ${quantity} packages of ${planName} for $${totalPrice.toFixed(2)}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[30px] w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-aikyuu-dark font-montserrat text-2xl md:text-3xl font-bold">
              {planName}
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Separator */}
            <div className="w-full h-px bg-gray-200"></div>

            {/* Price and Credits Info */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-aikyuu-dark font-montserrat text-xl md:text-2xl">
                  Price per package:
                </span>
                <span className="text-aikyuu-dark font-montserrat text-xl md:text-2xl font-bold">
                  {pricePerPackage.toFixed(2)} $
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-aikyuu-dark font-montserrat text-xl md:text-2xl">
                  Credits per package:
                </span>
                <span className="text-aikyuu-dark font-montserrat text-xl md:text-2xl font-bold">
                  {creditsPerPackage} CVs
                </span>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-gray-200"></div>

            {/* Quantity Selector */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <span className="text-aikyuu-dark font-montserrat text-xl md:text-2xl">
                Select Quantity:
              </span>

              <div className="flex items-center gap-4">
                {/* Decrease Button */}
                <button
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-bold transition-colors ${
                    quantity <= 1 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-aikyuu-dark hover:bg-gray-300'
                  }`}
                >
                  −
                </button>

                {/* Quantity Display */}
                <div className="w-32 md:w-40 h-12 md:h-16 border-2 border-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-aikyuu-dark font-montserrat text-xl md:text-2xl font-bold">
                    {quantity}
                  </span>
                </div>

                {/* Increase Button */}
                <button
                  onClick={incrementQuantity}
                  className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-bold text-aikyuu-dark hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-gray-200"></div>

            {/* Totals */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-aikyuu-dark font-montserrat text-xl md:text-2xl">
                  Total Credits:
                </span>
                <span className="text-aikyuu-dark font-montserrat text-xl md:text-2xl font-bold">
                  {totalCredits} CVs
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-aikyuu-dark font-montserrat text-xl md:text-2xl">
                  Total Price:
                </span>
                <span className="text-aikyuu-dark font-montserrat text-xl md:text-2xl font-bold">
                  {totalPrice.toFixed(2)} $
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              {/* Cancel Button */}
              <button
                onClick={onClose}
                className="flex-1 h-16 md:h-20 border border-gray-300 bg-white rounded-full text-aikyuu-dark font-montserrat text-xl md:text-2xl font-bold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>

              {/* Purchase Button */}
              <button
                onClick={handlePurchase}
                className="flex-1 h-16 md:h-20 bg-aikyuu-primary rounded-full text-aikyuu-dark font-montserrat text-xl md:text-2xl font-bold hover:bg-aikyuu-primary/90 transition-colors"
              >
                Purchase for {totalPrice.toFixed(2)}$
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
