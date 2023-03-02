import { Fragment, useState } from "react";
import MuiMenu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Colors } from '../../../mui/theme';
import { hasChildren } from "../../../ultis/hasChildren";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component  item={item} />;
};

const SingleLevel = ({ item }) => {
  return (
    <Link href={`${item.url}`}  underline="hover" passhref="true">
      <ListItem>
        {
          item.icon != undefined &&
          <ListItemIcon >{item.icon}</ListItemIcon>
        }
        <ListItemText primary={item.title} />
      </ListItem>
    </Link>
  );
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box >
      <ListItem  component="a" onClick={handleClick}>
        {
          item.icon != undefined &&
          <ListItemIcon >{item.icon}</ListItemIcon>
        }
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit
       >
        <List component="div" disablePadding sx={{ pl: 4 }}>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </Box>
  );
};



export default MenuItem