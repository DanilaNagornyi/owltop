import s from './UpArrow.module.scss';
import ArrowIcon from './img/arrowUp.svg';
import {motion, useAnimation} from "framer-motion";
import useScrollY from "../../hooks/useScrollY";
import {useEffect} from "react";

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
    <motion.button
      onClick={scrollToTop}
      className={s.arrow}
      animate={controls}
      initial={{opacity: 0}}
      {...restProps}
    >
      <ArrowIcon/>
    </motion.button>
  );
};
