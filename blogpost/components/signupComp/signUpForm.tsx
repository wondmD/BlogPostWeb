import React from "react";

const SignUpForm: React.FC = () => {
  return (
    <form className="flex relative flex-col self-center lg:px-16 pt-10 pb-28 h-[80%] mt-10 max-w-full text-lg bg-white rounded-3xl shadow-sm text-neutral-700 md:w-[80%] w-[95%] ml-[10%] max-md:px-5 max-md:pb-24 max-md:mt-10">
      <h2 className="self-start text-4xl font-semibold">Login</h2>
      <p className="self-start mt-1 text-l font-light">
        Hey, Enter your details to sign in <br /> to your account
      </p>
      <label htmlFor="username" className="sr-only">
        username: 
      </label>
      <input
        type="text"
        id="name"
        className="px-7 pt-3 pb-8 mt-10 font-medium rounded-xl bg-slate-100 text-neutral-500 text-opacity-70 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        placeholder="Email address"
      />
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="email"
        className="px-7 pt-3 pb-8 mt-10 font-medium rounded-xl bg-slate-100 text-neutral-500 text-opacity-70 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        placeholder="Email address"
      />
      <div className="flex gap-5 justify-between items-start px-8 py-5 mt-8 font-medium whitespace-nowrap rounded-xl bg-slate-100 text-neutral-500 text-opacity-70 max-md:px-5 max-md:max-w-full">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-transparent border-none outline-none"
          placeholder="Password"
        />
        <svg
          width="25"
          height="17"
          viewBox="0 0 25 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 0C6.81818 0 1.96591 3.52467 0 8.5C1.96591 13.4753 6.81818 17 12.5 17C18.1818 17 23.0341 13.4753 25 8.5C23.0341 3.52467 18.1818 0 12.5 0ZM12.5 14.1667C9.36364 14.1667 6.81818 11.628 6.81818 8.5C6.81818 5.372 9.36364 2.83333 12.5 2.83333C15.6364 2.83333 18.1818 5.372 18.1818 8.5C18.1818 11.628 15.6364 14.1667 12.5 14.1667ZM12.5 5.1C10.6136 5.1 9.09091 6.61867 9.09091 8.5C9.09091 10.3813 10.6136 11.9 12.5 11.9C14.3864 11.9 15.9091 10.3813 15.9091 8.5C15.9091 6.61867 14.3864 5.1 12.5 5.1Z"
            fill="#B7B7B7"
          />
        </svg>
      </div>
      <button
        type="submit"
        className="px-16 pt-4 pb-7 mt-20 mb-0 font-bold text-white bg-blue-800 rounded-xl max-md:px-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full"
      >
        Sign in
      </button>
    </form>
  );
};

export default SignUpForm;
