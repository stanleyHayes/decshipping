import {Link} from "react-router-dom";
import {Button, Stack} from "@mui/material";
import {useDispatch} from "react-redux";
import {changePath, closeDrawer} from "../../redux/features/ui/ui-slice";
import {ChevronRight} from "@mui/icons-material";

const SidebarLink = ({path, label, active, icon}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changePath(path));
        dispatch(closeDrawer());
    }

    return (
        <Link to={path} onClick={handleClick} style={{textDecoration: 'none'}}>
            <Stack
                sx={{
                    justifyContent: 'flex-start',
                    borderLeftWidth: active ? 3 : 0,
                    borderLeftStyle: active ? 'solid' : false,
                    borderLeftColor: active ? 'primary.main' : false,
                    backgroundColor: active ? 'light.primary' : false,
                    px: 2
                }}
                direction="row" justifyContent="space-between" alignItems="center">
                <Button
                    fullWidth={true}
                    startIcon={icon}
                    size="large"
                    variant="text"
                    sx={{
                        borderRadius: 0,
                        justifyContent: 'flex-start',
                        color: active ? 'text.primary' : 'text.secondary',
                        textTransform: 'capitalize',
                    }}>
                    {label}
                </Button>
                <ChevronRight
                    sx={{
                        cursor: 'pointer',
                        color: active ? 'primary.main': 'text.primary',
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 8,
                        borderBottomLeftRadius: 8,
                        borderTopLeftRadius: 4,
                        padding: 1,
                        fontSize: 32,
                    }}/>
            </Stack>
        </Link>
    )
}

export default SidebarLink;
