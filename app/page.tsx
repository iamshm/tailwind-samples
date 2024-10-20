import Image from "next/image";
import Navbar from "./navbar/page";
import Pendulum from "@/components/Pendulum";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="pl-16 -mt-6 min-h-screen min-w-full">
        <Pendulum />
      </div>
    </div>
  );
}
