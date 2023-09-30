import React from 'react';
import NoteAreaDefault from './NoteAreaDefault';
import NoteDetail from './NoteDetail';

const NoteArea = ({ selectedNote }) => {
  return (
    <div className='h-screen w-screen'>
      {selectedNote ? (
        <NoteDetail selectedNote={selectedNote} onAddNote={() => {}} />
      ) : (
        <NoteAreaDefault />
      )}
    </div>
  );
}

export default NoteArea;
