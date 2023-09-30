"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const NoteDetail = ({ selectedNote, onAddNote }) => {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [isSendDisabled, setIsSendDisabled] = useState(true);

  useEffect(() => {
    // Load notes from localStorage for the selected note
    const storedNotes = JSON.parse(localStorage.getItem(selectedNote.name)) || [];
    setNotes(storedNotes);
  }, [selectedNote]);

  useEffect(() => {
    // Disable Send button if the newNote is empty
    setIsSendDisabled(newNote.trim() === '');
  }, [newNote]);

  const handleAddNote = () => {
    if (newNote) {
      // Create a new note object with a timestamp
      const timestamp = new Date().toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      const note = { timestamp, content: newNote };

      // Update the notes array
      setNotes([...notes, note]);

      // Save notes to localStorage
      localStorage.setItem(selectedNote.name, JSON.stringify([...notes, note]));

      // Call the onAddNote function to update the data in the parent component
      onAddNote();

      // Clear the input field
      setNewNote('');
    }
  };

  return (
    <div className='w-full h-screen'>
      <div className='p-4 bg-blue-700 h-[10%]'>
        <div className="flex  p-1 pl-6 items-center">
          <h2 className='text-lg text-white  font-semibold'>{selectedNote.name}</h2>
        </div>
      </div>

      <div className="h-[60%] p-10 flex flex-col bg-blue-100 items-center overflow-y-scroll">
        {notes.map((note, index) => (
          <div key={index} className=" py-2 bg-gray-50 shadow-md overflow-y-visible h- p-5 shadow-gray-400 w-[90%] m-2 rounded-md flex flex-col items-end">
            
            <p className='text-lg pb-5'>{note.content}</p>
            <p className="text-sm font-bold text-gray-500">{note.timestamp}</p>
          </div>
        ))}
      </div>

      <div className='flex h-[30%] relative'>
        <input
          type="text"
          placeholder="Add a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="w-full outline-none rounded p-5 border-[1rem] border-blue-600 h-56"
        />
     <button
  onClick={handleAddNote}
  className={`absolute bottom-8 right-8 text-blue-500 hover:text-blue-600 cursor-pointer ${isSendDisabled ? 'cursor-not-allowed opacity-50' : ''
}`}
  disabled={isSendDisabled}
>
  <AiOutlineSend size={24} />
</button>
      </div>
    </div>
  );
};

export default NoteDetail;
