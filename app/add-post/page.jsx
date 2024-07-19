'use client'
import React, { useState } from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
export default function AddPost(){
   const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router=useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
  try {
    await fetch('/api/add-post',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({title,content})
    })
    router.refresh()
  } catch (error) {
    console.error(error)
  }
    setTitle('');
    setContent('');
  };

    return (
        <main className="min-h-screen bg-black text-white">
            <h1 className="text-4xl text-center mb-8">Add Post</h1>
            <Link className="text-4xl text-center mb-8" href={'/'}>view feed</Link>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded-lg shadow-md bg-white">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
        </main>
    )
}