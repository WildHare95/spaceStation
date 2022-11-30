import { type } from "@testing-library/user-event/dist/type";
import SpaceStation from "assets/icons/space-station.svg";
import { FC, memo } from "react";

type Props = {
  lat: number;
  lng: number;
}

const MarkerComponent: FC<Props> = () => {
    return (
      <>
        <img src={SpaceStation} alt="" style={{width: '4rem', height: '4rem', transform: "translate(-50%, -100%)"}} />
      </>
    );
  };

  export default memo(MarkerComponent);
