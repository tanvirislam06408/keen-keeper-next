'use client'
import { FriendsContext } from '@/context/FriendsProvider';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
const Stats = () => {

  const { call } = useContext(FriendsContext);
  const callData = call.filter(callInfo => callInfo.type === "Call");
  const textData = call.filter(textInfo => textInfo.type === "Text");
  const videoData = call.filter(videoInfo => videoInfo.type === "Video");

  const data = [
    { name: 'Calls', value: callData.length, fill: '#244D3F' },
    { name: 'Text', value: textData.length, fill: '#7E35E1' },
    { name: 'Video', value: videoData.length, fill: '#37A163' },

  ];


  return (
    <div className='container mx-auto px-3'>
      <h1 className='font-bold text-5xl mt-5'>Friendship Analytics</h1>

      {
        call.length === 0 && <div className="text-center mt-30 min-h-[50vh]">
          <h1 className='text-3xl'>No data available</h1>
        </div>
      }
      {
        call.length >= 1 && <div className="border-2 border-gray-200 rounded-2xl p-10 mt-3">

          <h1 className='text-gray-600 text-2xl'>By Interaction Type</h1>
          <div className="flex flex-col justify-center items-center mt-15">
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}

              />
              <Tooltip />
              <div className="mt-5">
                <Legend />
              </div>
            </PieChart>
          </div>
        </div>
      }
    </div>
  );
};

export default Stats;