import { InputBox } from "./components"
import useCurrecyInfo from "./hooks/useCurrencyInfo"
import { useState } from "react"
function App() {
  const [amount, setamount] = useState(0)
  const [From, setFrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(0)
  const CurrencyInfo = useCurrecyInfo(From)
  const options = Object.keys(CurrencyInfo)
  const swap = ()=>{
    setFrom(To)
    setTo(From)
  } 

  const convert = ()=>{
    setconvertedAmount(amount*CurrencyInfo[To])
  }

  const BackgroundImage = "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600"
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={(amount)=>setamount(amount)}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            selectedCurrency={From}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectedCurrency={To}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {From.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
