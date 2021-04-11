// /my-addon/src/preset.js

export function managerEntries (entry = []) {
  return [...entry, require.resolve('./register')] // 👈 addon implementation
}
