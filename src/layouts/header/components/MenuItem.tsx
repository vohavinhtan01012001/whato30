import { motion } from "framer-motion";
import { MenuItem as MenuItemType } from "./menu";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = ({ item, key, onClick }: {
  item: MenuItemType, key: number,
  onClick: (item: MenuItemType) => void
}) => {

  return (
    <motion.li
      className="list-none mb-[20px] flex items-center cursor-pointer text-white font-semibold"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      key={key}
      onClick={() => onClick(item)}
    >
      <div className={`text-lg`}>{item.name}</div>
    </motion.li>
  );
};
