import React, { useState } from "react";
import {
  RichTextEditorComponent,
  Inject,
  HtmlEditor,
  Toolbar,
  Image,
  Link,
  QuickToolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);

  const handleContentChange = (args) => {
    const updatedContent = args.value;
    setContent(updatedContent);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const imageURL = URL.createObjectURL(file);
    setUploadImage(imageURL);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!title || !content || !image) {
      alert("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    const token = localStorage.getItem("authToken");
    console.log(`${token}`);

    try {
     
      const response = await axios.post(
        "https://pedbackend.onrender.com/api/v1/ped/blogs",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newBlog = response.data;
      console.log("New Blog:", newBlog);
    } catch (error) {
      console.log("Error uploading the blog:" + error);
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleForm}>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div className="mb-6">
          <label
            htmlFor="blog-title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog title
          </label>
          <input
            type="text"
            id="blog-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="blog-image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Image Cover
          </label>
          <input
            type="file"
            accept="image/*"
            id="blog-image"
            onChange={handleImageChange}
          />
          {uploadImage && (
            <img src={uploadImage} alt="SelectedImage" className="mt-2" />
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="blog-content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Body
          </label>
          <RichTextEditorComponent change={handleContentChange}>
            <Inject
              services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
            />
          </RichTextEditorComponent>
          <div>
            <h3>Content:</h3>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
        <div className="justify-end">
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover-bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            value="Save"
          />
        </div>
      </div>
    </form>
  );
};

export default Create;
