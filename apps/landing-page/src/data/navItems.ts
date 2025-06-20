// Shared navigation items for Navbar and Footer
export interface NavItem {
  name: string;
  link: string;
}

export const navItems: NavItem[] = [
  { link: "#tech-stack", name: "Technologies" },
  { link: "#structure", name: "Architecture" },
  { link: "#why-ear-stack", name: "Why EAR Stack" },
  { link: "#get-started", name: "Get Started" },
];
