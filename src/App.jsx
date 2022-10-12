import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import data from "./data";

function App() {

  const cards = data.map(item => {
    return(
    <Card 
        img={item.img}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        />
    )  
  })

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      
    </div>
  )
}

export default App;
