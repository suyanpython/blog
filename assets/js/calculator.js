  // Constants for calculations
  const TAX_RATE = 0.40; // 40% tax

  // Function to update all calculations
  function updateCalculations() {
    const horaireBrut = parseFloat($('#horaireBrut').val());

    if (isNaN(horaireBrut)) return;

    // Calculate Net Horaire from brut horaire
    const horaireNet = horaireBrut * 0.78; // Example, 78% of brut
    const mensuelBrut = horaireBrut * 151.67; // Example monthly calculation
    const mensuelNet = horaireNet * 151.67; // Example monthly net calculation
    const annuelBrut = mensuelBrut * 12; // Example annual brut calculation
    const annuelNet = mensuelNet * 12; // Example annual net calculation

    // Apply tax (40%) for after tax values
    const mensuelNetImpot = mensuelNet * (1 - TAX_RATE);
    const annuelNetImpot = annuelNet * (1 - TAX_RATE);

    // Update the DOM with the calculated values
    $('#horaireNet').text(horaireNet.toFixed(2));
    $('#mensuelBrut').text(mensuelBrut.toFixed(2));
    $('#mensuelNet').text(mensuelNet.toFixed(2));
    $('#annuelBrut').text(annuelBrut.toFixed(2));
    $('#annuelNet').text(annuelNet.toFixed(2));
    $('#mensuelNetImpot').text(mensuelNetImpot.toFixed(2));
    $('#annuelNetImpot').text(annuelNetImpot.toFixed(2));
  }

  // Trigger the calculations when the input changes
  $('#horaireBrut').on('input', updateCalculations);

  // Run the calculation on page load to initialize the values
  $(document).ready(function() {
    updateCalculations();
  });