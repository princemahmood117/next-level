import Link from "next/link";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const menuItems = [
    { id: "", label: "Account Information" },
    { id: "orders", label: "Order Details" },
    { id: "address", label: "Delivery Address" },
    { id: "wishlist", label: "Wishlist" },
    { id: "logout", label: "Logout" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <nav className="space-y-1">
              {menuItems.map((item) => {
                return (
                  <Link
                    className="flex flex-col gap-3 p-1"
                    href={`/profile/${item.id}`}
                    key={item.id}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* this will render dynamically based on click */}
        <div>
            {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
