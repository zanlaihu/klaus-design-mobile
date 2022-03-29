const fontWeightmap = {
  Regular: 400,
  Medium: 500,
  Bold: 700,
  Black: 900,
}

const templateNames = [
  'borderWidth',
  'spacing',
  'borderRadius',
  'letterSpacing',
  'fontSizes',
  'lineHeights',
]

const setPXTemplat = () => {
  const setUnitPX = function (rule) {
    // 解析 一级token
    if (typeof rule === 'string') {
      const unit = rule.indexOf('%') > -1 ? '' : 'px'
      return `${rule}${unit}`
    }
    return rule
  }
  const templates = {}
  // eslint-disable-next-line array-callback-return
  templateNames.map(name => {
    templates[name] = setUnitPX
  })
  return templates
}

const styleTemplat = {
  boxShadow({ x = 0, y = 0, blur = 0, spread = 0, color = '#000', type }) {
    return `${x}px ${y}px ${blur && `${blur}px`} ${
      spread && `${spread}px`
    } ${color} ${type == 'dropShadow' ? '' : 'inset'}`
  },
  ...setPXTemplat(),
  fontFamilies(rule) {
    return `'${rule}'`
  },
  fontWeights(rule) {
    return `${fontWeightmap[rule]}`
  },
}

const styleClassMap = ['Display', 'Headline', 'Title', 'Label', 'Body']

const isStyleClass = function (str) {
  return styleClassMap.indexOf(str) > -1
}

const MixinsMap = {
  // fontFamily: 'font-family',
  fontWeight: 'font-weight',
  lineHeight: 'line-height',
  fontSize: 'font-size',
  letterSpacing: 'letter-spacing',
  // "paragraphSpacing":'font-size',
  // "textCase":'font-size',
  // "textDecoration":'font-size',
}

function mixinsParser(object) {
  const output = {}
  const keys = Object.keys(object)
  // eslint-disable-next-line array-callback-return
  keys.map(key => {
    output[key] = {}
    const subObj = object[key]
    const subKeys = Object.keys(subObj)
    let str = ''
    // eslint-disable-next-line array-callback-return
    subKeys.map(subkey => {
      if (MixinsMap[subkey]) {
        const keyName = MixinsMap[subkey]
        const { value } = object[key][subkey]
        str = `${str}  ${keyName}: var(${value});\n`
      }
    })
    output[key].value = `${str}`
  })
  return output
}

function subParse(object) {
  const output = object
  try {
    const keys = Object.keys(object)
    if (typeof object === 'object' && !object.value && object.value != 0) {
      // eslint-disable-next-line array-callback-return
      keys.map(key => {
        if (styleClassMap.indexOf(key) > -1) {
          output[key] = mixinsParser(object[key])
        } else {
          output[key] = subParse(object[key])
        }
      })
    } else {
      if (styleTemplat[object.type]) {
        output.value = styleTemplat[object.type](object.value)
      }
      return output
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
  return output
}

const parser = function (contents) {
  // eslint-disable-next-line no-param-reassign
  contents = contents.replace(/("\$)(.+)(")/g, '"{$2.value}"')
  let object = JSON.parse(contents)
  if (object.global) {
    object = object.global
  }
  if (object.sys) {
    object = object.sys
  }
  const output = subParse(object)
  return output
}

// update mixinPrefix, like: --adw-sys-label-large& -> .adw-sys-label-large
const mixinsNamePrefix = function (dictionary) {
  // eslint-disable-next-line no-useless-escape
  return dictionary.replace(/(\-\-)(.*?)(\&)/g, '.$2 ')
}

module.exports = {
  isStyleClass,
  parser,
  mixinsNamePrefix,
}
