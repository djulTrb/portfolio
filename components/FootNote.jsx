import React from "react";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const FootNote = () => {
  return (
    <p className="py-1.5 w-full text-center cursor-default bg-rose-200 text-rose-800 font-urbanist xs:text-lg xxxs:text-base font-medium opacity-70 px-3">
      Appreciate the scroll! Crafted with care & love — now back to reality,
      those exams won’t pass themselves!{" "}
      <span className="text-nowrap">
        {" "}
        <span className="inline-block size-5 relative xs:top-1 xxxs:top-1.5 ml-1">
          <FaRegFaceSmileBeam />
        </span>{" "}
        {new Date().getFullYear()} © DJILLALI TAREB{" "}
      </span>
    </p>
  );
};

export default FootNote;
