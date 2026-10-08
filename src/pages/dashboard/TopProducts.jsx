import { Card, CardContent, Box, Typography, IconButton } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import WatchIcon from "@mui/icons-material/Watch";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const products = [
  { name: "MacBook Air Max", size: "Medium", price: "$120", icon: <LaptopMacIcon fontSize="small" /> },
  { name: "MacBook Air Max", size: "Medium", price: "$880", icon: <PhoneIphoneIcon fontSize="small" /> },
  { name: "Headphone", size: "Medium", price: "$560", icon: <HeadphonesIcon fontSize="small" /> },
  { name: "Apple Watch", size: "Large", price: "$450", icon: <WatchIcon fontSize="small" /> },
];

function TopProducts() {
  return (
    <Card variant="outlined" sx={{ width: 320, borderRadius: 4, borderColor: "#eceff3" }}>
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography fontWeight={500}>Top Products</Typography>
          <Typography color="primary" fontSize={14} sx={{ cursor: "pointer" }}>
            View All
          </Typography>
        </Box>

        {/* Product list */}
        {products.map((p, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 1.5,
              mb: 1.5,
              border: "1px solid #eceff3",
              borderRadius: 3,
            }}
          >
            {/* Icon box */}
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                bgcolor: "#e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#4b5563",
              }}
            >
              {p.icon}
            </Box>

            {/* Name and size */}
            <Box sx={{ flex: 1 }}>
              <Typography fontSize={14}>{p.name}</Typography>
              <Typography fontSize={12} color="gray">{p.size}</Typography>
            </Box>

            {/* Price */}
            <Typography fontSize={14} fontWeight={500}>{p.price}</Typography>

            {/* 3 dots */}
            <IconButton size="small">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

export default TopProducts;
