import { listData } from '../../../utilities/faker';
import { GoBackButton } from '../../go_back_button/go_back_button.jsx';
import styles from './_tabs_list.module.scss';

export default function DummyList() {
  return (
    <>
      <GoBackButton />
      <ul className={styles.list}>
        {listData ? (
          listData.map((data) => {
            return (
              <li className={styles.item} key={data.id}>
                <img src={data.avatar} alt={data.name} className={styles.img} />
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
