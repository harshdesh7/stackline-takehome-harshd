import { Sales } from "../types/Item";

interface Props {
  sales: Sales[];
}

const SalesTable = ({ sales }: Props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Item Table</h3>
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Week Ending</th>
                <th scope="col">Retail Sales</th>
                <th scope="col">Wholesale Sales</th>
                <th scope="col">Units Sold</th>
                <th scope="col">Retailer Margin</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale, index) => (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{sale.weekEnding}</td>
                  <td>{sale.retailSales}</td>
                  <td>{sale.wholesaleSales}</td>
                  <td>{sale.unitsSold}</td>
                  <td>{sale.retailerMargin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SalesTable;
