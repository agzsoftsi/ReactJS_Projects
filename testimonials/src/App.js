import Testimonial from './components/Testimonial';
import users from './configUsers';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Here is what our alumini say about SchoolJS </h1>
      {
        users.map((user, key) => 
          <Testimonial 
            key={key}
            id= {user.id}
            name={user.name}
            city={user.city}
            role={user.role}
            company={user.company}
            testimonial={user.testimonial}
          />
        )
      }
    </div>
  );
}

export default App;
