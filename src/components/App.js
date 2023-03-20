import Heading from './Headings';
import Image from './Image'

const App = () => {
  const Header = () => (
    <Heading query='h1' className='primary title uppercase' content='we´re launching soon' />
  );

  const Timer = ({ deadline = new Date('2023-04-01') }) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const [time, setTime] = React.useState(deadline - Date.now());

    React.useEffect(() => {
      const interval = setInterval(() => setTime(deadline - Date.now()), 1000);
      return () => clearInterval(interval);
    }, [deadline]);

    return (
      <div className='timer flex-row'>
        {Object.entries({
            Days: time / day,
            Hours: (time / hour) % 24,
            Minutes: (time / minute) % 60,
            Seconds: (time / second) % 60,
        }).map(([key, value]) => (
          <div key={key} className='rel'>
            <div className='card abs'>
              <p className='card-top'>{`${Math.floor(value)}`.padStart(2, '0')}</p>
              <p className='card-bottom'>{`${Math.floor(value)}`.padStart(2, '0')}</p>
            </div>
            <div className='flip-card'>
              <p className='flip-top'>{`${Math.floor(value)}`.padStart(2, '0')}</p>
              <p className='flip-bottom'>{`${Math.floor(value)}`.padStart(2, '0')}</p>
            </div>
            <p className='key uppercase center'>{key}</p>
          </div>
        ))}
      </div>
    );
  };

  const Footer = () => (
    <span className='social flex-row'>
      <Image className='icon selectable' src='./src/images/icon-facebook.svg' alt='facebook icon' />
      <Image className='icon selectable' src='./src/images/icon-pinterest.svg' alt='pinterest icon' />
      <Image className='icon selectable' src='./src/images/icon-instagram.svg' alt='instagram icon' />
    </span>
  );


  return (
    <main className='main flex-col center'>
      <Header />
      <Timer />
      <Footer />
    </main>
  )
};

export default App;