/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useAppDispatch } from "../../../app/hooks";

interface customBtnState {
  data: { title: string }[];
  update: string;
  onHandleUpdate: any;
}

const CustomButton: React.FC<customBtnState> = ({
  data,
  onHandleUpdate,
  update,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-start border border-darkBlue rounded-2xl gap-x-2">
      {data?.map((item, idx) => (
        <h3
          key={`CustomButton-${idx}`}
          className={`capitalize cursor-pointer ${
            update == item.title
              ? "bg-darkBlue text-[#5DB39A]"
              : "text-darkBlue"
          } rounded-2xl px-4`}
          onClick={() => dispatch(onHandleUpdate(item.title))}
        >
          {item.title}
        </h3>
      ))}
    </div>
  );
};

export default CustomButton;
