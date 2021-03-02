import { useState, useEffect } from "react";
import axios from "axios";
import { getTopUsersReviews } from "./reviewers-statistics.constants";
import UserStatistics from "./UserStatistics";
import Spinner from "../Common/Spinner/Spinner";
import "./reviewers-statistics.scss";

const ReviewersStatistics = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsersStatistics = async () => {
      setLoading(true);
      try {
        const res = await axios.get(getTopUsersReviews());
        setUsers(res?.data?.users);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };
    getUsersStatistics();
  }, []);

  return (
    <div className="reviewers-statistics-wrapper">
      <div className="title">TOP 10 Reviewers</div>
      {loading && <Spinner />}
      {!loading && users && (
        <>
          <div className="list-wrap">
            <div className="user-data">User Id</div>
            <div className="user-data">Number of reviews</div>
          </div>
          {users.map((user) => (
            <UserStatistics key={user.userId} user={user} />
          ))}
        </>
      )}
    </div>
  );
};


export default ReviewersStatistics;
