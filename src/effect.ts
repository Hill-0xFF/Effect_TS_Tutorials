import { Effect } from 'effect';

/*
type Effect<Requirements, Error, Value> = (requirements: Requirements) => Error | Value;
type Unit = Effect<never, never, void>;
type Simple = Effect<never, Error, number>;
*/

const success = Effect.succeed(42);

const failure = Effect.fail(new Error());

const divideNum = (
  x: number,
  z: number
): Effect.Effect<never, Error, number> => {
  if (z === 0) {
    return Effect.fail(new Error('Trying division by zero not allowed!'));
  }
  return Effect.succeed(x / z);
};

// Sync
//type: Effect<never, never, number>
const log = Effect.sync(() => {
  console.log('Hello Effects!!'); // side effect
  return 42; // return value
});

//type: Effect<never, Error, any>
const program = Effect.try({
  try: () => JSON.parse(''), // will throw because an empty string
  catch: (_caughtError) => new Error('JSON.parse() threw an error!'),
});

// Async
//type: Effect<never, never, number>
const promise = Effect.promise(() => Promise.resolve(42));

// Async that could be rejected
//type: Effect<never, Error, Response>
const response = Effect.tryPromise({
  try: () => fetch('...'),
  catch: (_caughtError) => new Error('Fetch rejected!'),
});

// RUNNING SYNCHRONOUS EFFECTS
//type: Effect<never, never, number>
// const program ...
//type: number
const result = Effect.runSync(program); // console: Hello Effects!!
console.log(result);
