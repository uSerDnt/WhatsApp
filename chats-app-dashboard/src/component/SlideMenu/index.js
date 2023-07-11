import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const SideMenu = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "posts",
      label: "Posts",
    },
    {
      key: "user",
      label: "Users",
    },
    {
      key: "comments",
      label: "Comments",
    },
    {
      key: "videos",
      label: "Videos",
    },
    {
      key: "signOut",
      label: "Sign Out",
      danger: "true",
    },
  ];

  const onMenuItemClicked = async (menuItem) => {
    if (menuItem.key === "signOut") {
      await Auth.signOut();
      window.location.reload();
    } else {
      navigate(menuItem.key);
    }
  };

  return <Menu items={menuItems} onClick={onMenuItemClicked} />;
};

export default SideMenu;
