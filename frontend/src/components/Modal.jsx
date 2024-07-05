import React, { useState } from 'react';

const Modal = ({ onClose, onAddRow }) => {
  const [avatarName, setAvatarName] = useState('');
  const [performanceScore, setPerformanceScore] = useState('');

  const handleAddRowClick = () => {
    onAddRow(avatarName, performanceScore);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl mb-4">Add New Row</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Avatar Name</label>
          <input
            type="text"
            value={avatarName}
            onChange={(e) => setAvatarName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Performance Score</label>
          <input
            type="text"
            value={performanceScore}
            onChange={(e) => setPerformanceScore(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddRowClick}
          >
            Add Row
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
