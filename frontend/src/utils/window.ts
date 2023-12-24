import { WindowSetSize } from '@wails/runtime'
export function setWindowSize(height: number, width = 880) {
  WindowSetSize(width, height)
}
