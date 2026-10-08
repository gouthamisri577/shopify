import { Box, Button } from "@mui/material"
import GouthamiButton from "../../components/gouthami-button/gouthami-button"
import GouthamiCard from "../../components/gouthami-card/gouthami-card"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TopProducts from "./TopProducts";
import RecentOrders from "./RecentOrders";
import Sidebar from "../../components/sidebar/Sidebar";

   function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flex: 1, p: 3, bgcolor: "#f8fafc", minHeight: "100vh" }}>
        <h1>Dashboard</h1>
        <p>Welcome back, Gouthami. Here's your business overview.</p>

        <Box sx={{ display: "flex", gap: 3 }}>
          <GouthamiCard title="Total Sales" />
          <GouthamiCard title="Total Orders" value="759" change="28 from today" icon={<ShoppingCartIcon />} />
          <GouthamiCard title="Total Customers" value="1504" change="34 from new customer" data={[2, 5, 2, 7, 5]} icon={<PeopleAltIcon />} />
          <GouthamiCard title="Total Revenue" value="$25,021" change="$1254 from this month" icon={<AttachMoneyIcon />} />
        </Box>

        <Box sx={{ display: "flex", gap: 3, mt: 3 }}>
          <RecentOrders />
          <TopProducts />
        </Box>
      </Box>
    </Box>
  );
}


export default Dashboard