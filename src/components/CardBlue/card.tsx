import { BlueItem } from "./style";

interface iProp {
  img: string;
  type: string;
  onClick?: () => void;
}

export function BlueCard({ img, type }: iProp) {
  return (
    <BlueItem>
      <div>
        <img src={img} />
      </div>
      <p>{type}</p>
    </BlueItem>
  );
}

