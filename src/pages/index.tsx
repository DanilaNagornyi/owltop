import Htag from "../components/Htag";
import Tag from "../components/Tag";
import PTag from "../components/PTag";
import Button from "../components/Button";
import {useState} from "react";
import Rating from "../components/Rating";
import {withLayout} from "../layout";

import {GetServerSideProps} from "next";

import {useAppSelector, wrapper} from "../redux";
import findMenuFirstThunk from "../redux/thunks/menuThunks/findMenuFirstThunk";

function Home() {
  const {menu} = useAppSelector(state => state.menu);
  const [rating, setRating] = useState<number>(3);


  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance='primary' arrow='right'>Hello</Button>
      <Button appearance='ghost' arrow='right'>Hello People yoyo</Button>
      <PTag size="medium">Test props in p</PTag>
      <Tag color="primary" size='small'>Primary</Tag>
      <Tag color="grey" size='small'>Grey</Tag>
      <Tag color="green" size='medium'>Green</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(findMenuFirstThunk());

  return {
    props: {}
  };
});
