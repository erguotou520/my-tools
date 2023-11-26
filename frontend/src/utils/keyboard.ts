export enum WailsModifier {
  ModCtrl = 0x1000,
  ModShift = 0x200,
  ModOption = 0x800,
  ModCmd = 0x100,
}

export enum WailsKey {
  KeySpace = 49,
  Key1 = 18,
  Key2 = 19,
  Key3 = 20,
  Key4 = 21,
  Key5 = 23,
  Key6 = 22,
  Key7 = 26,
  Key8 = 28,
  Key9 = 25,
  Key0 = 29,
  KeyA = 0,
  KeyB = 11,
  KeyC = 8,
  KeyD = 2,
  KeyE = 14,
  KeyF = 3,
  KeyG = 5,
  KeyH = 4,
  KeyI = 34,
  KeyJ = 38,
  KeyK = 40,
  KeyL = 37,
  KeyM = 46,
  KeyN = 45,
  KeyO = 31,
  KeyP = 35,
  KeyQ = 12,
  KeyR = 15,
  KeyS = 1,
  KeyT = 17,
  KeyU = 32,
  KeyV = 9,
  KeyW = 13,
  KeyX = 7,
  KeyY = 16,
  KeyZ = 6,

  KeyReturn = 0x24,
  KeyEscape = 0x35,
  KeyDelete = 0x33,
  KeyTab = 0x30,

  KeyLeft = 0x7B,
  KeyRight = 0x7C,
  KeyUp = 0x7E,
  KeyDown = 0x7D,

  KeyF1 = 0x7A,
  KeyF2 = 0x78,
  KeyF3 = 0x63,
  KeyF4 = 0x76,
  KeyF5 = 0x60,
  KeyF6 = 0x61,
  KeyF7 = 0x62,
  KeyF8 = 0x64,
  KeyF9 = 0x65,
  KeyF10 = 0x6D,
  KeyF11 = 0x67,
  KeyF12 = 0x6F,
  KeyF13 = 0x69,
  KeyF14 = 0x6B,
  KeyF15 = 0x71,
  KeyF16 = 0x6A,
  KeyF17 = 0x40,
  KeyF18 = 0x4F,
  KeyF19 = 0x50,
  KeyF20 = 0x5A
}

const keyMap = {
  ' ': WailsKey.KeySpace,
  '1': WailsKey.Key1,
  '2': WailsKey.Key2,
  '3': WailsKey.Key3,
  '4': WailsKey.Key4,
  '5': WailsKey.Key5,
  '6': WailsKey.Key6,
  '7': WailsKey.Key7,
  '8': WailsKey.Key8,
  '9': WailsKey.Key9,
  '0': WailsKey.Key0,

  'a': WailsKey.KeyA,
  'b': WailsKey.KeyB,
  'c': WailsKey.KeyC,
  'd': WailsKey.KeyD,
  'e': WailsKey.KeyE,
  'f': WailsKey.KeyF,
  'g': WailsKey.KeyG,
  'h': WailsKey.KeyH,
  'i': WailsKey.KeyI,
  'j': WailsKey.KeyJ,
  'k': WailsKey.KeyK,
  'l': WailsKey.KeyL,
  'm': WailsKey.KeyM,
  'n': WailsKey.KeyN,
  'o': WailsKey.KeyO,
  'p': WailsKey.KeyP,
  'q': WailsKey.KeyQ,
  'r': WailsKey.KeyR,
  's': WailsKey.KeyS,
  't': WailsKey.KeyT,
  'u': WailsKey.KeyU,
  'v': WailsKey.KeyV,
  'w': WailsKey.KeyW,
  'x': WailsKey.KeyX,
  'y': WailsKey.KeyY,
  'z': WailsKey.KeyZ,

  'Enter': WailsKey.KeyReturn,
  'Escape': WailsKey.KeyEscape,
  'Delete': WailsKey.KeyDelete,
  'Tab': WailsKey.KeyTab,

  'ArrowLeft': WailsKey.KeyLeft,
  'ArrowRight': WailsKey.KeyRight,
  'ArrowUp': WailsKey.KeyUp,
  'ArrowDown': WailsKey.KeyDown,

  'F1': WailsKey.KeyF1,
  'F2': WailsKey.KeyF2,
  'F3': WailsKey.KeyF3,
  'F4': WailsKey.KeyF4,
  'F5': WailsKey.KeyF5,
  'F6': WailsKey.KeyF6,
  'F7': WailsKey.KeyF7,
  'F8': WailsKey.KeyF8,
  'F9': WailsKey.KeyF9,
  'F10': WailsKey.KeyF10,
  'F11': WailsKey.KeyF11,
  'F12': WailsKey.KeyF12,
  'F13': WailsKey.KeyF13,
  'F14': WailsKey.KeyF14,
  'F15': WailsKey.KeyF15,
  'F16': WailsKey.KeyF16,
  'F17': WailsKey.KeyF17,
  'F18': WailsKey.KeyF18,
  'F19': WailsKey.KeyF19,
  'F20': WailsKey.KeyF20
} as const

export function mapEventKey(event: KeyboardEvent) {
  if (event.key in keyMap) {
    return keyMap[event.key as keyof typeof keyMap]
  }
  return null
}

export function mapModifiers(event: KeyboardEvent) {
  const modifiers: WailsModifier[] = []
  if (event.ctrlKey) {
    modifiers.push(WailsModifier.ModCtrl)
  }
  if (event.shiftKey) {
    modifiers.push(WailsModifier.ModShift)
  }
  if (event.altKey) {
    modifiers.push(WailsModifier.ModOption)
  }
  if (event.metaKey) {
    modifiers.push(WailsModifier.ModCmd)
  }
  return modifiers
}