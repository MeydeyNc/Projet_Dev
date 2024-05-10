import React from "react";
import { authOptions } from "@/lib/auth";

import { getServerSession } from "next-auth";
import Clock from "@/components/ui/Clock/Clock";
import Board from "@/components/Board/Board";
import CreateBoard from "@/components/Board/CreateBoard";



export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <div className="flex">
      <div className="w-1/3">
        {/* Left container for future calendar */}
      </div>
      <div className="w-1/3">
        <div className="flex justify-center"> {/* Add this div */}
          <Clock title="" datediff={0} />
        </div>
      </div>
      <div className="">
        <CreateBoard />
      </div>
      <div className="w-1/3">
        {/* Right container for Board */}
        <Board />
      </div>
    </div>
  );
}
