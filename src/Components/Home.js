import React from 'react'
import css from '../CSS/Home.module.css'
import {useEffect, useState} from 'react'

export default function Home() {

    var [costs, setCosts] = useState([]);

    useEffect(()=>{
        fetch('https://www.ttcsec.gov.tw/OpenData.aspx?SN=6AA212E46A2F60A3'  
            )
            .then(res=>res.json())
            .then(data=>{ 
                setCosts(data)
            })
            .catch((e)=>{
                console.log(e)
            })
            console.log(costs)
    },[])

  return (
    <div className={css.content} >
           
        <div className={css.allcostDiv}> 
            {
                costs.map((cost)=>( 
                    <div className={css.costDiv}>
                        <div className={css.textStyle}>
                            <a href={cost.Source}>  
                                {cost.title}
                            </a>
                        </div>
                        {cost.ArticleType==1 ?
                           
                            <div className={css.download}>
                                <a href={cost.FileName} className={css.download}>  
                                    下載
                                </a>
                            </div>
                                
                            :<div></div>
                        }
                       
                    </div>
                  ))        
              }         
        </div>
            

    </div>
  )
}
