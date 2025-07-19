import React from 'react';

function Notification({ message, isVisible, onClose, type = 'success' }) {
  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const icon = type === 'success' ? '✓' : '✕';

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 min-w-80`}>
        <span className="text-lg">{icon}</span>
        <span className="flex-1">{message}</span>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Notification; 