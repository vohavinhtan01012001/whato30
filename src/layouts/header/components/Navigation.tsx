import { motion } from "framer-motion";
import { ListMenusMobile, MenuItem as MenuItemType } from "./menu";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    display: "block",
    zIndex: 2, // Target position for the `open` state
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      duration: 0.5 // Adjust the duration to fit your needs
    }
  },
  closed: {
    display: "none",
    zIndex: 0, // Target position for the `closed` state
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5 // Adjust the duration to fit your needs
    }
  }
};



export const Navigation = ({ toggle }: { toggle: any }) => {
  const navigate = useNavigate()
  const handleClick = (item: MenuItemType) => {
    toggle();
    navigate(item.link);
  }
  return <>
    <motion.ul variants={variants} className=" absolute top-[200px] left-[30px] w-full p-[50px] pt-0 hidden">
      {ListMenusMobile.map((item, index) => (
        <MenuItem item={item} key={index} onClick={handleClick} />
      ))}

    </motion.ul>

  </>
};

