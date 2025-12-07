import React from "react";

const DeliveryStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Thống kê tình hình giao hàng</h5>
          <iframe
            title="delivery-statitics"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-project-0-yoprkbn/embed/charts?id=c835e18d-0e29-434b-a72a-d4c61886c49d&maxDataAge=14400&theme=light&autoRefresh=true">
          </iframe>
        </article>
      </div>
    </div>
  );
};

export default DeliveryStatistics;
