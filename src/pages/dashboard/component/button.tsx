import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { updateStatus } from "../../../feature/general/slice";

interface customBtnState {
  data: { title: string }[];
}

const CustomButton: React.FC<customBtnState> = ({ data }) => {
  const dispatch = useAppDispatch();
  const { trending } = useAppSelector((state) => state.general);

  return (
    <div className="flex items-center justify-start border border-darkBlue rounded-2xl gap-x-2">
      {data?.map((item, idx) => (
        <h3
          key={`CustomButton-${idx}`}
          className={`capitalize cursor-pointer ${
            trending === item.title
              ? "bg-darkBlue text-[#5DB39A]"
              : "text-darkBlue"
          } rounded-2xl px-4`}
          onClick={() => dispatch(updateStatus(item.title))}
        >
          {item.title}
        </h3>
      ))}
    </div>
  );
};

export default CustomButton;
