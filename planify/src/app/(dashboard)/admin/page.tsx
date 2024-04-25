import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
    const session = await getServerSession(authOptions);
    
    if (session?.user) {
        return <h2>Admin page - Welcome back {session?.user.username} </h2>
    }

    return (
        <h2>Admin page - Please sign in</h2>
    )
};

export default page;