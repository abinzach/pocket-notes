import React from 'react';

const NoteIcon = ({ name, color, onClick, isSelected }) => {
  const getInitials = (name) => {
    const nameArray = name.split(' ');
    return nameArray
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div
      className={`flex my-5 px-5 w-full rounded-md items-center cursor-pointer ${isSelected ? 'bg-gray-300 py-2' : ''}`}
      onClick={onClick}
    >
      <div
        className={`w-10 h-10 p-2 rounded-full ${color} flex items-center justify-center text-white font-bold`}
      >
        {initials}
      </div>
      <p className='text-black font-bold ml-3'>{name}</p>
    </div>
  );
};

export default NoteIcon;
