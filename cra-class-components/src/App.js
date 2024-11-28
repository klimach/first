import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Моє хобі</h1>
        </header>
        <main>
          <Hobby />
        </main>
      </div>
    );
  }
}

class Hobby extends Component {
  render() {
    return (
      <div>
        <p>
        Моє хобі — ходити Карпатами. Для мене це не просто мандри, а можливість відчути справжній зв'язок з природою. Я обожнюю ранковий туман, що повільно піднімається над горами, запах хвойних лісів і неймовірні краєвиди, які розкриваються після кожного підйому. Під час походів я відчуваю спокій, свободу і внутрішню гармонію. Кожна подорож — це новий досвід, виклик та маленька перемога над собою, яка наповнює енергією і натхненням.
        </p>
      </div>
    );
  }
}

export default App;