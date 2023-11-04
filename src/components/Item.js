import { dateFormat } from "../services/dateFormat";
import { currencyFormat, percentFormat } from "../services/numberFormats";

export default function Item({ children: data = [], prevValue = 0 }) {
  const { month, value, year } = data;
  let textColor = "black";
  let percent = 0;
  if (value >= prevValue) {
    textColor = `text-green-600`;
  } else {
    textColor = `text-red-600`;
  }
  if (prevValue !== 0) {
    percent = value / prevValue - 1;
  }

  return (
    <>
      <div className="flex justify-between p-2">
        <div className="flex flex-1">
          <div className="flex-1">{dateFormat(month, year)}</div>
          <div className={`flex-1 ${textColor}`}>{currencyFormat(value)}</div>
        </div>
        <div className={`flex-1 text-right ${textColor}`}>
          {percentFormat(percent)}
        </div>
      </div>
    </>
  );
}
