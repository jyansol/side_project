// import React, { Component } from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
// import './App.css';

// const Home = () => {
//   <div>
//     <h2>Home</h2>
//   </div>;
// };

// const Category = () => {
//   <div>
//     <h2>Category</h2>
//   </div>;
// };

// const Products = () => {
//   <div>
//     <h2>Products</h2>
//   </div>;
// };

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <nav>
//           <ul className="nav">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/category">Category</Link>
//             </li>
//             <li>
//               <Link to="/products">Products</Link>
//             </li>
//           </ul>
//         </nav>
//         <Route path="/" component={Home} />
//         <Route path="/category" />
//         <Route path="/products" />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

/* App component */
class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Homes</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
      </div>
    );
  }
}

//Route dom에 path가 들어오면 component를 반환
//Link는 표시줄을 바꿔주고, Route는 컴포넌트를 불러옴
//전체를 감싸는 BrowserRouter
//SPA!

// 검색페이지와 결과페이지

export default App;
