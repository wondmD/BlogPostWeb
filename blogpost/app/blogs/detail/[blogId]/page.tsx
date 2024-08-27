"use client";
import { useRouter } from "next/router";
import BlogDetail from "@/components/blogPostComponents/blog-detail";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { useGetAllBlogsQuery } from "@/lib/service/blog-service";
import { Blog } from "@/components/blogPostComponents/blog-list";

const BlogDetailPage = ({ params }: { params: { blogId: string } }) => {
    const { blogId } = params; // Ensure that blogId is being passed correctly
    const { data: blogs, isLoading, isError } = useGetAllBlogsQuery(null);

    // Log to verify that blogId is not undefined
    console.log("Blog ID from params:", blogId);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error :(</div>;
    }

    // Assuming your BlogDetail component takes a blog as a prop
    const blog = blogs?.find((blog: Blog) => blog._id === blogId);

    return (
        <div>
            <NavBar />
            <BlogDetail
             authotImage = {blog.author && blog.author.image}
             key={blog._id}
             blogId = {blog._id}
             authorName={blog.author && blog.author.name}
             date={new Date(blog.createdAt).toLocaleDateString()}
             jobTitle="Author" 
             blogName={blog.title}
             description={blog.description}
             image={blog.image}
             tags={blog.tags} />
            <Footer />
        </div>
    );
};

export default BlogDetailPage;
