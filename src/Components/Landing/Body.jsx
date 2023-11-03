import React from "react";

import { Link } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";
import G1 from "../../Assets/images/group/g1.png";
import G2 from "../../Assets/images/group/g2.png";
import G3 from "../../Assets/images/group/g3.png";
// import P1 from "../../Assets/images/posts/post1.png";
// import P2 from "../../Assets/images/posts/post2.png";
import photo from "../../Assets/images/avatar/avatar-s-11.jpg";
// import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ThumbDownOffAltRoundedIcon from "@mui/icons-material/ThumbDownOffAltRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import OutlinedFlagRoundedIcon from "@mui/icons-material/OutlinedFlagRounded";
import DropdownItemsWithIcon from "./DropdownItemsWithIcon";

function Body({ posts }) {
  const format = (date) => {

    return //;
  }
  const styleBox = {
    display: "flex",
    justifyContent: "space-between",
    flexBasis: "auto",
  };
  const getImg = (imgName) => {
    // return 'https://pedbackend.onrender.com/blogImages/' + imgName;
    return 'https://pedbackend.onrender.com/blogImages/20230924_153052.010_cat.jpg';
  }
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/*  */}
        <div className="">
          <h1 className="text-3xl font-bold mb-4">Who&apos;s on Ped?</h1>
          <section className="cards flex flex-col md:flex-row" style={styleBox}>
            <article className="card">
              <div className="stat gap-2">
                <div className="stat-figure text-secondary">
                  <img src={G1} alt="img" />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                </div>
                <div className="stat-value">Learners</div>
                <div className="stat-title">
                  Dive into Ped sharing, actuality & forum
                </div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>
            </article>

            <article className="card">
              <div className="stat gap-2">
                <div className="stat-figure text-secondary">
                  <img src={G2} alt="img" />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                </div>
                <div className="stat-value">Developers</div>
                <div className="stat-title">
                  Dive into Ped sharing, actuality & forum
                </div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>
            </article>

            <article className="card">
              <div className="stat gap-2">
                <div className="stat-figure text-secondary">
                  <img src={G3} alt="img" />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                </div>
                <div className="stat-value">Reaseachers</div>
                <div className="stat-title">
                  Dive into Ped sharing, actuality & forum
                </div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>
            </article>
          </section>
        </div>
        {/*  */}
        {/* POSTS */}
        <div>
          {/* <div className='flex-col lg:flex-row-reverse'> */}
          <div className="flex flex-col mt-12 pt-8 mb-3 md:flex-row">
            <div className="w-11/12">
              <h1 className="text-3xl font-bold">Recent blogs</h1>
              <p className="stat-desc">
                99k+ blogs about many interested topic{" "}
              </p>
            </div>
            <button className="btn bg-base">
              <Link to="us/blogs">
                view all <FiArrowRight />
              </Link>
            </button>
          </div>
          {/* </div> */}
          {/* <div className="flex flex-wrap justify-center space-x-3 md:flex-row gap-4">
            {posts.map((item) => (
              <div key={item.id} className="card w-96 scrollable-content  p-4 inline-block">
                <figure className="px-1 pt-2">
                  <img src={'https://pedbackend.onrender.com/blogImages/' + item.coverImage} alt="Cover Image" className="rounded-xl" />
                </figure>
                <h2 className="card-title m-2 text-2xl">{item.title}</h2>
                <div className="flex space-x-3 p-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={photo} alt="img" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="card-title text-sm">{item.blogger}</h2>
                    <p className="stat-desc">Jan 1st - Feb 1st</p>
                  </div>
                </div>
                <div className="card-body pl-3 pt-3">
                  <p>
                    {item.content ? item.content.slice(0, 100) : ''}
                  </p>
                  <div>

                    <div className="card-actions justify-start badge badge-outline ">
                      {item.tags}
                    </div>
                    <div className="card-actions justify-end">
                      <span>
                        <DropdownItemsWithIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

        </div>
        {/*  */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                  <img src={'https://pedbackend.onrender.com/blogImages/' + post.coverImage} className='w-full rounded-2xl
           object-cover h-[200px]'/>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.createdAt} className="text-gray-500">
                      {/* <time dateTime={post.datetime} className="text-gray-500"> */}
                      {post.createdAt}
                    </time>
                    <a
                      href="#"
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.tags.lenght === 0 ? "TAG" : post.tags.split()[0]}
                      {/* {post.category.title} */}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {/* {post.content} */}
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                    <img src={photo} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href="#">
                          <span className="absolute inset-0" />
                          {post.blogger}
                        </a>
                      </p>
                      <p className="text-gray-600">Blogger</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        {/* PEOPLE SAID */}
        <div>
          <div className="flex flex-col mt-12 pt-8 mb-3 md:flex-row">
            <div className="w-11/12">
              <h1 className="text-3xl font-bold">What people said</h1>
              <p className="stat-desc">
                Different discussion that append between our users.
              </p>
            </div>
            <button className="btn bg-base">
              view all <FiArrowRight />
            </button>
          </div>
          <div className="flex flex-col justify-center space-x-3 md:flex-row gap-4">
            <div className="card w-60 glass">
              <div className="flex space-x-3 p-3 justify-end">
                <div className="flex flex-col gap-1">
                  <h2 className="card-title text-sm">John Doe</h2>
                  <p className="stat-desc">Jan 1st - Feb 1st</p>
                </div>
                <div className="avatar mr-0">
                  <div className="w-16 rounded ring ring-yellow-300 ring-offset-base-100 ring-offset-2">
                    <img src={photo} alt="Tailwind-CSS-Avatar-component" />
                  </div>
                </div>
              </div>
              <div className="card-body pl-3 pt-3">
                <p>Be yourself and pushsh more and more to more time for you</p>
                <div className="flex flex-row gap-3">
                  <div className="w-2/3 gap-2">
                    <ThumbUpOutlinedIcon />
                    <ThumbDownOffAltRoundedIcon />
                  </div>

                  <ChatBubbleOutlineRoundedIcon />
                  <OutlinedFlagRoundedIcon />
                </div>
              </div>
            </div>
            <div className="card w-60 glass">
              <div className="flex space-x-3 p-3 justify-end">
                <div className="flex flex-col gap-1">
                  <h2 className="card-title text-sm">John Doe</h2>
                  <p className="stat-desc">Jan 1st - Feb 1st</p>
                </div>
                <div className="avatar mr-0">
                  <div className="w-16 rounded ring ring-yellow-300 ring-offset-base-100 ring-offset-2">
                    <img src={photo} alt="Tailwind-CSS-Avatar-component" />
                  </div>
                </div>
              </div>
              <div className="card-body pl-3 pt-3">
                <p>Be yourself and pushsh more and more to more time for you</p>
                <div className="flex flex-row gap-3">
                  <div className="w-2/3 gap-2">
                    <ThumbUpOutlinedIcon />
                    <ThumbDownOffAltRoundedIcon />
                  </div>

                  <ChatBubbleOutlineRoundedIcon />
                  <OutlinedFlagRoundedIcon />
                </div>
              </div>
            </div>
            <div className="card w-60 glass">
              <div className="flex space-x-3 p-3 justify-end">
                <div className="flex flex-col gap-1">
                  <h2 className="card-title text-sm">John Doe</h2>
                  <p className="stat-desc">Jan 1st - Feb 1st</p>
                </div>
                <div className="avatar mr-0">
                  <div className="w-16 rounded ring ring-yellow-300 ring-offset-base-100 ring-offset-2">
                    <img src={photo} alt="Tailwind-CSS-Avatar-component" />
                  </div>
                </div>
              </div>
              <div className="card-body pl-3 pt-3">
                <p>Be yourself and pushsh more and more to more time for you</p>
                <div className="flex flex-row gap-3">
                  <div className="w-2/3 gap-2">
                    <ThumbUpOutlinedIcon />
                    <ThumbDownOffAltRoundedIcon />
                  </div>

                  <ChatBubbleOutlineRoundedIcon />
                  <OutlinedFlagRoundedIcon />
                </div>
              </div>
            </div>
            <div className="card w-60 glass">
              <div className="flex space-x-3 p-3 justify-end">
                <div className="flex flex-col gap-1">
                  <h2 className="card-title text-sm">John Doe</h2>
                  <p className="stat-desc">Jan 1st - Feb 1st</p>
                </div>
                <div className="avatar mr-0">
                  <div className="w-16 rounded ring ring-yellow-300 ring-offset-base-100 ring-offset-2">
                    <img src={photo} alt="Tailwind-CSS-Avatar-component" />
                  </div>
                </div>
              </div>
              <div className="card-body pl-3 pt-3">
                <p>Be yourself and pushsh more and more to more time for you</p>
                <div className="flex flex-row gap-3">
                  <div className="w-2/3 gap-2">
                    <ThumbUpOutlinedIcon />
                    <ThumbDownOffAltRoundedIcon />
                  </div>

                  <ChatBubbleOutlineRoundedIcon />
                  <OutlinedFlagRoundedIcon />
                </div>
              </div>
            </div>
            <div className="card w-60 glass">
              <div className="flex space-x-3 p-3 justify-end">
                <div className="flex flex-col gap-1">
                  <h2 className="card-title text-sm">John Doe</h2>
                  <p className="stat-desc">Jan 1st - Feb 1st</p>
                </div>
                <div className="avatar mr-0">
                  <div className="w-16 rounded ring ring-yellow-300 ring-offset-base-100 ring-offset-2">
                    <img src={photo} alt="Tailwind-CSS-Avatar-component" />
                  </div>
                </div>
              </div>
              <div className="card-body pl-3 pt-3">
                <p>Be yourself and pushsh more and more to more time for you</p>
                <div className="flex flex-row gap-3">
                  <div className="w-2/3 gap-2">
                    <ThumbUpOutlinedIcon />
                    <ThumbDownOffAltRoundedIcon />
                  </div>

                  <ChatBubbleOutlineRoundedIcon />
                  <OutlinedFlagRoundedIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END */}

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/*  */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Enjoy more by register to the app
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ped provide all you need to stay in touch with the news in all the
              fields.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Body;
