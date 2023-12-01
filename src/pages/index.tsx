import PublicLayout from "@/layouts";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
};

export default MainLayout;
