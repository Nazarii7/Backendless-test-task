import { GoBackButton } from '../../go_back_button/go_back_button.jsx';

import { tableData } from '../../../utilities/faker.js';

function DummyTable() {
  return (
    <>
      <GoBackButton />
      {tableData ? (
        <div className="relative mt-7 overflow-x-auto shadow-md rounded-md">
          <table className="w-full text-sm text-left text-white ">
            <thead className="text-xs text-black uppercase bg-blue-900 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id} className="bg-blue-900 border-b last:border-b-0">
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{data.email}</td>
                  <td className="px-6 py-4">{data.phone_number}</td>
                  <td className="px-6 py-4">{data.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
}

export default DummyTable;
