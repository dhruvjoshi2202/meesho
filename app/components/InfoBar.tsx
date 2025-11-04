export default function InfoBar() {
  return (
    <div className="w-full bg-pink-50 border border-pink-100 rounded-2xl shadow-sm mt-3">
        <div className="max-w-6xl mx-auto flex justify-center items-center text-sm md:text-base py-3 text-gray-800 space-x-8">
        {/* 7 Days Easy Return */}
        <div className="flex items-center space-x-2">
          <span>📦</span>
          <span className="font-medium">7 Days Easy Return</span>
        </div>

        <span className="text-gray-300">|</span>

        {/* Cash on Delivery */}
        <div className="flex items-center space-x-2">
          <span>💵</span>
          <span className="font-medium">Cash on Delivery</span>
        </div>

        <span className="text-gray-300">|</span>

        {/* Lowest Prices */}
        <div className="flex items-center space-x-2">
          <span>🛍️</span>
          <span className="font-medium">Lowest Prices</span>
        </div>
      </div>
    </div>
  );
}
