import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import NavBar from './navbar'

import { Card } from 'antd';

const { Meta } = Card;
import 'antd/dist/antd.css';



function CardComp() {
   

    const [music, setMusic] = useState([]);
    const [Value, setValue] = useState("")
    const [filtredMusic, setfiltredMusic] = useState([
      {
      "artistName": "Yo Gotti",
      "id": "1607595067",
      "name": "CM10: Free Game (Deluxe)",
      "releaseDate": "2022-02-04",
      "kind": "albums",
      "artistId": "62763238",
      "artistUrl": "https://music.apple.com/us/artist/yo-gotti/62763238",
      "contentAdvisoryRating": "Explict",
      "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/7f/13/fc/7f13fca5-e341-b416-ddd2-47eca9d15c72/886449863600.jpg/100x100bb.jpg",
      }]
        )


        let tab= []
    useEffect(() => {
        let mounted = true;
        if (mounted) {
          axios
            .get("https://rss.applemarketingtools.com/api/v2/us/music/most-played/25/albums.json")
            .then((res) => {setMusic(res.data.feed.results)})
            
        }
    
        return () => {
          mounted = false;
        };
      }, []);

  const SendValue =(Value)=>{
      setValue(Value)
      
      music.map((ele)=> {
     if(ele.artistName==Value){
      tab.push(ele)
      console.log(tab);
     }else{
       console.log("Nada");
     }
      })
console.log(filtredMusic);
      
  }

  return (
       <div >

         <NavBar   SendValue ={SendValue} />
               <div style={{display:"flex" ,  flexWrap: "wrap"   , margin:100}} >
                        {tab.map((ele,index)=>       
                        <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img style={{height: 300, width:250}}  alt="example" src={ele.artworkUrl100} />}
                        >
                           <Meta title={ele.name} description={ele.artistName} />
                         </Card>) }

    </div>
       </div>
  )
}

export default CardComp