import toast from 'react-hot-toast';

export const withToastError = <P extends any[], T>(promise: (...params: P) => Promise<T>, errorMessage?: string) => async (...params: P) => {
  try {
    return await promise(...params);
  } catch (e) {
    toast.error(errorMessage ?? "Sorry, something went wrong...");
  }
}