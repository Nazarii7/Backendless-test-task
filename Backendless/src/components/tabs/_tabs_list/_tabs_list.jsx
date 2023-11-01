import { listData } from '../../../utilities/faker';
import { GoBackButton } from '../../go_back_button/go_back_button.jsx';

export default function DummyList() {
  return (
    <>
      <GoBackButton />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {listData ? (
          listData.map((data) => {
            return (
              <li
                className=" bg-blue-900 p-4 shadow-md hover:shadow-lg flex items-center space-x-4 rounded-md"
                key={data.id}
              >
                <img src={data.avatar} alt={data.name} className="w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{data.name}</span>
                  <span className="text-md">{data.email}</span>
                </div>
              </li>
            );
          })
        ) : (
          <p className="text-center text-xl">Loading ...</p>
        )}
      </ul>
    </>
  );
}
