interface FormatResult {
  value: string
  index: number
}

type FormatStringType = (
  value: string,
  tpl: string,
  cursorIndex: number,
  backKey: boolean,
  formatAdvanced: boolean
) => FormatResult

const formatString: FormatStringType = (
  value,
  tpl,
  cursorIndex,
  backKey,
  formatAdvanced
) => {
  let currentIndex = 0
  let formatStr = ''
  const matcher = /\{(\d+)\}/g
  let matchResult
  let execIndex = 0
  let valueTooShoot = false
  let resultCursorIndex = -1

  // eslint-disable-next-line no-cond-assign
  while ((matchResult = matcher.exec(tpl)) && !valueTooShoot) {
    const num = parseInt(matchResult[1], 10)
    const oldIndex = currentIndex
    const oldExecIndex = execIndex

    currentIndex += num
    execIndex = matcher.lastIndex

    if (formatAdvanced || value.length > oldIndex) {
      // fomatedString + separator(e.g. space) + slice
      const slice = value.slice(oldIndex, currentIndex)
      const breaker = tpl.slice(oldExecIndex, execIndex - matchResult[0].length)
      formatStr = formatStr + breaker + slice
    }

    // cut the length
    if (
      currentIndex > value.length ||
      (backKey && currentIndex === value.length)
    ) {
      currentIndex = value.length
      valueTooShoot = true
    }

    // cursor index
    if (
      (oldIndex < cursorIndex ||
        (oldIndex === cursorIndex && (!backKey || !cursorIndex))) &&
      (cursorIndex < currentIndex || (cursorIndex === currentIndex && backKey))
    ) {
      resultCursorIndex = formatStr.length - (currentIndex - cursorIndex)
    }
  }

  if (!valueTooShoot) {
    formatStr += tpl.slice(execIndex)
  }

  if (resultCursorIndex === -1) {
    resultCursorIndex = formatStr.length
  }

  return {
    value: formatStr,
    index: resultCursorIndex,
  }
}

function getFormatTemplatesItemLength(formats: string[]) {
  return formats
    .map(item => ({
      fmtVal: item,
      num: getFormatTemplateItemNumber(item).reduce(
        (a, b) => parseInt(b) + a,
        0
      ),
    }))
    .sort((a, b) => a.num - b.num)
}
function getFormatTemplateItemNumber(str: string) {
  const curr = str.match(/\{(\d+)\}/g)
  if (curr) {
    return curr.map((item: string) => item.replace(/\D/g, ''))
  } else {
    return []
  }
}
// Matching templates by length of values
function getCurrFormatTemplate(
  value: string,
  templates: string | string[]
): string {
  const val = value || ''
  let curr
  if (Array.isArray(templates)) {
    curr = getFormatTemplatesItemLength(templates)
  } else {
    curr = getFormatTemplatesItemLength([templates])
  }
  const filterArr = curr.filter(item => val.length <= item.num)
  if (filterArr.length > 0) {
    return filterArr[0].fmtVal
  }
  return ''
}
/**
 * mult format
 * @param {string} value value e.g 123456789
 * @param {string | array} rule format rules e.g {4} {4} {4}
 * @param {number} cursorIndex
 * @param {boolean} backKey
 * @param {boolean} formatAdvanced
 * @returns {FormatResult} e.g { value: '1234 5678 9', index: 0 }
 */
export const stringFormatter = (
  val: string,
  templates: string | string[],
  cursorIndex?: number,
  backKey?: boolean,
  formatAdvanced?: boolean
): FormatResult => {
  const currCursorIndex = cursorIndex || 0
  if (val) {
    const curr = val.replace(/ /g, '')
    const currFormatTemplate = getCurrFormatTemplate(curr, templates)
    if (currFormatTemplate) {
      const currFormatAdvanced =
        typeof formatAdvanced === 'undefined' ? true : !!formatAdvanced
      return formatString(
        curr,
        currFormatTemplate,
        currCursorIndex,
        !!backKey,
        currFormatAdvanced
      )
    }
  }
  return { value: val, index: currCursorIndex }
}
