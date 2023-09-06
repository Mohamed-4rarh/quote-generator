import './App.css';
import React, {useState} from 'react';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, FacebookIcon, WhatsappIcon, TwitterIcon } from 'react-share';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className='share__btns' style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'minmax(60px, auto)'}}>
          <WhatsappShareButton
            title={`${quote.content} ${' \n'} author: ${quote.author} ${' \n'} ${' \n'}`} url={`shared from: ${window.location.href}`}
            style={{padding: '8px', margin: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#25d366'}}>
            <WhatsappIcon style={{width: '35px', height: '35px'}} />
         </WhatsappShareButton>         
         <FacebookShareButton
          title={`${quote.content} ${' \n'} author: ${quote.author} ${' \n'} ${' \n'}`} url={`shared from: ${window.location.href}`} 
          style={{padding: '8px', margin: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#3b5998'}}>
          <FacebookIcon  style={{width: '35px', height: '35px'}} />
         </FacebookShareButton>
         <TwitterShareButton
          title={`${quote.content} ${' \n'} author: ${quote.author} ${' \n'} ${' \n'}`} url={`shared from: ${window.location.href}`} 
          style={{padding: '8px', margin: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#00aced'}}>
          <TwitterIcon  style={{width: '35px', height: '35px'}} />
         </TwitterShareButton>
        </div>
      </div>
    </>
  )
}


export default App;
