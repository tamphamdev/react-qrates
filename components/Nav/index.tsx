import React from "react";

type LinkItem = {
  name: string;
};
type NavLink = {
  links: any;
  renderItems?: (item: Object, index: number) => React.ReactNode;
};

const NavLink: React.FC<NavLink> = ({ links, renderItems }) => {
  return (
    <>
      {links && renderItems
        ? links.map((item, index) => renderItems(item, index))
        : ""}
    </>
  );
};

export default NavLink;
