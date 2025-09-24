import React from 'react';

export default function ReceiptScanner({ imageSrc = '/assets/images/receipt.png', width = 'w-64', height = 'h-96', rounded = 'rounded-xl', animationClass = 'animate-scan', showInternalScanLine = true }) {
  return (
    <div className={`relative ${width} ${height} ${rounded} border border-gray-300 shadow-lg overflow-hidden bg-white`}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url('${imageSrc}')` }}
      />

      {/* Glowing scan line */}
      {showInternalScanLine && (
        <div className={`absolute top-0 left-0 w-full h-12 ${animationClass} 
                        bg-gradient-to-b from-green-400/0 via-green-400/50 to-green-400/0
                        shadow-[0_0_20px_5px_rgba(34,197,94,0.5)]`} />
      )}
    </div>
  );
}


