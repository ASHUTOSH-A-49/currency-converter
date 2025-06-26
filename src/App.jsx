import { useState ,useEffect} from 'react'

import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { Inputbox } from './components/index.js';

function App() {
  const [amount, setAmount] = useState(0);
  const [from,setfrom] = useState("eur");
  const [to,setTo] = useState("inr");
  const[convertedAmount, setConvertedAmount] = useState(0);

 const currencyInfo = useCurrencyInfo(from);
 const options = Object.keys(currencyInfo)

useEffect(() => {
  if (currencyInfo && currencyInfo[to]) {
    setConvertedAmount(amount * currencyInfo[to]);
  }
}, [amount, from, to, currencyInfo]);

const swap = () => {
  const oldFrom = from;
  const oldTo = to;
  const oldAmount = amount;
  const oldConvertedAmount = convertedAmount;

  setfrom(oldTo);
  setTo(oldFrom);
  setAmount(oldConvertedAmount);
  setConvertedAmount(oldAmount);

  // Optional: Delay a little to let states update
  
};

  return (
    <div className='w-full h-screen flex flex-wrap items-center justify-center bg-cover  bg-no-repeat bg-center bg-fixed bg-[url("https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg")]'>
      
      
      <div className='w-full mb-1 '>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 z-0'>
        <form onSubmit={(e)=>{
          e.preventDefault()
          ;
        }}>
          <div className='w-full mb-1'> 
            
            <Inputbox
            label={from}
            amount={amount}
            onAmountChange={(amount)=>setAmount(amount)}
            onCurrencyChange={(currency)=>setfrom(currency)}
            currencyoptions={options}
            selectedCurrency={from}
            />
          </div>


          <div className='relative w-full h-0.5 z-2 my-4'>
        <button onClick={swap}  className='absolute left-1/2  -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 px-2 py-0.5'>Swap</button>
      </div>


      <div className='w-full mb-1'> 
            
            <Inputbox
            label={to}
            amount={convertedAmount}
            onAmountChange={(amount)=>setConvertedAmount(amount)}
            onCurrencyChange={(currency)=>setTo(currency)}
            currencyoptions={options}
            selectedCurrency={to}
            />
          </div>

        



          
        </form>


        
      </div>

      

      



        </div>
      </div>


      


      
    
    
  )
}

export default App
