import React from 'react'
import sanityClient from '../client.js';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {fetchDigital, fetchPrint, fetchUx, fetchMotion} from '../actions/projectActions';
import {useDispatch, useSelector} from 'react-redux'
import Loader from "react-loader-spinner";
import Modal from "./Modal"

export default function Post() {

const [showDigital, setShowDigital] = useState(false)

const dispatch = useDispatch();
    useEffect(() => {    
        dispatch(fetchDigital());
    }, [dispatch]);
  
    const {loading: digitalLoading, error: digitalError
    } = useSelector(state => state.fetchDigitalReducer)
    
    
const [postData, setPost] = useState(null)
useEffect(() => {
    sanityClient
    .fetch(`*[_type == "post" && title match "Digital"]{
        title,
        slug,
        mainImage {
            asset -> {
            _id,
            url,
            },
            alt
        }
    }`)
    .then((data) => setPost(data))
    .catch(console.error);
}, [])

    return (
        <main className='background-green-100 min-h-screen p-12'>
            <section className="container mx-auto" >
                {<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => ( 
                    <article>
                        <Modal />
                        <Link to={'/post/' + post.slug.current} key={post.slug.current} >
                        <span
                         className="block h-64 relative rounded shadow leading-snug bg-white" key={index}
                        >
                            <img src={post.mainImage.asset.url}
                             alt={post.mainImage.alt}
                             className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100">
                                    {post.title}
                                </h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}

                </div>}
                <div className="digitalPojects">
                    {
                        /* digitalLoading ? <Loader />
                        : digitalError ? digitalError
                        :  */showDigital && showDigital.map((digital, index)=> (
                            <Link to={'/post/' + digital.slug.current} key={digital.slug.current} >
                        <span
                         className="block h-64 relative rounded shadow leading-snug bg-white" key={digital._id}
                        >
                            <img src={digital.mainImage.asset.url}
                             alt={digital.mainImage.alt}
                             className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100">
                                    {digital.title}
                                </h3>
                            </span>
                        </span>
                        </Link>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}