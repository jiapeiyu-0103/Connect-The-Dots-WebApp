import React, { useEffect } from 'react';
import useStorage from '../../../hook/useStorage';

//Indicate the upload progress
const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar"
    style={{
        width: 80+ '%' 
    }}
    > Uploading {progress}% </div>
  );
} 

export default ProgressBar;