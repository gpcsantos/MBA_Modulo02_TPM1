import Item from "./Item";
import { getNewId } from "../services/idService";
export default function Reports({ children: reports = null }) {
  // console.log(reports);

  return reports.map((report) => {
    const index = reports.indexOf(report);
    let prevValue = 0;
    if (index >= 1) {
      prevValue = reports[index - 1].value;
    }
    return (
      <div className="border-b">
        <Item key={getNewId()} prevValue={prevValue}>
          {report}
        </Item>
      </div>
    );
  });
}
