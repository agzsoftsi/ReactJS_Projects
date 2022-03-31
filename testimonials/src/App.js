import Testimonial from './components/Testimonial';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Here is what our alumini say about SchoolJS </h1>
      <Testimonial 
        id="emma"
        name="Emma Bostian" 
        city="Sweden" 
        role="Software Engineer" 
        company="Spotify" 
        testimonial="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
      />

      <Testimonial 
        id="sarah"
        name="Sarah Chima" 
        city="Nigeria" 
        role="Software Engineer" 
        company="ChatDesk" 
        testimonial="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
      />

      <Testimonial 
        id="shawn"
        name="Shawn Wang" 
        city="Singapore" 
        role="Software Engineer" 
        company="Amazon" 
        testimonial="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      />
    </div>
  );
}

export default App;
