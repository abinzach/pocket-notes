// AddNoteModal.js
"use client"
import React, { useState } from 'react';

const CreateGroup = ({ isOpen, onClose, onAdd }) => {
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
      <div className="bg-white px-10 p-4 rounded shadow-lg z-20">
        <h2 className="text-lg font-semibold mb-2">Create new Group</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Note Name"
          className="w-full border rounded p-2 mb-5"
        />
        <h2 className="text-lg font-semibold mb-2">Colour</h2>
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
        selectedColor === colorClass ? 'border-4 border-gray-300' : ''
      }`}
      onClick={() => setSelectedColor(colorClass)}
    ></div>
  ))}
</div>  
        <button
          onClick={handleAddNote}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateGroup;
