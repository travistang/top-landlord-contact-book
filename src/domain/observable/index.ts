export abstract class Subscriber<T, Events> {
  abstract onEvent(event: Events, payload: T): void;
}

export interface Observable<T, Events> {
  _subscribers: Record<string, Subscriber<T, Events>>;

  subscribe(subscriber: Subscriber<T, Events>): string;
  unsubscribe(id: string): void;
}
