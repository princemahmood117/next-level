import React from "react";

// this is dashboard layout where the children are rendered
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      this is layout chindreen
    </div>
  );
};

export default DashboardLayout;
