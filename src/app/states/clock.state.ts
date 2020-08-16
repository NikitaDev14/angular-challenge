export interface ClockState {
  showSeconds: boolean;
  enableDividersAnimation: boolean;
}

export const initialClockState: ClockState = {
  showSeconds: false,
  enableDividersAnimation: true,
};
