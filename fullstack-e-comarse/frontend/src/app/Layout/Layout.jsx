import React from "react";
import UserHeader from "../../features/auth/ui/components/UserHeader";
import SellerHeader from "../../features/auth/ui/components/SellerHeader";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const Layout = () => {
  const { users } = useSelector((state) => state.auth);

  return (
    <div>
      {users?.role === "seller" ? <SellerHeader /> : <UserHeader />}

      <Outlet />
    </div>
  );
};

export default Layout;
