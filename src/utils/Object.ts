import { DeepValueType, KeyPaths } from "../types/utils";

export const getByKeyPath = <T>(obj: T, path: KeyPaths<T>) => {
  const parts = path.split('.');
  return parts.reduce<any | null>((result, key) => {
    if (!result) return null;
    return result[key as keyof typeof result] ?? null;
  }, obj);
};

export const deepUpdate = <T>(record: T, key: KeyPaths<T>, value: DeepValueType<T>): T => {
  if (!key) return record;
  if (key.endsWith("."))
    return deepUpdate(record, key.slice(0, -1) as KeyPaths<T>, value);
  const [queryKey, ...rest] = key.split(".");
  const usingKey = queryKey as keyof T;
  if (rest.length === 0) {
  return { ...record, [usingKey]: value };
  }
  return {
    ...record,
    [usingKey]: deepUpdate(
      record[usingKey],
      rest.join(".") as KeyPaths<T[keyof T]>,
      value as DeepValueType<T[keyof T]>
    ),
  };
};

export const multiDeepUpdate = <T>(
  record: T,
  updateMapping: Partial<Record<KeyPaths<T>, DeepValueType<T>>>
) => {
  return Object.entries(updateMapping).reduce<T>(
    (result, [keyPath, value]) =>
      deepUpdate(result, keyPath as KeyPaths<T>, value as DeepValueType<T>),
    record
  );
};