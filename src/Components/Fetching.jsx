
import React, { useState, useEffect } from 'react'
const Fetching = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch("https://openlibrary.org/search.json?author=tolkien&sort=new")
        .then((res)=>res.json())
        .then((data)=>setdata(data))
        console.log(data);
        // console.log(data.docs[0].key);
    }, [])
  return (
    <div>Fetching</div>
  )
}

export default Fetching