export interface ConnectionState {
  isOnline: boolean;
}

export const initialConnectionState: ConnectionState = {
  isOnline: navigator.onLine,
};
