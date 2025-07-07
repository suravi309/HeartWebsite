import AskCard from "./CardAskDoctors/AskCard";
import CardAskDoctors from "./CardAskDoctors/CardAskDoctors";
import List from "./List/List";


export default function AskDoctors() {
  return (
    <div>
      <div class="flex flex-row">
        <div class="basis-1/3">
          <List></List>
        </div>
        <div class="basis-2/3">
          {/* <CardAskDoctors></CardAskDoctors> */}
          <AskCard></AskCard>
        </div>
      </div>
    </div>
  )
}
