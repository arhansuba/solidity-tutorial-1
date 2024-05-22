// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
function create(
  KeyboardKind _kind,
  bool _isPBT,
  string calldata _filter
) external {
  Keyboard memory newKeyboard = Keyboard({
    kind: _kind,
    isPBT: _isPBT,
    filter: _filter
  });

  createdKeyboards.push(newKeyboard);
}
