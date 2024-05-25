// import React, { useState, useEffect } from 'react';
// import './App.css';
// import 'h8k-components';
// import Articles from './components/Articles';

// const title = "Sorting Articles";

// function App({ articles }) {
//     const [sortedArticles, setSortedArticles] = useState([...articles]);

//     useEffect(() => {
//         sortByUpvotes();
//     }, []);

//     const sortByUpvotes = () => {
//         const sorted = [...articles].sort((a, b) => b.upvotes - a.upvotes);
//         setSortedArticles(sorted);
//     };

//     const sortByDate = () => {
//         const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
//         setSortedArticles(sorted);
//     };

//     return (
//         <div className="App">
//             <h8k-navbar header={title}></h8k-navbar>
//             <div className="layout-row align-items-center justify-content-center my-20 navigation">
//                 <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
//                 <button data-testid="most-upvoted-link" className="small" onClick={sortByUpvotes}>Most Upvoted</button>
//                 <button data-testid="most-recent-link" className="small" onClick={sortByDate}>Most Recent</button>
//             </div>
//             <Articles articles={sortedArticles} />
//         </div>
//     );
// }

// export default App;



// import React from 'react';

// function Articles({ articles }) {
//     return (
//         <div className="table-container">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Upvotes</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {articles.map((article, index) => (
//                         <tr key={index}>
//                             <td>{article.title}</td>
//                             <td>{article.upvotes}</td>
//                             <td>{article.date}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Articles;
