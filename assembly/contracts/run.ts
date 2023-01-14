import { Address, Args, call } from '@massalabs/massa-as-sdk';

export function main(): StaticArray<u8> {
  const address = new Address(
    'A1NdLisx4PyQoiufV4BywRBrT8GVaXCQcx6cR6Jghyu4J1yULFK',
  );
  //call(address, 'event', new Args(), 0);
  //call(address, 'initialize', new Args(), 0);
  //call(address, 'incr_value', new Args().add(21), 0); 
  call(address, 'get_value', new Args(), 0);
  return [];
}
