import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const todoItems = [
  {
    id: 1,
    title: "Nature walk in the park",
    description: "Visit the park with my friends",
    completed: true
  },

  {
    id: 2,
    title: "Visit",
    description: "Got to my aunt's place",
    completed: true
  },

  {
    id: 3,
    title: "Write",
    description: "Do an article about anthropology",
    completed: true
  },
];


// function App() {
//   return (
//     <div className="App">
//       <ul>
//         {this.state.todoItems.map(item => (
//           <div>
//             <h1>{item.title}</h1>
//             <span>{item.description}</span>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {todoItems};
  };
  
  render() {
  return (
    <div className="App">
      <ul>
        {this.state.todoItems.map(item => (
          <div>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </ul>
    </div>
  );
  }
}

export default App;
