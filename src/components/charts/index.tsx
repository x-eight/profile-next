import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Enero", cantidad: 4000, precio: 2400 },
  { name: "Febrero", cantidad: 3000, precio: 1398 },
  { name: "Marzo", cantidad: 2000, precio: 9800 },
  { name: "Abril", cantidad: 2780, precio: 3908 },
  { name: "Mayo", cantidad: 1890, precio: 4800 },
  { name: "Junio", cantidad: 2390, precio: 3800 },
  { name: "Julio", cantidad: 3490, precio: 4300 },
];

export const Graphic = () => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="cantidad"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="precio" stroke="#82ca9d" />
    </LineChart>
  );
};

