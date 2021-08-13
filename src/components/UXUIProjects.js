import React from 'react'
import sanityClient from '../client.js';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {fetchDigital, fetchPrint, fetchUx, fetchMotion} from '../actions/projectActions';
import {useDispatch, useSelector} from 'react-redux'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { SRLWrapper } from "simple-react-lightbox";
import img01 from "../images/image-1.jpeg"


export default function UXUIProjects({showModal}) {

    const options = {
        buttons: {
          backgroundColor: "rgba(140, 94, 88, 0.8)",
          iconColor: "rgba(241, 191, 152, 0.7)"
        },
        settings: {
          overlayColor: "rgba(255, 237, 225, 1)",
          transitionSpeed: 1000,
          transitionTimingFunction: "linear"
        },
        thumbnails: {
          thumbnailsSize: ["120px", "100px"],
          thumbnailsOpacity: 0.4
        },
        caption: {
          captionColor: "rgba(241, 191, 152, 1)"
        },
        progressBar: {
          size: "4px",
          backgroundColor: "rgba(255, 237, 225, 1)",
          fillColor: "#AF9AB2"
        }
      };

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
    .fetch(`*[_type == "post" && title match "UXUI"]{
        title,
        slug,
        "name": author->name,
        tileDescription,
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
let images = [{
    url: `images[].asset->url`
}]
    return (
        <>
        <SRLWrapper>
        <main className='w-full'>

            <section className="container mx-auto w-full" >
            
                {<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" >
                
                    {postData && postData.map((post, index) => ( 
                    <article className="portfolioImage-individual">
                                                <span
                         className=" h-64 leading-snug bg-white " key={index}
                        >
                            <div className="block h-64 relative grid grid-cols-1" key={index} style={{overflow: "hidden", cursor: "pointer"}}>
                            <span className={"absolute top-2 text-white text-lg text-center content-center align-middle ... font-header uppercase font-bold text-opacity-20 text-7xl tileTitle flex justify-center"}>
                            {post.title}
                            </span>
                            <span className="text-white font-header uppercase font-bold text-3xl flex text-center font-light my-12 flex justify-center leading-tight">
                            {post.tileDescription}
                            </span>
                                <img src={post.mainImage.asset.url} className="portfolioImage absolute top-0" style={{display: "block", marginLeft: "auto", marginRight:"auto", width:"100%" }} />
                            </div>
                        {/* </Link> */}
                        </span>
                    </article>
                    ))}
                </div>}
                
            </section>
        </main>
        </SRLWrapper>
    </>
    )
}