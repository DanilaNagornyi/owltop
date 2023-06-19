import React, {useEffect, useState} from "react";
import {HeaderPropsTypes} from "./types";
import s from './Header.module.scss';
import cn from "classnames";
import LogoOwl from "../logoOwl.svg";
import ButtonIcon from "../../components/ButtonIcon";
import {motion} from "framer-motion";
import SideBar from "../SideBar";
import {useRouter} from "next/router";

export default function Header({className, ...restProps}: HeaderPropsTypes): JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variantsAnimation = {
    opened: {
      opacity: 1,
      x: 0,
      transaction: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    }
  };
  const handleOpenMenu = () => {
    setIsOpened(true);
  };
  const handleCloseMenu = () => {
    setIsOpened(false);
  };

  return (
    <header className={cn(s.header, className)} {...restProps}>
      <LogoOwl className={s.logo}/>
      <ButtonIcon icon="burger" appearance="white" onClick={handleOpenMenu}/>
      <motion.div
        variants={variantsAnimation}
        initial="closed"
        animate={isOpened ? 'opened' : 'closed'}
        className={s.mobileMenu}
      >
        <SideBar/>
        <ButtonIcon className={s.closeButton} icon="close" appearance="white" onClick={handleCloseMenu}/>
      </motion.div>
    </header>
  );
}
