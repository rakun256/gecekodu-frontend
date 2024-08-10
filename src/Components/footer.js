import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Skylab from "../Images/skylab-uzun-logo.png";
import SkylabSM from "../Images/skylab-uzun-logo-sm.png";
import Ytu from "../Images/yildiz-logo.png";
import YtuSM from "../Images/yildiz-logo-sm.png";
import Locations from "../Services/locationService";

const Footer = () => {
  const location = Locations[0];

  return (
    <footer className="bottom-0 bg-[#00000080] text-white px-8 max-sm:px-4 g:py-7 md:py-5 sm:py-3 max-sm:py-3 w-full h-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <div className="flex flex-col justify-between space-y-3 lg:text-xl md:text max-sm:text">
            <p>• Lorem ipsum</p>
            <p>• Lorem ipsum</p>
            <p>• Lorem ipsum</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 max-sm:w-1/2">
          <div className="rounded-lg">
            <div className="lg:h-36 md:h-32 h-28 w-full">
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
                <Marker
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 max-sm:mt-5 flex gap-2 justify-center max-sm:justify-around items-center">
        <img
          src={Skylab}
          alt="SKY LAB Logo"
          className="h-auto lg:w-[17rem] w-52 max-sm:hidden"
        />
        <img
          src={SkylabSM}
          alt="SKY LAB Logo"
          className="h-auto sm:hidden max-sm:w-10"
        />
        <img
          src={Ytu}
          alt="YTU Logo"
          className="h-auto lg:w-64 w-44 max-sm:hidden"
        />
        <img
          src={YtuSM}
          alt="YTU Logo"
          className="h-auto sm:hidden max-sm:w-24"
        />
      </div>
    </footer>
  );
};

export default Footer;
