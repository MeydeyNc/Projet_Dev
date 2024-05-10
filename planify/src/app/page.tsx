import React from "react";
import { authOptions } from "@/lib/auth";
/*import { Calendar, User } from "lucide-react";*/
import { getServerSession } from "next-auth";
import Clock from "@/components/ui/Clock/Clock";
import Calendar from "@/components/ui/Calendar/calendar";



export default async function Home() {

  const session = await getServerSession(authOptions);

  
  return (
    
    <div>
      <h1 className='text-4xl flex justify-center'>Planify</h1>
      <Calendar prevMonth={prevMonth} nextMonth={nextMonth} monthYear={monthYear} />
      <Clock title="Bonsoir" datediff={0} />
      <h2>Client Session</h2>
      {/* <User /> */}
      <h2>Server Session</h2>
      {JSON.stringify(session)}
    </div>
  );
}
