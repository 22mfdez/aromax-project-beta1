import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { FaUser, FaShoppingCart } from "react-icons/fa"; // Importamos los iconos
import { Button, useDisclosure } from "@nextui-org/react";
import Carrito from "../main_pages/Carrito";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white shadow-md">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">AROMAX</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/productos">
              Productos
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/personalizar">Personaliza el tuyo</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Aromax Club
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="gap-4">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="text-black flex items-center">
              <FaUser size={20} className="mr-2 icon" />
            </Link>
            <Button
              variant="light"
              onClick={() => onOpen()}
              className="text-black flex items-center"
            >
              <FaShoppingCart size={20} className="mr-2 icon" />
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Carrito isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
