import Image from "next/image";
import person1 from "@/public/image/person-1.svg";
import person2 from "@/public/image/person-2.svg";
import person3 from "@/public/image/person-3.svg";

export default function AIIntegrationCard() {
  return (
    <div className="rounded-lg bg-primary-light p-6 dark:bg-primary-dark">
      <div className="mb-4 flex items-center justify-between text-white dark:text-on-color-dark">
        <div className="flex space-x-2">
          <Image
            src={person1}
            alt="person1"
            width={30}
            height={30}
            className="h-8 w-8 rounded-full bg-white bg-center dark:bg-on-color-dark"
          />
          <Image
            src={person2}
            alt="person2"
            width={30}
            height={30}
            className="h-8 w-8 rounded-full bg-white bg-center dark:bg-on-color-dark"
          />
          <Image
            src={person3}
            alt="person3"
            width={30}
            height={30}
            className="h-8 w-8 rounded-full bg-white bg-center dark:bg-on-color-dark"
          />
        </div>
        <span className="text-2xl">↗</span>
      </div>
      <div className="mb-2 text-4xl font-bold text-white dark:text-on-color-dark">4,9 ✭</div>
      <div className="mb-4 text-white dark:text-on-color-dark">AIの統合</div>
      <button className="w-full rounded-full bg-white py-2 text-on-color-light transition-opacity hover:opacity-80 dark:bg-background-dark dark:text-on-color-dark">
        今すぐ始める
      </button>
    </div>
  );
}
