import * as React from "react";

function Footer() {
  return (
    <div className="flex flex-col text-sm">
      <div className="flex flex-col px-16 pt-24 pb-14 w-full bg-white border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between ml-3.5 w-full max-w-[1871px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36aa2455337fabb76ae77055dd2309f9ce2ab7804b4d32ab2e40c80a7fc40ef?placeholderIfAbsent=true&apiKey=d6be0eb8f62148a585903dcdda486b49"
            className="object-contain shrink-0 my-auto max-w-full aspect-[1.34] w-[296px]"
          />
          <div className="flex flex-col my-auto">
            <div className="text-2xl font-semibold text-black">
              Get involved in improving tech <br />
              education in Africa!
            </div>
            <div className="mt-12 max-w-full text-base font-bold text-center text-white bg-blue-800 rounded-xl w-[287px] max-md:mt-10">
              Support Us
            </div>
          </div>
          <div className="flex flex-col items-start self-start text-base font-light text-black">
            <div className="font-semibold">Links</div>
            <div className="mt-12 max-md:mt-10">Home</div>
            <div className="self-stretch mt-10">Success Stories</div>
            <div className="mt-11 max-md:mt-10">About us</div>
            <div className="mt-12 max-md:mt-10">Get Invoved</div>
          </div>
          <div className="flex flex-col items-start text-base font-light text-black">
            <div className="font-semibold">Teams</div>
            <div className="self-stretch mt-12 max-md:mt-10 max-md:mr-2.5">
              Board Members
            </div>
            <div className="self-stretch mt-10">Advisors/Mentors</div>
            <div className="mt-10">Executives</div>
            <div className="mt-10">Staffs</div>
          </div>
          <div className="flex flex-col items-start self-start mt-3.5 text-base font-light text-black">
            <div className="font-semibold">Blogs</div>
            <div className="self-stretch mt-12 max-md:mt-10">Recent Blogs</div>
            <div className="mt-10">New Blog</div>
          </div>
        </div>
        <div className="shrink-0 mt-16 h-0 border border-solid border-stone-300 max-md:mt-10 max-md:max-w-full" />
        <div className="flex flex-wrap justify-between self-end mt-5 w-full text-base font-light  text-stone-950 ">
          <div className="flex flex-wrap gap-4 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/caf28d76793e2def47439bccff609eaf167ef2f462ccb76f8fec89f5fab6b3d1?placeholderIfAbsent=true&apiKey=d6be0eb8f62148a585903dcdda486b49"
              className="object-contain shrink-0 aspect-square w-[25px]"
            />
            <div className="flex-auto max-md:max-w-full">
              2020 Africa to Silicon Valley, Inc. All right reserved.
            </div>
          </div>
          <svg
            width="32"
            height="29"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 3.41176C30.8222 4.00882 29.5526 4.40118 28.2371 4.58882C29.5832 3.68471 30.6233 2.25176 31.1128 0.528823C29.8432 1.38176 28.4359 1.97882 26.9522 2.32C25.7438 0.852941 24.0459 0 22.1185 0C18.5239 0 15.587 3.27529 15.587 7.31823C15.587 7.89823 15.6482 8.46118 15.7553 8.99C10.3098 8.68294 5.4608 5.76588 2.23327 1.34765C1.6673 2.42235 1.34608 3.68471 1.34608 5.01529C1.34608 7.55706 2.49331 9.80882 4.26769 11.0882C3.18164 11.0882 2.17208 10.7471 1.2849 10.2353C1.2849 10.2353 1.2849 10.2353 1.2849 10.2865C1.2849 13.8347 3.54876 16.8029 6.54685 17.4682C5.99618 17.6388 5.41491 17.7241 4.81836 17.7241C4.40535 17.7241 3.99235 17.6729 3.59465 17.5876C4.42065 20.4706 6.82218 22.62 9.71319 22.6712C7.47992 24.65 4.6501 25.81 1.56023 25.81C1.04015 25.81 0.520077 25.7759 0 25.7076C2.90631 27.7888 6.36329 29 10.065 29C22.1185 29 28.7419 17.8435 28.7419 8.17118C28.7419 7.84706 28.7419 7.54 28.7266 7.21588C30.0115 6.19235 31.1128 4.89588 32 3.41176Z"
              fill="#9CA3AF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Footer;
