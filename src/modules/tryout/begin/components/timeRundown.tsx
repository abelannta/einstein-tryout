import { useMemo } from "react";
import { toast } from "react-hot-toast";
import Countdown, { zeroPad } from "react-countdown";

interface CoundownProps {
  handleComplete: () => void;
  milisecs: number;
}

export const TimeRundown = (props: CoundownProps) => {
  const { milisecs, handleComplete } = props;

  const time = useMemo(() => {
    return Date.now() + milisecs;
  }, [milisecs]);

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      handleComplete;
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
