import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Sort = () => {
  return (
    <div className="flex flex-col p-4 w-full">
      <div>Sort Result by</div>
      <div className="form-control w-full max-w-xs mt-3">
        <Select options={options} menuPlacement="top"  />
      </div>
    </div>
  );
};

export default Sort;
