import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

const UpperNav = () => {
  return (
    <section>
      <div className="flex gap-2 items-center bg-red-300">
        <PhoneIcon className="h-5 w-5" />
        <p>Support: (212)456-7890</p>
      </div>
      <div>
        <p> En  </p>
      </div>
    </section>
  );
};

export default UpperNav;
