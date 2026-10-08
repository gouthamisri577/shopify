import { useState } from "react";
import {
  Card, CardContent, Box, Typography, TextField, InputAdornment,
  Table, TableHead, TableBody, TableRow, TableCell, Chip, IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const orders = [
  { name: "Apple Studio Display", id: "#5348", price: "$449.00", status: "Pending" },
  { name: "MacBook Pro M1 256GB", id: "#5349", price: "$339.00", status: "Done" },
  { name: "Galaxy Z Fold8 Slim 5G", id: "#5347", price: "$1,569.00", status: "Rejected" },
  { name: "Dell XPS 13 Laptop", id: "#5350", price: "$999.00", status: "Processing" },
];

const statusColors = {
  Pending: { bg: "#fff7ed", color: "#ea580c" },
  Done: { bg: "#ecfdf5", color: "#059669" },
  Rejected: { bg: "#fef2f2", color: "#dc2626" },
  Processing: { bg: "#fefce8", color: "#ca8a04" },
};

function RecentOrders() {
  const [search, setSearch] = useState("");

  // Only show orders that match what is typed in the search box
  const filteredOrders = orders.filter((order) =>
    order.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card variant="outlined" sx={{ flex: 1, borderRadius: 4, borderColor: "#eceff3" }}>
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography fontWeight={500}>Recent Orders</Typography>
          <Typography color="primary" fontSize={14} sx={{ cursor: "pointer" }}>
            View All
          </Typography>
        </Box>

        {/* Search box */}
        <TextField
          fullWidth
          size="small"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2, bgcolor: "#f3f4f6", borderRadius: 2, "& fieldset": { border: "none" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        {/* Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "gray" }}>Product Name</TableCell>
              <TableCell sx={{ color: "gray" }}>Price</TableCell>
              <TableCell sx={{ color: "gray" }}>Status</TableCell>
              <TableCell sx={{ color: "gray" }} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Typography fontSize={14} noWrap sx={{ maxWidth: 180 }}>
                    {order.name}
                  </Typography>
                  <Typography fontSize={12} color="gray">{order.id}</Typography>
                </TableCell>

                <TableCell>{order.price}</TableCell>

                <TableCell>
                  <Chip
                    label={order.status}
                    size="small"
                    sx={{
                      bgcolor: statusColors[order.status].bg,
                      color: statusColors[order.status].color,
                    }}
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton size="small">
                    <VisibilityOutlinedIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <EditOutlinedIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default RecentOrders;