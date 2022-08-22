export default function(color, level = 40) {
  let c = color.substring(1);      // strip #
  let rgb = parseInt(c, 16);   // convert rrggbb to decimal
  let r = (rgb >> 16) & 0xff;  // extract red
  let g = (rgb >>  8) & 0xff;  // extract green
  let b = (rgb >>  0) & 0xff;  // extract blue

  let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  if (luma < level) {
    return false;
  }

  return true;
}
