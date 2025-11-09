export function pxToVh(px, PresetScreen = { width: 1920, height: 1080 }) {
  return (px / PresetScreen.height) * 100;
}
