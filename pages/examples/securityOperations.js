function toggleForm() {
    var selectBox = document.getElementById("securityOperations");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    document.getElementById("entryForm").style.display = "none";
    document.getElementById("exitForm").style.display = "none";
    document.getElementById("incidentForm").style.display = "none";

    if (selectedValue === "entry") {
      document.getElementById("entryForm").style.display = "block";
    } else if (selectedValue === "exit") {
      document.getElementById("exitForm").style.display = "block";
    } else if (selectedValue === "incident") {
      document.getElementById("incidentForm").style.display = "block";
    }
  }

  function mokConfirmEntry() {
    var visitorName = document.getElementById("entryVisitorName").value.trim();
    var purpose = document.getElementById("entryPurpose").value.trim();

    if (!visitorName) {
        alert("Por favor, ingrese el nombre del visitante.");
        return;
    }

    if (visitorName.length < 3) {
        alert("El nombre del visitante debe tener al menos 3 caracteres.");
        return;
    }

    if (!purpose) {
        alert("Por favor, ingrese el motivo de la visita.");
        return;
    }

    if (purpose.length < 5) {
        alert("El motivo de la visita debe tener al menos 5 caracteres.");
        return;
    }

    if (confirm("¿Estás seguro de que quieres registrar esta entrada?")) {
        console.log("Registrar entrada:", visitorName, purpose);
        alert("¡Entrada registrada exitosamente!");
    }
}




  function mokConfirmExit() {
    var visitorName = document.getElementById("exitVisitorName").value.trim();

    if (!visitorName) {
      alert("Por favor, ingrese el nombre del visitante.");
      return;
    }

    if (visitorName.length < 3) {
      alert("El nombre del visitante debe tener al menos 3 caracteres.");
      return;
    }

    if (confirm("¿Estás seguro de registrar la salida de este visitante?")) {
      // Aquí iría la lógica para registrar la salida
      console.log("Registrar salida:", visitorName);
      alert("¡Salida registrada exitosamente!");
    }
  }

  function mokConfirmIncident() {
    var description = document.getElementById("incidentDescription").value.trim();

    if (!description) {
      alert("Por favor, ingrese la descripción del incidente.");
      return;
    }

    if (description.length < 10) {
      alert("La descripción del incidente debe tener al menos 10 caracteres.");
      return;
    }

    if (confirm("¿Estás seguro de registrar este incidente?")) {
      // Aquí iría la lógica para registrar el incidente
      console.log("Registrar incidente:", description);
      alert("¡Incidente registrado exitosamente!");
    }
  }

  module.exports = {
    mokConfirmEntry,
    mokConfirmExit,
    mokConfirmIncident,
  };