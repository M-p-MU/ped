import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../../Components/admin';


const Create = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Create New Blog" />

    </div>
  );
};
export default Create;