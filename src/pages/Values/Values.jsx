import ValuesCard from "./ValuesCard/ValuesCard";
import ValuesText from "./ValuesText/ValuesText";


export default function Values() {
  return (
    <div>
      <div className="flex flex-row my-30">
      
        <div className="basis-1/3">
          <ValuesText></ValuesText>
        </div>
        <div className="basis-2/3">
          <ValuesCard></ValuesCard>
        </div>
      </div>
    </div>
  )
}

