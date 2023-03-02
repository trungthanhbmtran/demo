'use client'
import dynamic from 'next/dynamic'


const Page = ({params : {posts}}) => {
    // const {posts} = 
    // console.log('params',posts)
    const Posts = dynamic(() => import(`../../../Posts/${posts}`))
    return (
       <Posts/>
    )
}

export default Page