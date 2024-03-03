import "./single.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Chart from "../../component/chart/Chart";
import Tableau from '../../component/table/Table';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Armoire électrique</h1>
            <div className="item">
              {/* Nouvelle image pour l'armoire électrique */}
              <img
                src="https://images.pexels.com/photos/1840397/pexels-photo-1840397.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Armoire électrique</h1>
                <div className="detailItem">
                  <span className="itemKey">Puissance Nominale:</span>
                  <span className="itemValue">1000 W</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Protection:</span>
                  <span className="itemValue">Fusible</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Emplacement:</span>
                  <span className="itemValue">Salle des machines</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Update</h1>
          <Tableau />
        </div>
      </div>
    </div>
  );
};

export default Single;
