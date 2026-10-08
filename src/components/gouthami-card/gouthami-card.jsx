import { Box, Card, CardContent, Chip, Typography } from "@mui/material"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import TrendingDownIcon from "@mui/icons-material/TrendingDown"

function GouthamiCard({
  title = "Total Sales",
  value = "$1,254",
  change = 12,
  data = [2, 5, 2, 7, 5, 10, 5, 8, 4, 1, 1, 3],
  icon = <TrendingUpIcon />,
}) {
  const isPositive = change >= 0
  const maxValue = Math.max(...data)

  return (
    <Card
      variant="outlined"
      sx={{
        width: 300,
        borderRadius: 4,
        borderColor: "#eceff3",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
        {/* Top row: title + value on the left, icon box on the right */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Box>
            <Typography sx={{ color: "#4b5563", fontSize: 15 }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: 34, fontWeight: 500, color: "#111827", mt: 0.5 }}>
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 3,
              bgcolor: "#eef2ff",
              color: "#1e3a8a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
        </Box>

        {/* Percentage change chip */}
        <Chip
          icon={isPositive ? <TrendingUpIcon /> : <TrendingDownIcon />}
          label={`${isPositive ? "+" : ""}${change}%`}
          size="small"
          sx={{
            mt: 2,
            bgcolor: isPositive ? "#ecfdf5" : "#fef2f2",
            color: isPositive ? "#15803d" : "#b91c1c",
            fontWeight: 500,
            "& .MuiChip-icon": { color: "inherit", fontSize: 18 },
          }}
        />

        {/* Mini bar chart */}
        <Box
          sx={{
            mt: 2.5,
            height: 44,
            bgcolor: "#f3f4f6",
            borderRadius: 1,
            px: 1,
            pb: 0.75,
            display: "flex",
            alignItems: "flex-end",
            gap: 0.75,
          }}
        >
          {data.map((point, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                height: `${Math.max((point / maxValue) * 100, 8)}%`,
                bgcolor: "#4a90e2",
                borderRadius: "3px 3px 0 0",
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default GouthamiCard
