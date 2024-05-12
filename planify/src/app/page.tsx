import React from "react";
import { authOptions } from "@/lib/auth";
import { Calendar, User } from "lucide-react";
import { getServerSession } from "next-auth";
import Clock from "@/components/ui/Clock/Clock";
import Calendar from "@/components/ui/Calendar/calendar";
import { getServerSession } from "next-auth";
import Clock from "@/components/ui/Clock/Clock";
import Board from "@/components/Board/Board";
import Link from "next/link";




export default async function Home() {

  const session = await getServerSession(authOptions);

  
  return (
    <div className="flex">
      <div className="w-1/4">
      <Calendar prevMonth={prevMonth} nextMonth={nextMonth} monthYear={monthYear} />
      </div>
      <div className="w-1/4">
        <div className="flex justify-center">
          <Clock title="" datediff={0} />
        </div>
      </div>
      <div className="w-1/2">
        <div>
          <Board />
        </div>
      </div>
    </div>
  );
}