import { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

const UserContainer = ({ fetchUsers, userData }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      {userData &&
        userData.users &&
        userData.users.map((user) => <div>{user.name}</div>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
