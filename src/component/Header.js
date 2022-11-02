import React from "react";
import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const navbarItems = [
    {
      path: "/",
      display: "News",
    },
    {
      path: "/customer",
      display: "Customer",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];

  const { pathname } = useLocation();
  const active = navbarItems.findIndex((e) => e.path === pathname);

  const client = [
    {
      path: "setting",
      display: "My Settings",
      set: true,
    },
    {
      path: "help_and_feedback",
      display: "Help & Feedback",
      set: false,
    },
    {
      path: "logout",
      display: "Log Out",
      set: true,
    },
  ];

  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Toggle showIn="sm" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit" hideIn="sm">
            Animal Post
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="sm">
          {navbarItems.map((e, i) => (
            <Link
              to={e.path}
              key={i}
              className={`navbar-item ${i === active ? "active" : ""}`}
            >
              {e.display}
            </Link>
          ))}
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@sm": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  tituscorbin@gmail.com
                </Text>
              </Dropdown.Item>
              {client.map((item, i) => (
                <Dropdown.Item withDivider={item.set} key={i}>
                  <Link to={item.path}>{item.display}</Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {navbarItems.map((item, i) => (
            <Navbar.CollapseItem key={i}>
              <Link
                className={`collapse-item ${i === active ? "active" : ""}`}
                css={{
                  minWidth: "100%",
                }}
                to={item.path}
              >
                {item.display}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
