import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/event" },
];

const BUTTON_ITEMS = [
  { label: "Register", href: "/auth/register", variant: "bordered" },
  { label: "Login", href: "/auth/login", variant: "solid" },
];

const SOCIAL_ITEMS = [
  {
    label: "Facebook",
    href: "https://facebook.com/eventin",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/@eventin",
    icon: <FaInstagram />,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@eventin",
    icon: <FaTiktok />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/@eventin",
    icon: <FaTwitter />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@eventin",
    icon: <FaYoutube />,
  },
];

export { NAV_ITEMS, BUTTON_ITEMS, SOCIAL_ITEMS };
