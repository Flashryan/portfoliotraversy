import React from 'react'
import sanityClient from '../client.js';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {fetchDigital, fetchPrint, fetchUx, fetchMotion} from '../actions/projectActions';
import {useDispatch, useSelector} from 'react-redux'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function PrintProjects() {

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
    .fetch(`*[_type == "post" && title match "Print"]{
        title,
        slug,
        "name": author->name,
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
            <section className="container mx-auto w-full" >
            
            {<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" >
            
                {postData && postData.map((post, index) => ( 
                <article className="portfolioImage-individual">
                                            <span
                     className=" h-64 leading-snug bg-white" key={index}
                    >
                        <div className="block h-64 relative leading-snug text-white text-lg text-center align-middle ... text-header " key={index} style={{overflow: "hidden", cursor: "pointer"}}>
                        {post.title}
                                                    <img src={post.mainImage.asset.url} className="portfolioImage" />
                        </div>
                    {/* </Link> */}
                    </span>
                </article>
                ))}
            </div>}
            
        </section>
        </main>
    )
}