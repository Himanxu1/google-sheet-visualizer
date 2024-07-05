import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Modal from 'react-modal'
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../utils/Context';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {data,setData} = useContext(DataContext)
  const [id,setId] = useState(0)
  const [avatarName, setAvatarName] = useState('');
  const [performanceScore, setPerformanceScore] = useState(0);

  const handleAddRow = async () => {
  
    console.log(avatarName,performanceScore)
 +   axios.post('http://localhost:3001/add-row', {id,avatarName,performanceScore}).then(()=>{
  console.log("data added")
  alert("data added")
 }).catch((err)=>{
  console.log(err)
 })
    setIsModalOpen(false);
  };
  
  const onClose = () => setIsModalOpen(false)

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/get-data');
      console.log(response.data)
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



 
  return (
    <>
    <div className='flex justify-between mt-10 mx-10'>
    <h2 className="text-2xl font-semibold mb-4 mx-10">Data Dashboard</h2>
    <div className=''>
    <button
        onClick={fetchData}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mr-2"
      >
        Sync
      </button>
      <button
          onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add row
      </button>
    </div>
    </div>
    <div className="p-4 flex mx-10 ">
    <div className="overflow-x-auto">
      <table className="min-w-[400px] bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Avatar Name</th>
            <th className="py-2 px-4 border-b">Performance Score</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.avatarName}</td>
              <td className="py-2 px-4 border-b">{item.performanceScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="mt-8">
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="avatarName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="performanceScore" stroke="#8884d8" />
      </LineChart>
    </div>
  </div>


  {isModalOpen && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl mb-4">Add New Row</h2>
        <div className="mb-4">
          <label className="block text-gray-700">ID</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Avatar Name</label>
          <input
            type="text"
            value={avatarName}
            onChange={(e) => setAvatarName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Performance Score</label>
          <input
            type="number"
            value={performanceScore}
            onChange={(e) => setPerformanceScore(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddRow}
          >
            Add Row
          </button>
        </div>
      </div>
    </div>}
  
    </>
  );
};

export default Dashboard;
