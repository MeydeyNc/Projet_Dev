import React from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Clock from "@/components/ui/Clock/Clock";
import Board from "@/components/Board/Board";
import Link from "next/link";




export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <div className="flex">
      <div className="w-1/4">
        {/* Left container for future calendar */}
      </div>
      <div className="w-1/4">
        <div className="flex justify-center">
          <Clock title="" datediff={0} />
        </div>
      </div>
      <div className="w-1/2">
        <div>
          <Link 
          className="btn-primary inline-flex mb-4"
          href='/new-board'>
            Create new Board &rarr;
            </Link>
        </div>
      </div>
    </div>
  );
}