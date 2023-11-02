// import { Link } from 'react-router-dom';
// import { Header } from '../../../Components/admin';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import ImageUpload from "../../../Components/blogers/ImageUpload";
import TextInput from "../../../Components/blogers/TextInput";
import axios from "axios";
import React, { useState, useRef } from "react";

const Create = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState();
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);

  const handleContentChange = (args) => {
    const updatedContent = args.value;
    console.log(content);
    setContent(updatedContent);
  };

  const submit = () => {
    const blog = {
      title,
      content,
      image,
    };
  };
  //

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    // console.log(e.target.files);
    setImage(file);
    const imageURL = URL.createObjectURL(file);
    setUploadImage(imageURL);
    // setImage(URL.createObjectURL(file));
  };

  const handleForm = async () => {
    if (!title) {
      alert("Please enter the title of this blog");
      return;
    }
    if (!content) {
      alert("Please enter the content of this blog");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    const authToken = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        "https://pedbackend.onrender.com/api/v1/ped/blogs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${authToken}`,
          },
        }
      );

      // Assuming the API returns the image URL in the response
      const newBlog = response.data;

      // You can use the imageUrl as needed in your component
      console.log("Newblog URL:", newBlog);
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };
  //
  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleForm}>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          {/* Rest of your component code */}
          <div className="mb-6">
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Blog title
              </label>
              <input
                type="text"
                id="default-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog Image Cover
            </label>
            {/* <ImageUpload name="image" onChange={(file) => setImage(file)} /> */}
            <input type="file" accept="image/*" value={image} onChange={handleImageChange} />
            {uploadImage && <img src={uploadImage} alt="Selected Image" className="mt-2" />}
          </div>
          <div className="mb-6">
            <label
              htmlFor="default-input"
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
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
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
    </>
  );
};

export default Create;
