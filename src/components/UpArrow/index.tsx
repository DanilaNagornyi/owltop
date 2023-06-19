import s from './UpArrow.module.scss';
import {motion, useAnimation} from "framer-motion";
import useScrollY from "../../hooks/useScrollY";
import {useEffect} from "react";
import ButtonIcon from "../ButtonIcon";

export const UpArrow = (...restProps): JSX.Element => {
  const controls = useAnimation();
  const userScroll = useScrollY();

  useEffect(() => {
    controls.start({opacity: userScroll / document.body.scrollHeight});
  }, [userScroll, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      className={s.arrow}
      animate={controls}
      initial={{opacity: 0}}
      {...restProps}
    >
      <ButtonIcon icon="up" onClick={scrollToTop}/>
    </motion.div>
  );
};
