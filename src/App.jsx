import './App.css'
import SummaryItem from './components/SummaryItem'

function App() {

  return (
    <div className='app'>
      <article className='card'>
        <header className='card__header'>
          <h2 className='card__subtitle'>Your Result</h2>
          <h1 className='card__title'>
            <span className='card__score'>76</span>
            <span className='card__base'>of 100</span>
          </h1>
          <h2 className='card__great'>Great</h2>
          <p className='cadr__description'> 
            You scored higher than 65% of the people who have taken these  Tests.
          </p>
        </header>
        <section className='card_body'>
          <h2 className='card__summary'>Summary</h2>
          <div className='sumary__container'>
            <SummaryItem
              icon="/public/images/icon-reaction.svg "
              title='Reaction'
              score={80}
            />
            <SummaryItem
              icon="/public/images/icon-memory.svg "
              title='Memory'
              score={92}
            />
            <SummaryItem
              icon="/public/images/icon-verbal.svg "
              title='Verbal'
              score={80}
            />
            <SummaryItem
              icon="/public/images/icon-visual.svg "
              title='Visual'
              score={72}
            />
          </div>
       
        <footer className='card__footer'>
          <button className='card__btn'>Continue</button>
        </footer>
       
        </section>
      </article>
    </div>
  )
}

export default App
