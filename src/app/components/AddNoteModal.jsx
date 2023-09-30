// AddNoteModal.js
"use client"
import React, { useState } from 'react';

const AddNoteModal = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleAddNote = () => {
    if (name && selectedColor) {
      onAdd({ name, color: selectedColor });
      setName('');
      setSelectedColor('');
      onClose();
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-10 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className="bg-white p-4 rounded shadow-lg z-20">
        <h2 className="text-lg font-semibold mb-2">Add Note</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Note Name"
          className="w-full border rounded p-2 mb-2"
        />
       <div className="flex space-x-2">
  {[
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
  ].map((colorClass) => (
    <div
      key={colorClass}
      className={`w-8 h-8 rounded-full cursor-pointer ${colorClass} ${
        selectedColor === colorClass ? 'border-2 border-white' : ''
      }`}
      onClick={() => setSelectedColor(colorClass)}
    ></div>
  ))}
</div>
        <button
          onClick={handleAddNote}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNoteModal;
