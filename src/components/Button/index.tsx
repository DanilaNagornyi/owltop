import s from './Button.module.scss';
import {ButtonPropsTypes} from "./types";
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import {motion} from 'framer-motion';

const Button = ({
                  appearance = 'primary',
                  arrow = 'none',
                  children,
                  className,
                  ...restProps
                }: ButtonPropsTypes): JSX.Element => {

  return (
    <motion.button
      whileHover={{scale: 1.05}}
      className={cn(s.button, className, {
        [s.primary]: appearance === 'primary',
        [s.ghost]: appearance === 'ghost',
      })}
      {...restProps}
    >
      {children}
      {arrow !== 'none' && <span className={cn(s.arrow, {
        [s.down]: arrow === 'down',
      })}> <ArrowIcon/> </span>}
    </motion.button>
  );

};

export default Button;
