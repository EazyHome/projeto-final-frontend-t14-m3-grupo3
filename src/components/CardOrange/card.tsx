import { OrangeItem } from "./style";

interface iProp {
  img: string;
  type: string;
  onClick?: () => void;
}

export function OrangeCard({ img, type }: iProp) {
  return (
    <OrangeItem>
      <div>
        <img src={img} />
      </div>
      <p>{type}</p>
    </OrangeItem>
  );
}
