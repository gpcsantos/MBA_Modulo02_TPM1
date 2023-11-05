import Header from "../components/Header";
import Investiments from "../components/Investiments";
import Main from "../components/Main";
import Reports from "../components/Reports";
import { investmentsData } from "../data/investments";
import { currencyFormat, percentFormat } from "../services/numberFormats";
import { getNewId } from "../services/idService";

export default function ReactInvestimentsPage() {
  const listInvestments = investmentsData.investments;
  // console.log(listInvestments);

  return (
    <div>
      <Header size="large">React Investment</Header>

      <Main>
        {listInvestments.map((investiment) => {
          const filteredReports = investmentsData.reports.filter(
            (investimentReports) => {
              // console.log(investimentReports);
              return investimentReports.investmentId === investiment.id;
            }
          );
          filteredReports.sort(function (a, b) {
            return a.month < b.month ? -1 : 0;
          });
          const firstValue = filteredReports[0].value;
          const lastValue = filteredReports[filteredReports.length - 1].value;
          const yeld = lastValue - firstValue;
          let percent = 0;
          let textColor = "black";
          if (yeld >= 0) {
            textColor = `text-green-600`;
          } else {
            textColor = `text-red-600`;
          }
          percent = lastValue / firstValue - 1;

          return (
            <Investiments key={getNewId()}>
              <h2 className="text-center font-semibold text-2xl pt-4 pb-2">
                {investiment.description}
              </h2>
              <h3 className="text-center font-semibold text-xl">
                Rendimento total:{" "}
                <span className={textColor}>
                  {currencyFormat(yeld)} ({percentFormat(percent)})
                </span>
              </h3>
              <Reports key={getNewId()}>{filteredReports}</Reports>
            </Investiments>
          );
        })}
      </Main>
    </div>
  );
}
