import type { Dispatch, SetStateAction } from "react"


const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm( { setTip, tip } : TipPercentageFormProps ) {

  

  return (
    <>
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>

        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={ e => setTip(+e.target.value) }
                        checked={tipOption.value === tip}
                    />
                </div>
            ))}

            <div className="flex flex-col gap-2">
              <label htmlFor="">Otra cantidad:</label>
              <input
                className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                type="text"
                value={tipOptions.some(opt => opt.value === tip) ? '' : tip * 100}
                onChange={ e => {
                  const value = e.target.value;

                  // Si esta vacio, resetea la propina a 0
                  if(value === ''){
                    setTip(0)
                    return;
                  }
                  //  Solo convertimo a número si es número válido
                  const numericValue = Number(value)
                  // Se valida que sea un número y que este dentro del rango
                  if(!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100){
                    setTip(numericValue / 100)
                  }
                }}
              />
            </div>
        </form>
    </div>
    </>
  )
}
