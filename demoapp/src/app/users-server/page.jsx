export default async function UsersServer(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const users=await response.json()
    return(

      <ul className="space-y-4 p-4">
            {users.map((item)=>(
                <li key={item.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                      {item.name} ({item.email})  
                </li>
            ))}

        </ul>
    )
}