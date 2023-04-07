import Htag from "../components/Htag";
import Tag from "../components/Tag";
import PTag from "../components/PTag";
import Button from "../components/Button";
import {useEffect, useState} from "react";
import Rating from "../components/Rating";
import {withLayout} from "../layout";
import axios from "axios";
import {GetStaticProps} from "next";
import {MenuItemTypes} from "../interfaces/menu.interface";
import {useAppDispatch} from "../redux";
import findMenuFirstThunk from "../redux/thunks/menuThunks/findMenuFirstThunk";

interface HomePropsTypes extends Record<string, unknown>{
    menu: MenuItemTypes[],
    firstCategory: number;
}
function Home({ menu, firstCategory }: HomePropsTypes) {
    const [rating, setRating] = useState<number>(3);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(findMenuFirstThunk());
    }, []);

  return (
      <>
          <Htag tag="h1">Text</Htag>
          <Button appearance='primary' arrow='right'>Hello</Button>
          <Button appearance='ghost' arrow='right'>Hello People yoyo</Button>
          <PTag size="medium">Test props in p</PTag>
          <Tag color="primary" size='small'>Primary</Tag>
          <Tag color="grey" size='small'>Grey</Tag>
          <Tag color="green" size='medium'>Green</Tag>
          <Rating rating={rating} isEditable setRating={setRating} />
          <ul>
              {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
          </ul>
      </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomePropsTypes> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItemTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};
