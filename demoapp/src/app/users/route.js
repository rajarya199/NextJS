 
 export const users=[
    {id:1,name:"harry bdr"},
    {id:2,name:"madan bdr"},

 ]
  
 export async function GET(){
    return Response.json(users)
 }

 export async function POST(request){
     const user=await request.json()
     const newUser={
        id:users.length+1,
        name:user.name
     }
     users.push(newUser);
     return new Response(JSON.stringify(newUser),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201,
     })

 }