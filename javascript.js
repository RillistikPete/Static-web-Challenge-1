function updateTextInput1(val) {
  val = val > 100 ? 100 : val;
  val = val < 0 ? 0 : val;
  document.getElementById('inputRange').value = val;
  document.getElementById('inputNum').value = val;
}