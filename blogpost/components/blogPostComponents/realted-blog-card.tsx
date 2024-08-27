import * as React from "react";

function RelatedBlog() {
  return (
    <div className="flex flex-col max-w-[477px]">
      <div className="flex flex-col pb-7 w-full bg-white rounded-md">
        <img
          loading="lazy"
          src="/images/manpiv.png"
          className="object-contain w-full rounded-md aspect-[1.43]"
        />
        <div className="flex flex-col px-6 mt-6 w-full">
          <div className="self-start text-xl font-medium leading-8 text-gray-600">
            Design Liberalized Exchange Rate Management
          </div>
          <div className="flex gap-2 items-center self-start mt-5 text-sm">
            <img
              loading="lazy"
              src="/images/manpiv.png"
              className="object-contain shrink-0 self-stretch w-7 aspect-[0.97]"
            />
            <div className="self-stretch my-auto text-xs text-stone-300">
              by
            </div>
            <div className="self-stretch my-auto font-semibold leading-none text-zinc-500">
              Fred Boone
            </div>
            <img
              loading="lazy"
              src="/images/manpiv.png"
              className="object-contain shrink-0 self-stretch my-auto w-px aspect-[0.06]"
            />
            <div className="self-start leading-none text-stone-300">
              Jan 10, 2020
            </div>
          </div>
          <div className="flex gap-3.5 self-start mt-7 text-xs font-semibold leading-none text-center whitespace-nowrap text-neutral-400">
            <div className="px-7 py-3 bg-neutral-100 rounded-[100px]">
              UI/UX
            </div>
            <div className="px-8 py-3 uppercase bg-neutral-100 rounded-[100px]">
              Development
            </div>
          </div>
          <div className="mt-8 text-base leading-5 text-zinc-500">
            A little personality goes a long way, especially on a business blog.
            So don’t be afraid to let loose.
          </div>

          <div className="flex gap-5 justify-between mt-6 w-full text-base font-semibold leading-none">
            <div className="flex gap-3.5 self-start text-gray-600">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.61361 2.10352H18.6034C20.1807 2.10352 21.3869 3.32086 21.3869 4.91278V14.277C21.3869 15.8689 20.1807 17.0863 18.6034 17.0863H7.84043L4.40741 20.551C4.22184 20.7383 4.03627 20.832 3.75792 20.832C3.66514 20.832 3.47957 20.832 3.38678 20.7383C3.01565 20.6447 2.83008 20.2701 2.83008 19.8955V4.91278C2.83008 3.32086 4.03627 2.10352 5.61361 2.10352ZM18.6034 15.2134C19.1601 15.2134 19.5312 14.8389 19.5312 14.277V4.91278C19.5312 4.35093 19.1601 3.97636 18.6034 3.97636H5.61361C5.0569 3.97636 4.68576 4.35093 4.68576 4.91278V17.6481L6.8198 15.4943C7.00537 15.3071 7.19094 15.2134 7.46929 15.2134H18.6034Z"
                  fill="black"
                />
                <mask
                  id="mask0_1768_10053"
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="2"
                  width="20"
                  height="19"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.61361 2.10352H18.6034C20.1807 2.10352 21.3869 3.32086 21.3869 4.91278V14.277C21.3869 15.8689 20.1807 17.0863 18.6034 17.0863H7.84043L4.40741 20.551C4.22184 20.7383 4.03627 20.832 3.75792 20.832C3.66514 20.832 3.47957 20.832 3.38678 20.7383C3.01565 20.6447 2.83008 20.2701 2.83008 19.8955V4.91278C2.83008 3.32086 4.03627 2.10352 5.61361 2.10352ZM18.6034 15.2134C19.1601 15.2134 19.5312 14.8389 19.5312 14.277V4.91278C19.5312 4.35093 19.1601 3.97636 18.6034 3.97636H5.61361C5.0569 3.97636 4.68576 4.35093 4.68576 4.91278V17.6481L6.8198 15.4943C7.00537 15.3071 7.19094 15.2134 7.46929 15.2134H18.6034Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1768_10053)">
                  <rect
                    x="0.974609"
                    y="0.230469"
                    width="22.2682"
                    height="22.4741"
                    fill="#6E6B7B"
                  />
                </g>
              </svg>

              <div>2.3k Likes</div>
            </div>
            <div className="text-indigo-500">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedBlog;
