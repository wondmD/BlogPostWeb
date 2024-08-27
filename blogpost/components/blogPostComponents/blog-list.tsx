"use client";
import { useGetAllBlogsQuery } from "@/lib/service/blog-service";
import BlogCard from "./blog-card";
import StoreProvider from "@/app/StoreProvider";

export interface Author {
    _id: string;
    name: string;
    email: string;
    image: string;
    role: 'user' ; 
  }

export interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: Author;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const BlogList = () => {
  const { data: blogs, isLoading, isError } = useGetAllBlogsQuery(null);

  if (isLoading) {
    return <div className="w-[70%] ml-[15%] p-30 text-3xl text-red">Loading...</div>;
  }
  if (isError) {
    return <div className="w-[70%] ml-[15%] p-30 text-3xl text-red-700">Server Error while Loading the Data..</div>;
  }
  
  return (
    <div className="w-[70%] ml-[15%] mb-10">
      {blogs.map((blog: Blog) => (
        <BlogCard
          key={blog._id}
          blogId = {blog._id}
          authorName={blog.author && blog.author.name}
          
          date={new Date(blog.createdAt).toLocaleDateString()}
          jobTitle="Author" 
          blogName={blog.title}
          description={blog.description}
          image={blog.image}
          tags={blog.tags}
        />
      ))}
    </div>
  );
};

export default BlogList;
