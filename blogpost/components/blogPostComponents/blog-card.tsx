import Link from "next/link";
import * as React from "react";
import InnerHTML from 'dangerously-set-html-content'

interface BlogCardProps {
    authorName: string;
    date: string;
    jobTitle: string;
    blogName: string;
    description: string;
    image: string;
    tags: string[];
    blogId: string;
  }
  
  const BlogCard: React.FC<BlogCardProps> = ({ 
    authorName, 
    date, 
    jobTitle, 
    blogName, 
    description, 
    image, 
    tags ,
    blogId
  }) => {
  return (
    <div className="flex flex-col items-start rounded-none mb-10">
        
        <div className="flex gap-2.5 items-center justify-center w-full h-0 border-[1px] mb-7">
          
        </div>
      <div className="flex  leading-none text-center">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/140fff114031163bfee97622881fa6c3b54d424a6587ee361dc1d8e3dc1b393d?placeholderIfAbsent=true&apiKey=d6be0eb8f62148a585903dcdda486b49&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/140fff114031163bfee97622881fa6c3b54d424a6587ee361dc1d8e3dc1b393d?placeholderIfAbsent=true&apiKey=d6be0eb8f62148a585903dcdda486b49&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/140fff114031163bfee97622881fa6c3b54d424a6587ee361dc1d8e3dc1b393d?placeholderIfAbsent=true&apiKey=d6be0eb8f62148a585903dcdda486b49&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/140fff114031163bfee97622881fa6c3b54d424a6587ee361dc1d8e3dc1b393d?placeholderIfAbsent=true&apiKey=d6be0eb8f62148a585903dcdda486b49&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/140fff114031163bfee97622881fa6c3b54d424a6587ee361dc1d8e3dc1b393d?placeholderIfAbsent=true&apiKey=d6be0eb8f62148a585903dcdda486b49&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/140fff114031163bfee97622881fa6c3b54d424a6587ee361dc1d8e3dc1b393d?placeholderIfAbsent=true&apiKey=d6be0eb8f62148a585903dcdda486b49&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/140fff114031163bfee97622881fa6c3b54d424a6587ee361dc1d8e3dc1b393d?placeholderIfAbsent=true&apiKey=d6be0eb8f62148a585903dcdda486b49&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/140fff114031163bfee97622881fa6c3b54d424a6587ee361dc1d8e3dc1b393d?placeholderIfAbsent=true&apiKey=d6be0eb8f62148a585903dcdda486b49"
          className="object-contain shrink-0 rounded-full aspect-square w-[70px] mx-4"
        />
        <div className="flex flex-col my-auto font-semibold">
          <div className="self-start text-xl mt-1 text-black">{authorName ? authorName : "Yididiya Kebede"} <span className="rext-9xl pb-2 mx-1">.</span> <span className=" text-base font-light">Apr 16, 2022</span></div>
          <div className="mt-3 self-start text-base tracking-widest text-neutral-400">SOFTWARE ENGINEER</div>
        </div>
        
      </div>
      <div className="self-stretch mt-1.5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-10 text-2xl font-bold leading-none text-black max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
               
                <Link href={`/blogs/detail/${blogId}`}>
                {blogName}
                </Link>
              </div>
              <div className="mt-6 max-md:max-w-full">
              
              </div>
              <div className="self-stretch mt-7 text-[18px] leading-10 text-neutral-500 max-md:max-w-full font-light">
                {description}
                <InnerHTML html={description} />
                
                <span className="text-neutral-500">exercitation</span> ullamco
                laboris nisi ut aliquip ex ea{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <img
              loading="lazy"

              srcSet={image}
              className="object-contain grow w-full rounded-xl aspect-[1.52] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6 mt-9 text-base font-semibold leading-none whitespace-nowrap text-neutral-400">
        {tags.map((tag) => (
            <div key={tag} className="px-14 py-4 bg-neutral-100 rounded-[122px] max-md:px-5">
            {tag}
          </div>
        ))}

      </div>
    </div>
  );
}

export default BlogCard;
