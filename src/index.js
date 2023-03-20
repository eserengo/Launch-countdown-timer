import DisplayOnResize from "./components/Display.js";
import Attribution from "./components/Attribution.js";
import App from "./components/App.js"

(function () {

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(DisplayOnResize(), 500);
  });

  const Page = () => {
    React.useEffect(() => {
      DisplayOnResize()
    }, []);

    return (
      <>
        <App />
        <Attribution />
      </>
    )
  }

  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='root' />`);
  ReactDOM.createRoot(document.getElementById('root')).render(<Page tab='home' />);
})();