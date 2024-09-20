import { Dimensions, PixelRatio, Platform } from 'react-native'

export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height

export const wpToDp = widthPercent => {
    const elemWidth = parseFloat(widthPercent)
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100)
}

export const hpToDp = heightPercent => {
    const elemHeight = parseFloat(heightPercent)
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100)
}

const IPHONE_6_HEIGHT = 1334
const IPHONE_6_WIDTH = 750
export const pixH = (pixel) => hpToDp((pixel / IPHONE_6_HEIGHT) * 100)
export const pixW = (pixel) => wpToDp((pixel / IPHONE_6_WIDTH) * 100)

const ptToPx = 1.11

export const pt = (val) => pixH(val * ptToPx) // hpToDp(pixH(val*ptToPx))

export const responsive = {
    pt9: pt(14),
    pt10: pt(16),
    pt11: pt(17),
    pt12: pt(18),
    pt13: pt(19),
    pt14: pt(20),
    pt15: pt(21),
    pt16: pt(22),
    pt17: pt(23),
    pt18: pt(24),
    pt19: pt(25),
    pt20: pt(26),
    pt21: pt(27),
    pt22: pt(28),
    pt23: pt(29),
    pt24: pt(30),
    pt25: pt(31),
    pt26: pt(32),
    pt27: pt(33),
    pt28: pt(34),
    pt29: pt(35),
    pt30: pt(36),
    pt31: pt(37),
    pt32: pt(38),
    pt33: pt(39),
    pt34: pt(40),
    pt35: pt(41),
    pt36: pt(42),
    pt37: pt(43),
    pt38: pt(44),
    pt39: pt(45),
    pt40: pt(46),
    pt41: pt(47),
    pt42: pt(48),
    pt43: pt(49),
    pt44: pt(50),
    pt45: pt(51),
    pt46: pt(52),
    pt47: pt(53),
    pt48: pt(54),
    pt49: pt(55),
    pt50: pt(56),
}