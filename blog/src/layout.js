import React, { useEffect, useState } from 'react'
import { Bloglist } from './bloglist'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Header } from './header'
import { Login } from './login'
import { Signup } from './Signup'
import { Header2 } from './header2'
import { Footer } from './Footer'
import Blogsite from './Blogsite'
import { useSelector } from 'react-redux'
import "./layout.scss"

export function Layout(){ 
    const [local,setlocalstorage]=useState();
    const [loading,setloading]=useState();  
    console.log("loading in layout",loading);
    useEffect(()=>{
        setlocalstorage(localStorage.getItem("token"));     
        console.log("localstorageeeee",local);
    },[local]);
    if(loading){
        return(
            <img src='https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt='not loaded'/>
        )
    }
    if(!loading&&localStorage.getItem("token")!== null){
    return(
        <div>
        <header>
        <Header setlocalstorage={setlocalstorage}/>
        </header>
        <article>
        <Header2/>
        
        <Bloglist setloading={setloading}/>    
         </article>
         <footer>
         <Footer/>
         </footer>
         </div>
    
    )
    }
    else{
        return(
                <>
                <Login setlocalstorage={setlocalstorage}/>
                </>
                
        )
    }

}