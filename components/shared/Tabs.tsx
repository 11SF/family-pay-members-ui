import { tabsContent } from "@/models/components/shared/tabs";
import { Kanit } from "next/font/google";
const kanit = Kanit({ subsets: ["thai"], weight: ["200"] });
const kanitBold = Kanit({ subsets: ["thai"], weight: ["500"] });

interface propsType {
  tabs: tabsContent[];
  currentTabs: tabsContent;
  setterFunc: Function;
  width?: string;
}

export default function Tabs({
  tabs,
  setterFunc,
  currentTabs,
  width,
}: propsType) {
  //   const [currentTab, setCurrentTab] = useState(currentTabs);

  //   useEffect(() => {
  //     setCurrentTab(currentTabs);
  //   }, [currentTabs]);
  return (
    <div
      className={`${() =>
        width !== undefined
          ? width
          : "w-full"} bg-[#ffffff60] rounded-2xl flex justify-around overflow-hidden`}
    >
      {/* {currentTabs} */}
      {tabs.map(
        (e) =>
          e.id === currentTabs.id ? (
            <div
              className={`w-full px-4 py-2 text-center cursor-default bg-[#fff] rounded-2xl ${kanitBold.className}`}
            >
              {e.name}
            </div>
          ) : (
            <div
              className={`w-full px-4 py-2 text-center cursor-pointer  ${kanit.className}`}
              onClick={() => {
                setterFunc(e);
              }}
            >
              {e.name}
            </div>
          )

        // <div
        //   className={`w-full px-4 py-1 text-center ${() =>
        //     e.id === currentTab.id ? "bg-[#fff]" : ""}`}
        //   key={e.id}
        //   onClick={() => {
        //     setterFunc(e);
        //     // console.log(currentTabs);
        //   }}
        // >
        //   <p>{e.name}</p>
        // </div>
      )}
    </div>
  );
}
