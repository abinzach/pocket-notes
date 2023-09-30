"use client"
import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import NoteArea from './components/NoteArea';

export default function Home() {
  const [selectedNote, setSelectedNote] = useState(null);

  
  const onBack = () => {
    setSelectedNote(null); // Set selectedNote to null to go back to the left sidebar
  };

  return (
    <main className="flex h-screen w-full items-center justify-between">
      <LeftSidebar setSelectedNote={setSelectedNote} />
      <NoteArea selectedNote={selectedNote} onBack={onBack} /> 
    </main>
  );
}