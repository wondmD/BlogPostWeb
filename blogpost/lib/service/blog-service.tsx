import { ReducerType } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import build from "next/dist/build"
// opportunities/search
export const blogApi = createApi({
    reducerPath: "BlogDash",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://a2sv-backend.onrender.com",
    }),

    endpoints : (builder) => ({
        getAllBlogs : builder.query({
            query: () => ({
                url: "api/blogs",
                method : "GET",
                headers : {
                }
            })
        })
       
    })
 
})

export const {
    useGetAllBlogsQuery,
   
} = blogApi