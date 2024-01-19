"use client";

import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

import { getCategories, getPostDetails } from '../../../services';
import { Postcard, Categories, PostDetail, Header, Comments, CommentsForm } from '../../../components';

const CategoryPost = ({ posts }: any) => {
    const [categories, setCategories] = useState([]);
    const [categoryPost, setCategoryPost] = useState<any>([]);
    const [paths, setPaths] = useState();

//   if (router.isFallback) {
//     return <Loader />;
//   }

    useEffect(()=>{

        getCategories().then((newCategories) => {
            console.log("newCat ", newCategories)
            setCategories(newCategories);
            setPaths(newCategories.map(({ slug }: any) => ({ params: { slug } })))
        });

        getPostDetails(window.location.pathname.split('/').slice(1)[1]).then((params) => {
            console.log("params ", params)
            setCategoryPost(params);
        });
    },[])

    console.log("fine ", categoryPost)

    return (
      <>
        <Header />
        <div className="container mx-auto px-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              <PostDetail key={Math.random()} post={categoryPost} />
              <Comments slug={categoryPost.slug}/>
              <CommentsForm slug={categoryPost.slug}/>
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </>
      );
    };

export default CategoryPost;