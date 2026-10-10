import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addconnection } from "../utils/connectionSlice";

const Connection = () => {
  const dispatch = useDispatch();
  const handleConnection = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });
    dispatch(addconnection(res.data.data));
  };
  const connections = useSelector((store) => store.connection);

  useEffect(() => {
    handleConnection();
  }, []);
  if (!connections) return;
  if (connections.length === 0) {
    return <div> No connection found !</div>;
  }
  return (
    <div>
      <h1 className="font-semibold my-3 justify-self-center">Connections</h1>
      {connections.map((connec) => {
        return (
          <div key={connec._id}>
            {
              <div className="flex-col justify-center m-auto">
                <h1 className="textarea" placeholder="Bio">
                  {connec.firstname}
                </h1>
              </div>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Connection;
