/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import RelatedBlog from "./realted-blog-card";

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
    authotImage : string;
  }
  
  const BlogDetail: React.FC<BlogCardProps> = ({ 
    authorName, 
    date, 
    jobTitle, 
    blogName, 
    description, 
    image, 
    tags ,
    blogId,
    authotImage
  }) => {
    
  return (
    <div className="w-[80%] ml-[10%]">
      <div className="text-center text-3xl font-bold m">
        <h1>{blogName}</h1>
      </div>

      <div className="text-center gap-2">
        <p>{tags.map((tag) => (tag + ", "))} | 6 min Read</p>
      </div>
      <div>
        <img
          loading="lazy"
          src={image}
          className="object-contain shrink-0  aspect-square  my-10"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          
          src={authotImage? authotImage : "/download.png"}
           className="text-center object-contain shrink-0 rounded-full aspect-square w-[80px] m-4"
        />
        <p className="text-center text-l gap-2">{authorName ? authorName : "Yididiya Kebede"}  | Software Engineer</p>
        <p className="text-center text-l gap-2 m-2">{authorName ? "@"+authorName : "@wondmeneh derej"}e</p>
      </div>
      <div>
      <div/>
      
      <InnerHTML html={description} />
    </div>

      <div>
        <h2>Related blogs</h2>
        <div className="grid grid-cols-3">
        <RelatedBlog />
        <RelatedBlog />
        <RelatedBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
