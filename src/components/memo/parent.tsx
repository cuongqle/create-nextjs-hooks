import {useEffect, useState} from "react";
import Button from "./button";
import ChildComponent from "./child";
import MemoizedChildComponent from "./react-memo-child";
import UseMemoChildComponent from "./use-memo-child";

const WEATHER = {
    Wind: 'Wind',
    Cloudiness: 'Cloudiness',
    Thunderstorms: 'Thunderstorms',
    Droughts: 'Droughts'
};

export default function ParentComponent({title, withoutMemo = false, withReactMemo=false, withUseMemo = false}) {
    const [weather, setWeather] = useState("");
    const [peopleSay, setPeopleSay] = useState("");
    const [times, setTimes] = useState(0);

    useEffect(() => {
        switch (weather) {
            case WEATHER.Wind:
            case WEATHER.Cloudiness:
                return setPeopleSay('Good')
            default:
                return setPeopleSay('Terrible');
        }
    }, [weather]);

    return (
        <div className="flex flex-col justify-center items-center border-2 rounded-md mt-5 dark:border-yellow-200 max-w-lg m-auto pb-10 w-1/2">
            <h3 className="text-center dark:text-gray-400 mt-10">{title}</h3>

            <h1 className="font-semibold text-2xl dark:text-white max-w-md text-center">
                Select a weather!
            </h1>

            <div className="flex flex-col gap-4 mt-10">
                <Button text={WEATHER.Wind} onClick={() => setWeather(WEATHER.Wind)} />
                <Button text={WEATHER.Cloudiness} onClick={() => setWeather(WEATHER.Cloudiness)} />
                <Button text={WEATHER.Thunderstorms} onClick={() => setWeather(WEATHER.Thunderstorms)} />
                <Button text={WEATHER.Droughts} onClick={() => setWeather(WEATHER.Droughts)} />
            </div>

            {weather && (<>
                    <p>
                        Your selected: <span className="font-semibold dark:text-yellow-500">{weather}</span>
                    </p>
                    <p>
                        People say: <span className="font-semibold dark:text-yellow-500">{peopleSay}</span>
                    </p>
                </>
            )}

            {withoutMemo && <ChildComponent />}

            {withReactMemo && <MemoizedChildComponent/>}

            {withUseMemo && <div className="mt-4 text-center">
              <button
                  className="bg-indigo-200 hover:bg-indigo-300 py-2 px-10 rounded-md"
                  onClick={() => setTimes(times + 1)}
              >
                Force render
              </button>
              <UseMemoChildComponent memoizedValue={times}/>
            </div>}
        </div>
    )
}
