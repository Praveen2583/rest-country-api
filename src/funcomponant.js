import react from "react";
import axios from "axios";
import React ,{useEffect,useState} from 'react';


function Fetch(){
    const [post,setPost]=useState([])

    useEffect(()=>{
        axios.get('http://api.countrylayer.com/v2/all?access_key=b392497a357902adf7e464cfbedf9cad')
        .then(res=>{
            //console.log(res.data)
            setPost(res.data)
        })
        .catch((er)=>{
            console.log("error");
        })

        //console.log(post)



    },[])

    return(
        <div>
            <h2>Countries</h2>
            <table border='1'>
                <thead>
                    <th>Name</th>
                    <th>Call Code</th>
                    <th>Capital</th>
                    <th>Region</th>
                    <th>Modify</th>
                </thead>
                {post.map((posts)=>
                <tr>
                    <td>{posts.name}</td>
                    <td>{posts.callingCodes}</td>
                    <td>{posts.capital}</td>
                    <td>{posts.region}</td>


                    <button>Update</button> &nbs
                    <button>Delete</button>
                </tr>
                )}


            </table>



        </div>







    )
}


export default Fetch;

