import { useMemo } from "react";
import { toast } from "react-hot-toast";
import Countdown, { zeroPad } from "react-countdown";

interface CoundownProps {
  milisecs: number;
}

export const TimeRundown = (props: CoundownProps) => {
  const { milisecs } = props;

  const time = useMemo(() => {
    return Date.now() + milisecs;
  }, []);

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      console.log("Completed");
    } else {
      return (
        <h3>
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </h3>
      );
    }
  };

  return <Countdown date={time} renderer={renderer} />;
};
