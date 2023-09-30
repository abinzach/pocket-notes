"use client"
import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import NoteIcon from './NoteIcon';

import CreateGroup from './AddNoteModal';

const LeftSidebar = ({ selectedNote, setSelectedNote }) => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load groups from localStorage
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setData(storedGroups);
  }, []);

  const handleAddGroup = (newGroup) => {
    // Update the data with the new group
    data.push(newGroup);
    setData([...data]);

    // Save groups to localStorage
    localStorage.setItem('groups', JSON.stringify(data));
  };


  return (
    <div className='bg-white relative h-screen w-1/3 flex flex-col overflow-y-scroll'>
      <div className='sticky top-0 bg-white'>
        <h1 className='text-2xl px-10 pt-10 pb-4 font-bold'>Pocket Notes</h1>
       
      </div>
      <div className='flex w-full flex-col h-full justify-between items-end'>
        <div className='w-full'>
          {data.map((group, index) => (
            <div key={index} className='flex items-center'>
              <NoteIcon
                name={group.name}
                color={group.color}
                onClick={() => setSelectedNote(group)}
              />
              
            </div>
          ))}
        </div>
        <div className='sticky bottom-0 '>
       
        <div
          onClick={() => setIsModalOpen(true)}
          className='bg-blue-800 right-0 sticky w-5 h-5 p-7 m-5 rounded-full flex items-center justify-center text-4xl text-white cursor-pointer'
        >
          +
        </div>
      </div>
      </div>
      <CreateGroup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddGroup} />
    </div>
  );
};

export default LeftSidebar;
