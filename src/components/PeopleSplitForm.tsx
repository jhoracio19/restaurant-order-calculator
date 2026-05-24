import type { Dispatch, SetStateAction } from "react"

type PeopleSplitFormProps = {
    people: number,
    setPeople: Dispatch<SetStateAction<number>>
}

export default function PeopleSplitForm({people, setPeople } : PeopleSplitFormProps) {
  return (
    <div>
      <label htmlFor="">Ingresa la cantidad de personas a dividir la cuenta: </label>
      <input 
      className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
      type="number" 
      value={people}
      onChange={ e => {
        const val = +e.target.value;

        if (val >= 1){
            setPeople(val)
        } else {
            setPeople(1)
        }
      }
    }
      />
    </div>
  )
}
