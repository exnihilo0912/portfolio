// import fs from 'fs';
// import pl from 'nodejs-polars';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// const readParquetFiles = (dir, dfArray = []) => {
//   const entries = fs.readdirSync(dir, {
//     withFileTypes: true,
//   });
//   for (const entry of entries) {
//     const fullPath = `${dir}/${entry.name}`;
//     if (entry.isDirectory()) {
//       readParquetFiles(fullPath, dfArray);
//     } else if (entry.isFile() && entry.name.endsWith('.parquet')) {
//       const df = pl.readParquet(fullPath, {
//         numRows: 500,
//       });
//       dfArray.push(df);
//     }
//   }
//   return dfArray;
// };

function Hello() {
  return (
    <div>
      <h1>Parquet file reader</h1>
      <p>Some random text</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
