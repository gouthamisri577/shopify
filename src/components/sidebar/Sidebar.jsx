import { useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const topMenu = [
  { label: "Dashboard", icon: <GridViewOutlinedIcon fontSize="small" /> },
  { label: "Orders", icon: <ShoppingCartOutlinedIcon fontSize="small" /> },
  { label: "Products", icon: <Inventory2OutlinedIcon fontSize="small" /> },
  { label: "Analytics", icon: <BarChartOutlinedIcon fontSize="small" /> },
];

const bottomMenu = [
  { label: "Settings", icon: <SettingsOutlinedIcon fontSize="small" /> },
  { label: "Help", icon: <HelpOutlineOutlinedIcon fontSize="small" /> },
];

function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  // One menu item (used for both top and bottom menus)
  const MenuItem = ({ item }) => {
    const isActive = active === item.label;
    return (
      <Box
        onClick={() => setActive(item.label)}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          py: 1.2,
          mb: 0.5,
          borderRadius: 2,
          cursor: "pointer",
          color: isActive ? "#fff" : "#cbd5e1",
          bgcolor: isActive ? "#2563eb" : "transparent",
          "&:hover": { bgcolor: isActive ? "#2563eb" : "#1e293b" },
        }}
      >
        {item.icon}
        <Typography fontSize={14}>{item.label}</Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: 240,
        minWidth: 240,
        height: "100vh",
        position: "sticky",
        top: 0,
        bgcolor: "#0f172a",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 3, py: 2.5 }}>
        <StorefrontOutlinedIcon />
        <Typography fontWeight={600}>Shopify</Typography>
      </Box>

      {/* Top menu */}
      <Box sx={{ px: 2, mt: 1, flex: 1 }}>
        {topMenu.map((item) => (
          <MenuItem key={item.label} item={item} />
        ))}
      </Box>

      {/* Bottom menu */}
      <Box sx={{ px: 2, py: 2, borderTop: "1px solid #1e293b" }}>
        {bottomMenu.map((item) => (
          <MenuItem key={item.label} item={item} />
        ))}
      </Box>

      {/* User profile */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          py: 2,
          borderTop: "1px solid #1e293b",
        }}
      >
        <Avatar sx={{ width: 36, height: 36, bgcolor: "#f59e0b" }}>G</Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography fontSize={13}>Gouthami</Typography>
          <Typography fontSize={11} color="#94a3b8" noWrap>
            gouthami@gmail.com
          </Typography>
        </Box>
        <IconButton size="small" sx={{ color: "#ef4444" }}>
          <LogoutOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Sidebar;