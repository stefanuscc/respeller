import { useState } from "react";

import NumberInput from "./components/NumberInput";
import SpellContainer from "./components/SpellContainer";
import { numberSpeller } from "./utils/manipulator";

function App() {
  const [value, setValue] = useState('');
  const [lang, setLang] = useState('en');
  const [spelling, setSpelling] = useState('');
  
  const handleChange = (val) => {
    let and = (lang === 'en' ? 'and' : false)

    setValue(val)
    setSpelling(numberSpeller(val, and, lang))
  }

  const handleLangChange = (val) => {
    let and = (val === 'en' ? 'and' : false)
    
    setLang(val)
    setSpelling(numberSpeller(value, and, val))
  }

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-extrabold text-white">Re-speller</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <NumberInput label="Number" name="number" value={value} onChange={handleChange} onLangChange={handleLangChange}/>
              <SpellContainer label="Spelling" name="spelling" value={spelling}/>
            </form>
          </div>
        </div>
      </div>
  );
}

export default App;
