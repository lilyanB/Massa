// The entry file of your WebAssembly module.
import { generateEvent, toBytes, Storage, Args, fromBytes } from '@massalabs/massa-as-sdk';

export function event(_: StaticArray<u8>): StaticArray<u8> {
  const message = "I'm an event!";
  generateEvent(message);
  return toBytes(message);
}

export function initialize(_: StaticArray<u8>): void {
  let value = new Args();
  value.add(1 as u32);
  Storage.set(toBytes("value"), value.serialize());
}

export function incr_value(args: StaticArray<u8>): void {
  let args_deserialized = new Args(args);
  let incr = args_deserialized.nextU32();

  let value = Storage.get(toBytes("value"));
  let value_deserialized = new Args(value);
  let valueNumber = value_deserialized.nextU32();
  let result = valueNumber + incr;

  let incr_encoded = new Args();
  incr_encoded.add(result);
  Storage.set(toBytes("value"), incr_encoded.serialize());
}

export function get_value(_: StaticArray<u8>): StaticArray<u8> {
  let value = Storage.get(toBytes('value'));
  const message = `Your value : ${value[0].toString()} `;
  generateEvent(message);
  return toBytes(message);
}