const Sort = () => {
  return (
    <div className="flex flex-col">
      <div>Sort Result by</div>
      <div className="form-control w-full max-w-xs mt-3">
        <select className="bg-white border px-2 py-3 rounded-lg">
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
