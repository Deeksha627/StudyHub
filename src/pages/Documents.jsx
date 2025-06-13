import React, { useState } from 'react';

const data = {
  Math: {
    1: ['Math_Paper1.pdf', 'Math_Paper2.pdf'],
    2: ['Math_Sem2.pdf']
  },
  Physics: {
    1: ['Physics_Basics.pdf'],
    3: ['Quantum_Notes.pdf']
  },
  Programming: {
    2: ['C_Lab.pdf', 'Python_Sem2.pdf'],
    3: ['DSA_Sem3.pdf']
  }
};

function Documents() {
  const [subject, setSubject] = useState('');
  const [semester, setSemester] = useState('');
  const [docs, setDocs] = useState([]);

  const handleSubjectChange = (e) => {
    const selected = e.target.value;
    setSubject(selected);
    setSemester('');
    setDocs([]);
  };

  const handleSemesterChange = (e) => {
    const selectedSem = e.target.value;
    setSemester(selectedSem);
    setDocs(data[subject]?.[selectedSem] || []);
  };

  return (
    <div className="p-4">
      <h1>Select Documents</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>📘 Subject: </label>
        <select value={subject} onChange={handleSubjectChange}>
          <option value="">-- Select Subject --</option>
          {Object.keys(data).map(sub => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>
      </div>

      {subject && (
        <div style={{ marginBottom: '1rem' }}>
          <label>🎓 Semester: </label>
          <select value={semester} onChange={handleSemesterChange}>
            <option value="">-- Select Semester --</option>
            {Object.keys(data[subject]).map(sem => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>
      )}

      {docs.length > 0 && (
        <div>
          <h3>📄 Available Documents:</h3>
          <ul>
            {docs.map((doc, idx) => (
              <li key={idx} style={{ marginBottom: '10px' }}>
                {doc}  
                <button style={{ marginLeft: '10px' }}>
                  ⬇️ Download
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Documents;
