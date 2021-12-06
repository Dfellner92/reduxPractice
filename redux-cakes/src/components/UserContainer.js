import { useEffect } from "react";
import { fetchUsers } from "../redux";
import { useDispatch, useSelector } from "react-redux";


const UserContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const usersData = useSelector(state => state.users);
  console.log(usersData); 

  return usersData.loading ? (
    <h2>Loading</h2>
  ) : usersData.error ? (
    <h2>{usersData.error}</h2>
  ) : (
    <div>
      {usersData &&
        usersData.users &&
        usersData.users.map((user) => <div>{user.name}</div>)}
    </div>
  );
};



export default UserContainer;
