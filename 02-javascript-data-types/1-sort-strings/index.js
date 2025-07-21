/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (['asc', 'desc'].includes(param)) {
    let result = arr.toSorted((a,b) => a.localeCompare(b,['ru', 'en'], { caseFirst: "upper" }));
    if (param === 'asc') {

      return result;
    }

    return result.reverse();
  }
  throw new Error('Sorted arrays parameter must be "asc" or "desc"');
}
