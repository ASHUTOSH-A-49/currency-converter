import React,{useId} from 'react'

function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyoptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {
    const id = useId();
  return (  
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2'>

            <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
            <input id={id} type="number"  className='outline-none w-full bg-transparent py-1.5'
            placeholder='0' 
            disabled = {amountDisabled}
            value = {amount}
            onChange = {(e) => onAmountChange(Number(e.target.value))}
            />

        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        currency Type: 
        <select 
        name="" 
        id=""
        className='outline-none cursor-pointer bg-gray-100 px-1 py-1.5 rounded-md ml-2'
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}
        >
            {currencyoptions.map((option) => (
                <option 
                key={option} 
                value={option} 
                disabled={currencyDisabled && option === selectedCurrency}
                selected={selectedCurrency === option}>
                    {option.toUpperCase()}
                </option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default Inputbox
