import Htag from "../components/Htag";
import Tag from "../components/Tag";
import PTag from "../components/PTag";
import Button from "../components/Button";
import {useState} from "react";
import Rating from "../components/Rating";
import {withLayout} from "../layout";

function Home() {
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
          <Rating rating={rating} isEditable setRating={setRating} />
      </>
  );
}

export default withLayout(Home);
