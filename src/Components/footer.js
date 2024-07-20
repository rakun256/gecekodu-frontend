import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Skylab from "../Images/skylab-uzun-logo.png";
import Ytu from "../Images/yildiz-logo.png";
import Locations from "../Services/locationService"; 

const Footer = () => {
  const location = Locations[0]; 

  return (
    <footer className="bottom-0 bg-[#00000080] text-white px-16 py-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-8">
          <div className="flex flex-col justify-between space-y-3 text-2xl">
            <p>• Lorem ipsum</p>
            <p>• Lorem ipsum</p>
            <p>• Lorem ipsum</p>
          </div>
        </div>
        <div className="w-1/4">
          <div className="rounded-lg">
            <div className="h-40 w-full">
              <MapContainer
                center={[location.coordinates.lat, location.coordinates.lng]}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[location.coordinates.lat, location.coordinates.lng]}>
                  <Popup>{location.name}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 flex gap-2 justify-center items-center">
        <img src={Skylab} alt="SKY LAB Logo" className="h-[3rem]" />
        <img src={Ytu} alt="YTU Logo" className="h-[3rem]" />
      </div>
    </footer>
  );
};

export default Footer;
