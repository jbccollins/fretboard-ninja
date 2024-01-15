import { Interval } from "@/lib/types";

export function getIntervalOffset(startingInteval: Interval, halfSteps: number): Interval {
    let value = (startingInteval + halfSteps) % 12;
    if (value === 0) {
        value = 12;
    }
    return value as Interval;
}