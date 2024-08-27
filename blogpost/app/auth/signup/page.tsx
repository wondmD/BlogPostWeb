/* eslint-disable @next/next/no-img-element */
import LoginForm from "@/components/logIncomponents/loginform";
import Logo from "@/components/logIncomponents/logo";
import WelcomeMessage from "@/components/logIncomponents/welcomeHero";
import SignUpForm from "@/components/signupComp/signUpForm";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <main className=" bg-white   max-md:pl-5">
      <div className="grid grid-cols-2 h-full">
        <section className="flex flex-col w-full max-md:ml-0 max-md:w-full h-[100vh]">
          <div className="mt-9 max-md:mt-10 max-md:max-w-full">
            <div className="ml-10">
              <Logo />
            </div>
            <div className="grid grid-cols-2">
              <div className="">
                <img src="/images/manpiv.png" alt="hero Image" className="" />
              </div>
              <div className="mt-[40%]">
                <WelcomeMessage />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col  w-full max-md:ml-0 max-md:w-full bg-[#264FAD]">
          <div className="flex flex-wrap grow  max-md:max-w-full">
            <div className="" />
            <div className="flex relative flex-col grow shrink-0 px-20 pt-10 basis-0 w-fit ">
              
              
              <button className="relative self-end text-xl font-semibold text-white">
              <Link href={"/auth/login"}>
                Sign in
                </Link>
              </button>
              
              <SignUpForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUpPage;
