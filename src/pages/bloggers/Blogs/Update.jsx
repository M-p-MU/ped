import React from 'react';
// import {Link} from 'react-router-dom';
import { Header } from '../../../Components/admin';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import ImageUpload from '../../../Components/blogers/ImageUpload';
import TextInput from '../../../Components/blogers/TextInput';



const Update = () => {

  // const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Updatin a Blog" />
      <div className='mb-6'>
        <TextInput label="Blog Title" />
      </div>
      <div className='mb-6'>
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Image Cover</label>
        <ImageUpload />
      </div>
      <div className='mb-6'>
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Body</label>
        <RichTextEditorComponent>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
      <div className="justify-end">
      <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Save</button>
      <Link to='/blg/blogs'>
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>
      </Link>
    </div>
    </div>
  );
};
export default Update;