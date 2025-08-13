import AskCard from "./CardAskDoctors/AskCard";
import List from "./List/List";

export default function AskDoctors() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-1/3">
          <List></List>
        </div>
        <div className="basis-2/3">
          <AskCard></AskCard>
        </div>
      </div>
    </div>
  )
}

