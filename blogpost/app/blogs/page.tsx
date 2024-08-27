import BlogList from "@/components/blogPostComponents/blog-list";
import Header from "@/components/blogPostComponents/header";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar"

const page = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}

export default page;