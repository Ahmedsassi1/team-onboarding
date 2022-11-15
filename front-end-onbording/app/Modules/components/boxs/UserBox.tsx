import Image from "next/image";
import AddBtn from "../buttons/AddBtn";
import UpdateBtn from "../buttons/UpdateBtn";
import DeleteBtn from "../buttons/DeleteBtn";
import RoleBtn from "../buttons/RoleBtn";

export default function UserBox() {
  return (
    <ul className="container mx-auto px-4 max-w-screen-sm">
      <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              className="w-8 h-8 rounded-full"
              src=""
              alt="Neil image"
              width={8}
              height={8}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Neil Sims
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              email@flowbite.com
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $320
          </div>
          <AddBtn />
          <UpdateBtn />
          <DeleteBtn />
          <RoleBtn />
        </div>
      </li>
    </ul>
  );
}
