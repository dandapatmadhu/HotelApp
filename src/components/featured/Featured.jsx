import "./featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRoTHQIepPTGcipve-IrjyraUMU86R8RNAUZHa91YC75FR7EM07DrMsC2HOE_T2LjnrBa0ejB6C7dDaFJg0LgX7tkEX_Q"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipMlrlAEVyQQx5TwJtbeom_4HsPYzonqgKrRfF0s=w548-h318-n-k-no"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Downtown_Austin_from_Pfluger_Pedestrian_Bridge%2C_October_2022.jpg/402px-Downtown_Austin_from_Pfluger_Pedestrian_Bridge%2C_October_2022.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};
