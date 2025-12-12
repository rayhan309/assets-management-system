import { Navigate } from "react-router";
import useUserRole from "../Hooks/useUserRole";

const HRPage = ({chidren}) => {

    const {hrInfo} = useUserRole();

    if(hrInfo.role === 'hr') {
        return chidren
    }

    return <Navigate to={'/'} ></Navigate>;
};

export default HRPage;