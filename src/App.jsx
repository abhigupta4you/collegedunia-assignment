
   
   import React, { useState } from 'react';

   // created fake json data

   const jsonData = [
     { "id": 1, "collegeName": "ABC University", "courseFee": 150000, "rating": 8, "ranking": 1 },
     { "id": 2, "collegeName": "XYZ College", "courseFee": 120000, "rating": 7, "ranking": 2 },
     { "id": 3, "collegeName": "EFG Institute", "courseFee": 180000, "rating": 9, "ranking": 3 },
     { "id": 4, "collegeName": "LMN University", "courseFee": 200000, "rating": 8.5, "ranking": 4 },
     { "id": 5, "collegeName": "PQR College", "courseFee": 175000, "rating": 7.5, "ranking": 5 },
     { "id": 6, "collegeName": "UVW Institute", "courseFee": 160000, "rating": 9.5, "ranking": 6 },
     { "id": 7, "collegeName": "IJK University", "courseFee": 190000, "rating": 8, "ranking": 7 },
     { "id": 8, "collegeName": "RST College", "courseFee": 170000, "rating": 7.5, "ranking": 8 },
     { "id": 9, "collegeName": "MNO Institute", "courseFee": 165000, "rating": 9, "ranking": 9 },
     { "id": 10, "collegeName": "QRS University", "courseFee": 185000, "rating": 8.5, "ranking": 10 },
     { "id": 11, "collegeName": "JKL College", "courseFee": 195000, "rating": 7, "ranking": 11 },
     { "id": 12, "collegeName": "STU Institute", "courseFee": 170000, "rating": 8.5, "ranking": 12 },
     { "id": 13, "collegeName": "FGH University", "courseFee": 155000, "rating": 9.5, "ranking": 13 },
     { "id": 14, "collegeName": "NOP College", "courseFee": 175000, "rating": 8, "ranking": 14 },
     { "id": 15,  "collegeName": "VWX Institute", "courseFee": 180000, "rating": 7.5, "ranking": 15 }
   ];
   
   const Table = () => {
     const [searchTerm, setSearchTerm] = useState('');
     const [searchResults, setSearchResults] = useState(jsonData);
   
    // searh functionality   - easy way to search
    
     const handleSearch = event => {              
       setSearchTerm(event.target.value);
       const results = jsonData.filter(item =>
         item.collegeName.toLowerCase().includes(event.target.value.toLowerCase())
       );
       setSearchResults(results);
     };


    // different sorting methods (onclicking at table, it will get sorted)  --- it take "key" and order(self-defined) and implement functionality
     const handleSort = (key, order) => {        
       const sortedResults = [...searchResults].sort((a, b) => {
         if (order === 'asc') {
           return a[key] - b[key];
         } else {
           return b[key] - a[key];
         }
       });
       setSearchResults(sortedResults);
     };
   
     return (
       <div className="container mx-auto">

             <h1 className="text-4xl flex justify-center font-bold text-orange-400 text-center">Assignment </h1>
             <p className='text-xl mx-auto text-center text-gray-500 justify-center flex font-semibold '>added functionality : search, different sorting based on parameters</p>
         <input
           type="text"
           placeholder="Search by college name..."
           value={searchTerm}
           onChange={handleSearch}
           className="block mx-auto mt-4 mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
         />

         <table className="min-w-full bg-white">
           <thead className="bg-gray-800 text-white">
             <tr>
               <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
               <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                 College Name
               </th>
               <th
                 className="text-left py-3 px-4 uppercase font-semibold text-sm cursor-pointer"
                 onClick={() => handleSort('courseFee', 'asc')}
               >
                 Course Fee
               </th>
               <th
                 className="text-left py-3 px-4 uppercase font-semibold text-sm cursor-pointer"
                 onClick={() => handleSort('rating', 'asc')}
               >
                 Rating
               </th>
               <th
                 className="text-left py-3 px-4 uppercase font-semibold text-sm cursor-pointer"
                 onClick={() => handleSort('ranking', 'asc')}
               >
                 Ranking
               </th>
             </tr>
           </thead>
           <tbody className="text-gray-700">
             {searchResults.map(item => (
               <tr key={item.id}>
                 <td className="border-t-2 border-gray-200 px-4 py-2">{item.id}</td>
                 <td className="border-t-2 border-gray-200 px-4 py-2">{item.collegeName}</td>
                 <td className=" border-t-2 border-gray-200 px-4 py-2">{item.courseFee}</td>
                 <td className="border-t-2 border-gray-200 px-4 py-2">{item.rating}</td>
                 <td className="border-t-2 border-gray-200 px-4 py-2">{item.ranking}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     );
   };
   
   export default Table;
   
  

