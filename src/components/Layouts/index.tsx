import React from "react";
import { Header } from "..";

interface mainLayoutState {
  children: any;
}

const MainLayout: React.FC<mainLayoutState> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
