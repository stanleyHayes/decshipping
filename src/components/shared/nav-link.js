import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {changePath} from "../../redux/features/ui/ui-slice";

const NavLink = ({path, label, active}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changePath(path));
    }
    return (
        <Link to={path} onClick={handleClick} style={{textDecoration: 'none'}}>
            <Button
                size="large"
                variant="text"
                sx={{
                    color: active ? 'primary.main' : 'text.primary',
                    borderBottomWidth: active ? 5 : 0,
                    borderBottomColor: active ? 'primary.main' : false,
                    borderBottomStyle: 'solid',
                    textTransform: 'capitalize',
                }}>
                {label}
            </Button>
        </Link>
    )
}

export default NavLink;
