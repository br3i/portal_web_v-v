function toggleForm() {
    var selectBox = document.getElementById("crudOperations");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  
    document.getElementById("createForm").style.display = "none";
    document.getElementById("readForm").style.display = "none";
    document.getElementById("updateForm").style.display = "none";
    document.getElementById("deleteForm").style.display = "none";
  
    if (selectedValue === "create") {
      document.getElementById("createForm").style.display = "block";
    } else if (selectedValue === "read") {
      document.getElementById("readForm").style.display = "block";
    } else if (selectedValue === "update") {
      document.getElementById("updateForm").style.display = "block";
    } else if (selectedValue === "delete") {
      document.getElementById("deleteForm").style.display = "block";
    }
  }
  
  function mokConfirmCreate() {
    var serviceName = document.getElementById("createServiceName").value.trim();
    var serviceDescription = document.getElementById("createServiceDescription").value.trim();
  
    if (!serviceName) {
      alert("Por favor, ingrese el nombre del servicio.");
      return;
    }
  
    if (serviceName.length < 3) {
      alert("El nombre del servicio debe tener al menos 3 caracteres.");
      return;
    }
  
    if (!serviceDescription) {
      alert("Por favor, ingrese la descripción del servicio.");
      return;
    }
  
    if (serviceDescription.length < 10) {
      alert("La descripción del servicio debe tener al menos 10 caracteres.");
      return;
    }
  
    if (confirm("¿Estás seguro de que quieres crear este servicio?")) {
      // Aquí iría la lógica para crear el servicio
      console.log("Servicio creado:", serviceName, serviceDescription);
      alert("¡Servicio creado exitosamente!");
    }
  }
  
  function mokConfirmRead() {
    var serviceName = document.getElementById("readServiceName").value.trim();
  
    if (!serviceName) {
      alert("Por favor, ingrese el nombre del servicio.");
      return;
    }
  
    if (serviceName.length < 3) {
      alert("El nombre del servicio debe tener al menos 3 caracteres.");
      return;
    }
  
    if (confirm("¿Estás seguro de que quieres buscar este servicio?")) {
      // Aquí iría la lógica para buscar el servicio
      console.log("Buscar servicio:", serviceName);
      alert("¡Búsqueda exitosa!");
    }
  }
  
  function mokConfirmUpdate() {
    var serviceName = document.getElementById("updateServiceName").value.trim();
    var serviceDescription = document.getElementById("updateServiceDescription").value.trim();
  
    if (!serviceName) {
      alert("Por favor, ingrese el nombre del servicio.");
      return;
    }
  
    if (serviceName.length < 3) {
      alert("El nombre del servicio debe tener al menos 3 caracteres.");
      return;
    }
  
    if (!serviceDescription) {
      alert("Por favor, ingrese la descripción del servicio.");
      return;
    }
  
    if (serviceDescription.length < 10) {
      alert("La descripción del servicio debe tener al menos 10 caracteres.");
      return;
    }
  
    if (confirm("¿Estás seguro de que quieres actualizar este servicio?")) {
      // Aquí iría la lógica para actualizar el servicio
      console.log("Actualizar servicio:", serviceName, serviceDescription);
      alert("¡Servicio actualizado exitosamente!");
    }
  }
  
  function mokConfirmDelete() {
    var serviceName = document.getElementById("deleteServiceName").value.trim();
  
    if (!serviceName) {
      alert("Por favor, ingrese el nombre del servicio.");
      return;
    }
  
    if (serviceName.length < 3) {
      alert("El nombre del servicio debe tener al menos 3 caracteres.");
      return;
    }
  
    if (confirm("¿Estás seguro de que quieres eliminar este servicio?")) {
      // Aquí iría la lógica para eliminar el servicio
      console.log("Eliminar servicio:", serviceName);
      alert("¡Servicio eliminado exitosamente!");
    }
  }
  
  module.exports = {
    mokConfirmCreate,
    mokConfirmRead,
    mokConfirmUpdate,
    mokConfirmDelete
  };
  