import React, { useState } from 'react';

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert(`File "${file.name}" uploaded successfully!`);
      // You can replace this with actual upload logic (e.g., Firebase or backend)
    }
  };

  return (
    <div className="p-4">
      <h1>Upload Question Paper</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: '10px' }}>
        Upload
      </button>
    </div>
  );
}

export default Upload;
