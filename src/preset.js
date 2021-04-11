// /my-addon/src/preset.js

export function managerEntries (entry = []) {
  return [...entry, require.resolve('./decorators')] // 👈 addon implementation
}
