"use client";

import { useEffect, useState } from 'react';
import { Postcard, Categories, PostWidget, Header } from '../components'
import { getPosts } from '@/services'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then((post) => {
      setPosts(post);
    });
  }, []);

  return (
    <main className="">
      <Header />
      <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post: any) => (
              <Postcard post={post.node} key={post.title}/> 
              ))
            }
          </div>
          <div className='lg:col-span-4 col-span-1'>
              <div className="lg:sticky relative top-8">
                <PostWidget categories={undefined} slug={undefined} />
                <Categories />
              </div>
          </div>
        </div>
      
      </div>
    </main>
  )
}