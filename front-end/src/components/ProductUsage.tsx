import { useRecoilValue } from "recoil";
import { SalesProduct, inventoryUsage } from "../atoms/statsItems";
import { dateProps, productSales } from "../types/types";
import { useGetSalesReport } from "../apis/SalesReport";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGetProductUsageReport } from "../apis/ProductUsageReport";
function ProductUsage({ startDate, endDate }: dateProps) {
  const data = useRecoilValue(inventoryUsage);
  useGetProductUsageReport(startDate, endDate);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 150,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="inventory_name"
          angle={-45}
          interval={0}
          textAnchor="end"
        />
        <YAxis dataKey="quantity_used" />
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
        <Bar
          dataKey="quantity_used"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ProductUsage;
