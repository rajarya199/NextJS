import { revalidatePath } from "next/cache"

export default async function MockUsers(){
    const response=await fetch("https://6755b22d11ce847c992ae31b.mockapi.io/users")
    const users=await response.json()

async function addUser(formData){
    "use server"
    const name=formData.get("name")
    const email=formData.get("email")

    const res=await fetch(
        "https://6755b22d11ce847c992ae31b.mockapi.io/users",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email}),

        }
    );
    const newUser=await res.json();
    revalidatePath("/mock-users")
    console.log(newUser)
}

    return(

 <div className="py-10">
    <form  className=" mb-4"action={addUser}>
    <input
          type="text"
          name="name"
          required
          placeholder="name"
          className="p-2 mr-2 border border-gray-300 rounded text-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className="p-2 mr-2 border border-gray-300 rounded text-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
          </button>
    </form>
    <ul className=" grid grid-cols-4 gap-4 py-10">
            {users.map((user)=>(
                <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                      {user.name} ({user.email})  
                </li>
            ))}

        </ul>

 </div>
    )
}