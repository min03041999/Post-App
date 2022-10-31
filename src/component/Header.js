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
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
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
