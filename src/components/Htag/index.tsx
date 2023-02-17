import {HtagPropsTypes} from "./Htag.types";
import s from './Htag.module.scss';

const Htag = ({ tag, children }: HtagPropsTypes): JSX.Element => {

    switch (tag) {
        case 'h1':
            return <h1 className={s.h1}>{children}</h1>;
        case 'h2':
            return <h2 className={s.h2}>{children}</h2>;
        case 'h3':
            return <h3 className={s.h3}>{children}</h3>;
        default:
            return <></>;
    }

};
export default Htag;
