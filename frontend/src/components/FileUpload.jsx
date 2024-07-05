
import  { useContext, useState } from 'react';
import axios from 'axios';
import { LuHardDriveUpload } from "react-icons/lu";
import { DataContext } from '../utils/Context';
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const {setData} = useContext(DataContext)
 
  const navigate = useNavigate()

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
  
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setData(response.data)
      navigate("/dashboard")
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
     <div className="flex flex-col items-center space-y-4  mt-40">
      <div className="flex items-center justify-center w-64 h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
        <input 
          type="file" 
          className="hidden" 
          id="file-upload" 
          onChange={handleFileChange} 
        />
        <label htmlFor="file-upload" className="flex flex-col items-center cursor-pointer">
        <LuHardDriveUpload className='text-2xl'/>
          <span className="mt-2 text-sm text-gray-600">Click to upload</span>
        </label>
      </div>
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Upload
      </button>
    </div>
   
    
    </div>
  );
};

export default FileUpload