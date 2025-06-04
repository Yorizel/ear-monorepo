// Shared navigation items for Navbar and Footer
export interface NavItem {
  name: string;
  link: string;
}

export const navItems: NavItem[] = [
  { name: "Technologies", link: "#tech-stack" },
  { name: "Architecture", link: "#structure" },
  { name: "Why EAR Stack", link: "#why-ear-stack" },
  { name: "Get Started", link: "#get-started" },
];
