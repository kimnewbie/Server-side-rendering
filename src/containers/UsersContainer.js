import { useEffect } from "react";
import { connect } from "../../node_modules/react-redux/es/exports";
import Users from "../components/Users";

const UsersContainer = ({ users, getUsers }) => {
    // 컴포넌트가 마운트되고 나서 호출
    useEffect(() => {
        if (users) return; // users가 이미 유효하다면 요청하지 않음
        getUsers();
    }, [getUsers, users]);
    return <Users users={users} />
};

export default connect(
    state => ({
        users: state.users.users
    }),
    {
        getUsers
    }
)(UsersContainer);