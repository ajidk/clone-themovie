import { Fragment } from "react";
import { Accordion } from "../../../../components";
import Filter from "./Filter";
import Sort from "./Sort";
import Watch from "./Watch";

const Sidebar = () => {
  const sidebarConfig = [
    {
      title: "Sort",
      content: Sort(),
    },
    {
      title: "Where To Watch",
      content: Watch(),
    },
    {
      title: "Filters",
      content: Filter(),
      status: true,
    },
  ];

  return (
    <Fragment>
      {sidebarConfig.map((item, idx) => (
        <Accordion
          key={`sidebar-${idx}`}
          title={item.title}
          content={item.content}
          status={item.status}
        />
      ))}
    </Fragment>
  );
};

export default Sidebar;
