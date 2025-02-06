"use server"
import { client } from "@/sanity/lib/client"
import { auth, currentUser } from "@clerk/nextjs/server"



export async function clerkGetUser() {
 const {userId} = await   auth()
 const user = await currentUser()
 
 const userName =  `${user?.firstName} ${user?.lastName}` 
 const userEmail= user?.externalAccounts[0].emailAddress
 const userImage= user?.imageUrl
 
return {
    userId,
    userName,
    userEmail,
    userImage}        

}

export async function sanityUserPost() {
  const user = await  clerkGetUser()


    const userObject = {
        _type:"user",
       _id:`user-${user.userId}`,
        userId:user.userId,
        email:user.userEmail,
        name:user.userName,
        image:user.userImage
     

    }
const res =  client.createOrReplace(userObject)
}

    