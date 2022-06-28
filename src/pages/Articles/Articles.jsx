import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Styles from './Articles.module.scss'


function Articles() {
    const [articles,setArticles] = useState([])

    useEffect(()=>{
         axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mahir.uslu").then((res)=>{
            console.log(res.data.items)
            setArticles(res.data.items)
        }).catch((e)=>{
            console.log(e.message)
        })
    },[])
  return (
    <div className={Styles.articles}>{articles.map((item)=>
        item.title
    )}</div>
  )
}

export default Articles