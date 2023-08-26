document.getElementById('convert').addEventListener('click', function() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  if (!isNaN(celsius)) {
    var fahrenheit = (celsius * 9/5) + 32;
      var kelvin = celsius + 273.15;
      var result = `${celsius}°C is ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
      document.getElementById("result").innerText = result;
  } else {
    document.getElementById('result').textContent = 'Please enter a valid temperature in Celsius.';
  }
});
