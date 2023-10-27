// import { Link } from 'react-router-dom';
// import { Header } from '../../../Components/admin';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import ImageUpload from '../../../Components/blogers/ImageUpload';
import TextInput from '../../../Components/blogers/TextInput';

import React, { useState,useRef  } from 'react';

const Create = () => {
  const editorRef = useRef(null);
  const [blogData, setBlogData] = useState({
    title: '',
    image: '',
    content: '', // We'll store the content here
  });

  // Function to get the content from the RichTextEditor
  const getEditorContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      return content;
    }
    return ''; // Return an empty string if editorRef is not yet available
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const submit = () => {
    // Get the content from the RichTextEditor
    const editorContent = getEditorContent();

    // Update the blogData with the content
    setBlogData({
      ...blogData,
      content: editorContent,
    });

    // Now, you can send the updated blogData to your API
    fetch('https://pedbackend.onrender.com/api/v1/ped/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => {
        if (response.ok) {
          // The request was successful, you can handle success here
          console.log('Blog data sent successfully');
        } else {
          // The request failed, handle errors here
          console.error('Failed to send blog data');
        }
      })
      .catch((error) => {
        // Handle any network-related errors
        console.error('Network error:', error);
      });
  };
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* Rest of your component code */}
      <div className='mb-6'>
        <TextInput label="Blog Title" name="title" value={blogData.title} onChange={handleInputChange} />
      </div>
      <div className='mb-6'>
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Image Cover</label>
        <ImageUpload name="image" value={blogData.image} onChange={handleInputChange} />
      </div>
      <div className='mb-6'>
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Body</label>
        <RichTextEditorComponent  ref={editorRef}>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>+
      </div>
      <div className  ="justify-end">
        <button type="button" onClick={submit} className  ="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover-bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
      </div>
    </div>
  );
};

export default Create;
