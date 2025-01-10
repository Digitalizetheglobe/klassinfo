import React, { useEffect } from "react";
import contt from "../assets/images/image-37.png";
import consultantt from "../assets/images/avatr.png";
import blogimg from "../assets/images/silvertoon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="mt-48 mb-40 ">
      <h1
        className="text-center mt-0 mb-0 font-sofia-pro font-bold uppercase"
        style={{ color: "#000", fontSize: "28px" }}
      >
        Our Latest Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-10 font-sofia-pro mt-14">
        <article
          className="flex bg-white transition hover:shadow-xl h-60"
          data-aos="fade-up"
        >
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2024</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>June 12</span>
            </time>
          </div>
          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              className="aspect-square h-full w-full object-cover"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold text-gray-900">
                  Empowering Innovation: Boston Financial's Technology Solutions
                </h3>
              </a>
              <p
                className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
                style={{ fontSize: "15px" }}
              >
                Innovation lies at the heart of Boston Financial's approach to
                technology solutions.
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
            <a
                href="#"
                className="block px-5 py-3 text-center text-xs font-bold text-white transition-colors bg-green-600 hover:bg-gray-400"
                style={{ fontSize: "13px" }}
              >
                Read More
              </a>
            </div>
          </div>
        </article>

        <article
          className="flex bg-white transition hover:shadow-xl h-60"
          data-aos="fade-up"
        >
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2024</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>June 12</span>
            </time>
          </div>
          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src={contt}
              className="aspect-square h-full w-full object-cover"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold text-gray-900">
                  Navigating Complexity: Boston Financial's Consulting
                  Excellence
                </h3>
              </a>
              <p
                className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
                style={{ fontSize: "15px" }}
              >
                In an era marked by rapid digital transformation and evolving
                market dynamics.
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block px-5 py-3 text-center text-xs font-bold text-white transition-colors bg-green-600 hover:bg-gray-400"
                style={{ fontSize: "13px" }}
              >
                Read More
              </a>
            </div>
          </div>
        </article>

        <article
          className="flex bg-white transition hover:shadow-xl h-60"
          data-aos="fade-up"
        >
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2024</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>June 12</span>
            </time>
          </div>
          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src={consultantt}
              className="aspect-square h-full w-full object-cover"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold text-gray-900">
                  Navigating Complexity: Boston Financial's Consulting
                  Excellence
                </h3>
              </a>
              <p
                className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
                style={{ fontSize: "15px" }}
              >
                In an era marked by rapid digital transformation and evolving
                market dynamics.
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block px-5 py-3 text-center text-xs font-bold text-white transition-colors bg-green-600 hover:bg-gray-400"
                style={{ fontSize: "13px" }}
              >
                Read More
              </a>
            </div>
          </div>
        </article>
        <article
          className="flex bg-white transition hover:shadow-xl h-60"
          data-aos="fade-up"
        >
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2024</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>June 12</span>
            </time>
          </div>
          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src={consultantt}
              className="aspect-square h-full w-full object-cover"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold text-gray-900">
                  Navigating Complexity: Boston Financial's Consulting
                  Excellence
                </h3>
              </a>
              <p
                className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
                style={{ fontSize: "15px" }}
              >
                In an era marked by rapid digital transformation and evolving
                market dynamics.
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block px-5 py-3 text-center text-xs font-bold text-white transition-colors bg-green-600 hover:bg-gray-400"
                style={{ fontSize: "13px" }}
              >
                Read More
              </a>
            </div>
          </div>
        </article>
        <article
          className="flex bg-white transition hover:shadow-xl h-60"
          data-aos="fade-up"
        >
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2024</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>June 12</span>
            </time>
          </div>
          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src={consultantt}
              className="aspect-square h-full w-full object-cover"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold text-gray-900">
                  Navigating Complexity: Boston Financial's Consulting
                  Excellence
                </h3>
              </a>
              <p
                className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
                style={{ fontSize: "15px" }}
              >
                In an era marked by rapid digital transformation and evolving
                market dynamics.
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block px-5 py-3 text-center text-xs font-bold text-white transition-colors bg-green-600 hover:bg-gray-400"
                style={{ fontSize: "13px" }}
              >
                Read More
              </a>
            </div>
          </div>
        </article>

        <article
          className="flex bg-white transition hover:shadow-xl h-60"
          data-aos="fade-up"
        >
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              dateTime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2024</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>June 12</span>
            </time>
          </div>
          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src={blogimg}
              className="aspect-square h-full w-full object-cover"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold text-gray-900">
                  Navigating Complexity: Boston Financial's Consulting
                  Excellence
                </h3>
              </a>
              <p
                className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
                style={{ fontSize: "15px" }}
              >
                In an era marked by rapid digital transformation and evolving
                market dynamics.
              </p>
            </div>
            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block px-5 py-3 text-center text-xs font-bold text-white transition-colors bg-green-600 hover:bg-gray-400"
                style={{ fontSize: "13px" }}
              >
                Read More
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
