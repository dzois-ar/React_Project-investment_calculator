import { calculateInvestmentResults, formatter } from "../util/investment"
export default function Results({input}) {
    const resulData = calculateInvestmentResults(input);
    const initialInvestment = resulData[0].valueEndOfYear - resulData[0].interest - resulData[0].annualInvestment;
    console.log(resulData);
    return <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Investment (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resulData.map(yearData => {
                const totalIntererest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalIntererest;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalIntererest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            } )}
        </tbody>

    </table>;
}