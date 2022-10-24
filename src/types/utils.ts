export type WithId<T> = T & { id: string; };

export type KeyPaths<T> = T extends object
  ? {
      [K in Exclude<keyof T, number | symbol>]:
        | `${K}`
        | `${K}.${KeyPaths<T[K]>}`;
    }[Exclude<keyof T, number | symbol>]
  : "";

export type DeepValueType<T> = T extends object
  ? {
      [K in Exclude<keyof T, symbol>]: T[K] | DeepValueType<T[K]>;
    }[Exclude<keyof T, symbol>] | T
  : T;