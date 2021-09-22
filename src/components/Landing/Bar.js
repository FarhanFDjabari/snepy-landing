import "./Bar.scss";
import { useState, useEffect } from "react";

function Bar() {
  const [countPeople, setCountPeople] = useState(0);
  const [maxPeople, setMaxPeople] = useState(0);

  useEffect(() => {
    setCountPeople(20);
    setMaxPeople(50);
  }, []);

  return (
    <>
      <div className="container d-flex flex-column bar-container">
        {/* Flex item 1 */}
        <div className="flex-item mt-1 mb-4">
          <h1 className="heading-1">Pesan segera jumlah pemesanan terbatas!</h1>
        </div>
        {/* Flex item 2 */}
        <div className="flex-item mb-4">
          <div className="progress bar-container__bar">
            <div
              className="progress-bar progress-bar-text color-blue"
              style={{ width: `${(countPeople / maxPeople) * 100}%` }}
            >
              {countPeople} Orang
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bar;
