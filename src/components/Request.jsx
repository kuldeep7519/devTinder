import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addrequest } from "../utils/Requestslice";

const Request = () => {
  const dispatch = useDispatch();

  // Get requests from Redux store
  const requests = useSelector((store) => store.request);

  const requesthandler = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/user/request",
        { withCredentials: true }
      );

      dispatch(Addrequest(res.data.data));
      console.log(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    requesthandler();
  }, []);

  if (requests === null) {
    return <div>Loading requests...</div>;
  }

  if (requests.length === 0) {
    return <div>No requests found!</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Connection Requests
      </h1>

      {requests.map((request) => (
        <div
          key={request._id}
          className="flex items-center gap-4 p-4 mb-3 bg-base-200 rounded-lg"
        >
          <div>
            <p className="font-bold">
              {request.fromUserId.firstname}{" "}
              {request.fromUserId.lastname}
            </p>

            <p>{request.fromUserId.about}</p>
          </div>

          <button className="btn btn-success">
            Accept
          </button>
          
           

          <button className="btn btn-error">
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default Request;