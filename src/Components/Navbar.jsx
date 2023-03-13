


// import React, { useState, useEffect } from 'react'
// import axios from "axios"

// const Navbar = () => {

//     const [data, setdata] = useState([])
//     const [query, setQuery] = useState("")

//     // calling API
//     const fetchData = () => {
//         axios.get("https://example-data.draftbit.com/books?_limit=40").then(response => {
//             setdata(response.data)
//         })
//     }
//     useEffect(() => {
//         fetchData()
//     }, [])

//     //search Function and moving to other page

//     return (
//         <>
//             {/* Search function adding */}
//             <form class="flex items-center px-96 pt-10">
//                 <label for="voice-search" class="sr-only">Search</label>
//                 <div class="relative w-full">
//                     <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                         <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
//                     </div>
//                     <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)}
//                         autoFocus
//                         className="grow outline-0" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

//                     <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
//                         <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
//                     </button>
//                 </div>
//                 <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
//                 </button>
//             </form>


//             {/* appedning fecth data in UI */}
//             <div class="container my-12 mx-auto px-4 md:px-12">
//                 <div class="flex flex-wrap -mx-1 lg:-mx-4">
//                     {
//                         data.filter(post => {
//                             if (query === '') {

//                                 return post;
//                             } 
//                             else if (post.title.toLowerCase().includes(query.toLowerCase())) {
//                                 console.log(post.length>0);
//                                 return post;
//                             }
//                         }).map((el, i) => (
//                             <>

//                                 <div key={i} class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">


//                                     <article class="overflow-hidden rounded-lg shadow-lg">

//                                         <a href="#">
//                                             <img alt="Placeholder" class="block h-[300px] w-full" src={el.image_url} />
//                                         </a>

//                                         <header class="flex items-center justify-between leading-tight p-2 md:p-4">
//                                             <h1 class="text-lg">
//                                                 <a class="no-underline hover:underline text-black" href="#">
//                                                     {el.title}
//                                                 </a>
//                                             </h1>

//                                         </header>

//                                         <footer class="flex items-center justify-between leading-none p-2 md:p-4">
//                                             <a class="flex items-center no-underline hover:underline text-black" href="#">
//                                                 <p class="ml-2 text-sm">
//                                                     {el.authors}
//                                                 </p>
//                                             </a>

//                                         </footer>
//                                         <footer class="flex items-center justify-between leading-none p-2 md:p-4">
//                                             <a class="flex items-center no-underline hover:underline text-black" href="#">
//                                                 <p class="ml-2 text-sm">
//                                                     {el.Quote2}
//                                                 </p>
//                                             </a>

//                                         </footer>

//                                     </article>


//                                 </div>
//                             </>
//                         ))}
//                 </div>
//             </div>

//         </>
//     );
// }

// export default Navbar

import React, { useState, useEffect } from 'react'
import axios from "axios"

const Navbar = () => {

    const [data, setdata] = useState([])
    const [query, setQuery] = useState("")

    const [noOfPg, setNoPg] = useState(5) //pagignation page initial value

    // calling API
    const fetchData = () => {
        axios.get("https://example-data.draftbit.com/books?_limit=40").then(response => {
            setdata(response.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    //Adding pagination function
    const slice = data.slice(0, noOfPg)
    console.log("slice", slice)
    
    const pagination=()=>{
        setNoPg(noOfPg+noOfPg)
    }
    return (
        <>
            {/* Search function adding */}
            <form class="flex items-center px-96 pt-10">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)}
                        autoFocus
                        className="grow outline-0" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                    <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                </button>
            </form>


            {/* appedning fecth data in UI */}
            <div class="container my-12 mx-auto px-4 md:px-12 ">
                <div class="flex flex-wrap  -mx-1 lg:-mx-4 ">
                    {
                        slice.filter(post => {
                            if (query === '') {
                                
                                return post;
                            }
                            else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                                console.log(post.length > 0);
                                return post;
                            }
                        }).map((el, i) => (
                            <>

                                <div key={i} class="my-1 h-[500px] px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 sm:w-1/2 ">


                                    <article class="overflow-hidden rounded-lg shadow-lg">

                                        <a href="#">
                                            <img alt="Placeholder" class="block h-[200px] w-full" src={el.image_url} />
                                        </a>

                                        <header class="flex items-center justify-between leading-tight p-2 md:p-4  ">
                                            <h1 class="text-lg">
                                                <a class="no-underline  hover:underline text-black" href="#" >
                                                    {el.title}
                                                </a>
                                            </h1>

                                        </header>

                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4  h-[0px]">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <p class="ml-2 text-sm h-[0px]">
                                                    {el.authors}
                                                </p>
                                            </a>

                                        </footer>
                                        <footer class="flex items-center justify-between leading-none p-2 md:p-4 ">
                                            <a class="flex items-center no-underline hover:underline text-black" href="#">
                                                <p class="ml-2 text-sm">
                                                    {el.Quote2}
                                                </p>
                                            </a>

                                        </footer>

                                    </article>


                                </div>
                            </>
                        ))}
                </div>
                <button onClick={pagination} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-middle">
                    Load More
                </button>
            </div>


        </>
    );
}

export default Navbar