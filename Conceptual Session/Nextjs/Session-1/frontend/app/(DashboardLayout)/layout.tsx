import React from "react";

// this is dashboard layout where the children are rendered
const DashboardLayout = ({ admin, user }: { admin: React.ReactNode, user: React.ReactNode, }) => {
  return (
    <div>

      {admin}
      <br />
      {user}
  
    </div>
  );
};

export default DashboardLayout;
