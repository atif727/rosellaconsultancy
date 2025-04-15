// import { LoginOutlined, SettingOutlined } from "@ant-design/icons";
// import { Button, Menu, MenuProps } from "antd";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// type MenuItem = Required<MenuProps>["items"][number];

// const items: MenuItem[] = [
//   {
//     label: "Navigation Three - Submenu",
//     key: "SubMenu",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           {
//             label: "Option 1",
//             key: "setting:1",
//           },
//           { label: "Option 2", key: "setting:2" },
//         ],
//       },
//     ],
//   },
// ];

// function Navbar() {
//   const navigate = useNavigate();

//   // const handleclick = (props: string) => {
//   //   navigate(props);
//   // };
//   const [current, setCurrent] = useState("mail");

//   const onClick: MenuProps["onClick"] = (e) => {
//     console.log("click ", e);
//     setCurrent(e.key);
//   };
//   return (
//     <div className=" h-16 flex md:justify-between md:items-center px-36 shadow-2xl">
//       <div>
//         <h1
//           onClick={() => navigate("/")}
//           className="cursor-pointer select-none text-4xl font-bold font-sans"
//         >
//           Rosella <span className="font-serif text-cyan-400">Consultancy</span>
//         </h1>
//       </div>
//       <div className="xl:hidden">
//         <Menu
//           onClick={onClick}
//           selectedKeys={[current]}
//           mode="vertical"
//           items={items}
//         />
//       </div>
//       <div className="max-xl:hidden">
//         <Button onClick={() => navigate("/")} type="text">
//           HOME
//         </Button>
//         <Button onClick={() => navigate("contact")} type="text">
//           {" "}
//           CONTACT
//         </Button>
//         <Button onClick={() => navigate("countrys")} type="text">
//           COUNTRYS
//         </Button>
//         <Button onClick={() => navigate("apply")} type="text">
//           APPLY
//         </Button>
//         <Button onClick={() => navigate("login")} type="text">
//           LOGIN <LoginOutlined />
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import { LoginOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          { label: "Option 2", key: "setting:2" },
        ],
      },
    ],
  },
];

function Navbar() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");
  const [scrolled, setScrolled] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 h-16 flex md:justify-between md:items-center px-36 bg-white transition-shadow duration-300 z-50 ${
        scrolled ? "shadow-2xl" : ""
      }`}
    >
      <div>
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer select-none text-4xl font-bold font-sans"
        >
          Rosella <span className="font-serif text-cyan-400">Consultancy</span>
        </h1>
      </div>
      <div className="xl:hidden">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
        />
      </div>
      <div className="max-xl:hidden">
        <Button onClick={() => navigate("/")} type="text">
          HOME
        </Button>
        <Button onClick={() => navigate("contact")} type="text">
          CONTACT
        </Button>
        <Button onClick={() => navigate("countrys")} type="text">
          COUNTRYS
        </Button>
        <Button onClick={() => navigate("apply")} type="text">
          APPLY
        </Button>
        <Button onClick={() => navigate("login")} type="text">
          LOGIN <LoginOutlined />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
