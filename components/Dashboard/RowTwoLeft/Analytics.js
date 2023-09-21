"use client";
import classNames from "classnames";
import ExpandBtn from "../ExpandBtn";

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const Analytics = ({ cardId, expandedCard }) => {
  const data = [
    {
      name: "20 Sep",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "20 Sep",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "20 Sep",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "20 Sep",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "20 Sep",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "20 Sep",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "20 Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className={classNames(
        " transition-all  duration-300 overflow-hidden opacity-1 ease-in-out   rounded-[20px] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]",
        {
          "w-0 h-0 p-0 opacity-0 hidden":
            expandedCard && cardId !== expandedCard,
          "h-[338px] w-full p-[32px_20px]": cardId === expandedCard,
          " w-[46.6842vw]  max-h-[305px] p-[20px] max-w-[1000px]":
            !expandedCard,
        }
      )}
    >
      {/* header */}
      <div className="flex justify-between">
        <select className="w-[142px] outline-none h-[46px] text-[14px] text-[#7F7789] p-[9px]  border border-[#C8C7C9] rounded-[6px]">
          <option>Reach overview</option>
          <option value="">Volvo</option>
          <option value="">Saab</option>
          <option value="">Mercedes</option>
          <option value="">Audi</option>
        </select>

        <div className="flex items-center  gap-[10px]">
          <select className="w-[111px] outline-none h-[46px] text-[14px] text-[#7F7789] p-[9px]  border border-[#C8C7C9] rounded-[6px]">
            <option>Post</option>
          </select>
          <select className="w-[67px] outline-none h-[46px] text-[14px] text-[#7F7789] p-[9px]  border border-[#C8C7C9] rounded-[6px]">
            <option>Fb</option>
          </select>
          <select className="w-[137px] outline-none h-[46px] text-[14px] text-[#7F7789] p-[9px]  border border-[#C8C7C9] rounded-[6px]">
            <option>Last & days</option>
          </select>

          <ExpandBtn cardId={cardId} />
        </div>
      </div>

      {/* graph */}

      <ResponsiveContainer width="100%" h="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 26, right: 15, left: 15, bottom: 25 }}
        >
          <defs>
            <linearGradient
              id="colorUv"
              x1="404.5"
              y1="-126.752"
              x2="404.5"
              y2="165.806"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00FABA" />
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#00FABA"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
