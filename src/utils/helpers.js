export const isBetween = function(min, max, compare) {
  const absoluteMin = Math.min(min, max)
  const absoluteMax = Math.max(min, max)

  return compare >= absoluteMin && compare <= absoluteMax
}