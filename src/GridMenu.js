import React from "react";

function GridMenu() {
  // Sample data for the grid
  const gridData = [
    { id: 1, imgUrl: "https://via.placeholder.com/150" },
    { id: 2, imgUrl: "https://via.placeholder.com/150" },
    { id: 3, imgUrl: "https://via.placeholder.com/150" },
    { id: 4, imgUrl: "https://via.placeholder.com/150" },
    { id: 5, imgUrl: "https://via.placeholder.com/150" },
    { id: 6, imgUrl: "https://via.placeholder.com/150" },
    // Add more items as needed
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Featured Listings</h2>
      <div className="row">
        {gridData.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={item.imgUrl}
                className="card-img-top"
                alt={`Item ${item.id}`}
              />
              <div className="card-body">
                <h5 className="card-title">Listing {item.id}</h5>
                <p className="card-text">Description of the listing.</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridMenu;
