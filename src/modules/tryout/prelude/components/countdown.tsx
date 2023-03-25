import Countdown, { zeroPad } from "react-countdown";

interface PreludeCountDownProps {
  startAt: Date;
}

const PreludeCountDown = (props: PreludeCountDownProps) => {
  const { startAt } = props;

  const renderer = ({ days, hours, minutes, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <>Nice</>;
    } else {
      // Render a countdown
      return (
        <span>
          {zeroPad(days)} Hari, {zeroPad(hours)} Jam, {zeroPad(minutes)} Menit
        </span>
      );
    }
  };

  return (
    <>
      <Countdown date={startAt} renderer={renderer} />
    </>
  );
};

export default PreludeCountDown;
