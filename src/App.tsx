import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onChangeMinute = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onChangeHours = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <>
      <form>
        <input
          value={minutes}
          onChange={onChangeMinute}
          type="number"
          placeholder="minutes"
        />
        <input
          value={hours}
          onChange={onChangeHours}
          type="number"
          placeholder="hours"
        />
      </form>
    </>
  );
}

export default App;
